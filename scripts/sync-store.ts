import { promises as fs } from 'fs'
import path from 'path'

import { createInitialStore } from '../src/lib/cms/init-store'
import { PROFILE_VERSION } from '../src/lib/cms/store'
import { syncGlobalToSiteSettings } from '../src/lib/cms/store'

async function main() {
  const store = syncGlobalToSiteSettings(createInitialStore())
  store.profileVersion = PROFILE_VERSION

  const outPath = path.join(process.cwd(), 'data', 'cms-store.json')
  await fs.mkdir(path.dirname(outPath), { recursive: true })
  await fs.writeFile(outPath, JSON.stringify(store, null, 2), 'utf-8')
  console.log(`Wrote ${outPath} with profileVersion ${PROFILE_VERSION}`)
  console.log(
    'Services:',
    store.services.map((s) => s.slug?.current).join(', '),
  )
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
