/**
 * Translation service — OpenAI when configured, MyMemory API as fallback.
 */

export type TranslateDirection = 'en-ar' | 'ar-en'

const MYMEMORY_URL = 'https://api.mymemory.translated.net/get'

async function translateWithOpenAI(text: string, direction: TranslateDirection): Promise<string | null> {
  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey || !text.trim()) return null

  const target = direction === 'en-ar' ? 'Arabic' : 'English'
  const source = direction === 'en-ar' ? 'English' : 'Arabic'

  try {
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL ?? 'gpt-4o-mini',
        temperature: 0.3,
        messages: [
          {
            role: 'system',
            content: `You are a professional translator for a Saudi engineering company website. Translate ${source} to natural, professional ${target}. Return ONLY the translation, no quotes or explanation.`,
          },
          { role: 'user', content: text },
        ],
      }),
    })

    if (!res.ok) return null
    const data = (await res.json()) as {
      choices?: { message?: { content?: string } }[]
    }
    return data.choices?.[0]?.message?.content?.trim() ?? null
  } catch {
    return null
  }
}

async function translateWithMyMemory(text: string, direction: TranslateDirection): Promise<string> {
  const langpair = direction === 'en-ar' ? 'en|ar' : 'ar|en'
  const url = `${MYMEMORY_URL}?q=${encodeURIComponent(text)}&langpair=${langpair}`

  const res = await fetch(url)
  if (!res.ok) throw new Error('Translation service unavailable')

  const data = (await res.json()) as {
    responseData?: { translatedText?: string }
    responseStatus?: number
  }

  if (data.responseStatus && data.responseStatus !== 200) {
    throw new Error('Translation failed')
  }

  const translated = data.responseData?.translatedText?.trim()
  if (!translated) throw new Error('Empty translation')
  return translated
}

export async function translateText(
  text: string,
  direction: TranslateDirection,
): Promise<string> {
  const trimmed = text.trim()
  if (!trimmed) return ''

  const fromOpenAI = await translateWithOpenAI(trimmed, direction)
  if (fromOpenAI) return fromOpenAI

  return translateWithMyMemory(trimmed, direction)
}
