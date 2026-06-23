import { NextResponse } from 'next/server'

import { COOKIE_NAME, verifySessionToken } from '@/lib/auth'
import { translateText, type TranslateDirection } from '@/lib/i18n/translate-service'
import { cookies } from 'next/headers'

export async function POST(request: Request) {
  const token = cookies().get(COOKIE_NAME)?.value
  if (!(await verifySessionToken(token))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const body = (await request.json()) as {
      text?: string
      direction?: TranslateDirection
    }

    const text = body.text?.trim()
    const direction = body.direction

    if (!text || (direction !== 'en-ar' && direction !== 'ar-en')) {
      return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
    }

    const translated = await translateText(text, direction)
    return NextResponse.json({ translated })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Translation failed'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
