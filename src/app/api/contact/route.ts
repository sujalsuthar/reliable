import { NextResponse } from 'next/server'

import { addEnquiry } from '@/lib/cms/store'

interface ContactFormPayload {
  fullName: string
  email: string
  phone: string
  companyName?: string
  city?: string
  service?: string
  division: string
  message: string
}

const VALID_CITIES = ['Jeddah', 'Riyadh', 'Dammam', 'Mecca', 'Medina', 'Khobar', 'Other']
const VALID_SERVICES = [
  'feed',
  'pmc',
  'design',
  'procurement',
  'program',
  'construction',
  'commissioning',
  'operations',
  'optimization',
  'other',
]

function validatePayload(data: Partial<ContactFormPayload>) {
  const errors: Record<string, string> = {}

  if (!data.fullName?.trim()) {
    errors.fullName = 'Full name is required.'
  }

  if (!data.email?.trim()) {
    errors.email = 'Email is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Invalid email address.'
  }

  if (!data.phone?.trim()) {
    errors.phone = 'Phone is required.'
  }

  if (!data.city?.trim()) {
    errors.city = 'City is required.'
  } else if (!VALID_CITIES.includes(data.city)) {
    errors.city = 'Invalid city selected.'
  }

  if (!data.service?.trim()) {
    errors.service = 'Service is required.'
  } else if (!VALID_SERVICES.includes(data.service)) {
    errors.service = 'Invalid service selected.'
  }

  if (!data.division?.trim()) {
    errors.division = 'Service is required.'
  }

  if (!data.message?.trim()) {
    errors.message = 'Message is required.'
  } else if (data.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters.'
  }

  return errors
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<ContactFormPayload>
    const errors = validatePayload(body)

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { success: false, error: 'Validation failed.', errors },
        { status: 400 },
      )
    }

    await addEnquiry({
      fullName: body.fullName!.trim(),
      email: body.email!.trim(),
      phone: body.phone!.trim(),
      companyName: body.companyName?.trim() || undefined,
      city: body.city!.trim(),
      service: body.service!.trim(),
      division: body.division!.trim(),
      message: body.message!.trim(),
    })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { success: false, error: 'Invalid request body.' },
      { status: 400 },
    )
  }
}
