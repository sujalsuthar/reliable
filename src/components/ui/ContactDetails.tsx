import { Mail, MapPin, Phone } from 'lucide-react'

interface ContactDetailsProps {
  address?: string
  phone?: string
  email?: string
  className?: string
  variant?: 'light' | 'dark'
}

export default function ContactDetails({
  address,
  phone,
  email,
  className = '',
  variant = 'light',
}: ContactDetailsProps) {
  const textClass =
    variant === 'dark'
      ? 'text-gray-300 hover:text-white'
      : 'text-gray-600 hover:text-primary-600'
  const iconClass = variant === 'dark' ? 'text-gray-300' : 'text-primary-600'

  return (
    <div className={`space-y-2 ${className}`}>
      {address && (
        <p className={`flex items-start gap-2 text-sm ${textClass}`}>
          <MapPin className={`mt-0.5 h-4 w-4 shrink-0 ${iconClass}`} aria-hidden />
          <span>{address}</span>
        </p>
      )}
      {phone && (
        <a
          href={`tel:${phone.replace(/\s/g, '')}`}
          className={`flex min-h-[44px] items-center gap-2 text-sm transition-colors ${textClass}`}
        >
          <Phone className={`h-4 w-4 shrink-0 ${iconClass}`} aria-hidden />
          {phone}
        </a>
      )}
      {email && (
        <a
          href={`mailto:${email}`}
          className={`flex min-h-[44px] items-center gap-2 text-sm transition-colors ${textClass}`}
        >
          <Mail className={`h-4 w-4 shrink-0 ${iconClass}`} aria-hidden />
          {email}
        </a>
      )}
    </div>
  )
}
