import { promises as fs } from 'fs'
import path from 'path'

import { createClient, type VercelKV } from '@vercel/kv'

import type { CmsStore } from '@/lib/cms/types'

const STORE_PATH = path.join(process.cwd(), 'data', 'cms-store.json')
const KV_STORE_KEY = 'cms:store'

let kvClient: VercelKV | null = null

function getKvUrl(): string | undefined {
  return process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL
}

function getKvToken(): string | undefined {
  return process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN
}

export function isKvEnabled(): boolean {
  return Boolean(getKvUrl() && getKvToken())
}

function getKv(): VercelKV {
  if (!kvClient) {
    const url = getKvUrl()
    const token = getKvToken()
    if (!url || !token) {
      throw new Error('KV is not configured')
    }
    kvClient = createClient({ url, token })
  }
  return kvClient
}

export function isBlobEnabled(): boolean {
  return Boolean(process.env.BLOB_READ_WRITE_TOKEN || process.env.VERCEL_BLOB_TOKEN)
}

async function readStoreFromDisk(): Promise<CmsStore | null> {
  try {
    const raw = await fs.readFile(STORE_PATH, 'utf-8')
    return JSON.parse(raw) as CmsStore
  } catch {
    return null
  }
}

async function writeStoreToDisk(store: CmsStore): Promise<void> {
  await fs.mkdir(path.dirname(STORE_PATH), { recursive: true })
  await fs.writeFile(STORE_PATH, JSON.stringify(store, null, 2), 'utf-8')
}

async function readStoreFromKv(): Promise<CmsStore | null> {
  try {
    const data = await getKv().get<CmsStore>(KV_STORE_KEY)
    return data ?? null
  } catch (error) {
    console.error('[cms] KV read failed:', error)
    return null
  }
}

async function writeStoreToKv(store: CmsStore): Promise<void> {
  try {
    await getKv().set(KV_STORE_KEY, store)
  } catch (error) {
    console.error('[cms] KV write failed:', error)
    throw new Error(
      'Could not save to database. Check KV_REST_API_URL and KV_REST_API_TOKEN in Vercel.',
    )
  }
}

export async function readRawStore(): Promise<CmsStore | null> {
  if (isKvEnabled()) {
    const fromKv = await readStoreFromKv()
    if (fromKv) return fromKv
    const fromDisk = await readStoreFromDisk()
    if (fromDisk) {
      try {
        await writeStoreToKv(fromDisk)
      } catch (error) {
        console.error('[cms] KV seed from disk failed:', error)
      }
      return fromDisk
    }
    return null
  }
  return readStoreFromDisk()
}

export async function writeRawStore(store: CmsStore): Promise<void> {
  if (isKvEnabled()) {
    await writeStoreToKv(store)
    return
  }

  if (process.env.VERCEL) {
    throw new Error(
      'CMS storage is not configured on Vercel. Connect Upstash Redis and set KV_REST_API_URL + KV_REST_API_TOKEN.',
    )
  }

  await writeStoreToDisk(store)
}
