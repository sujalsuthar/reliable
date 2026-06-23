import Image from 'next/image'
import Link from 'next/link'
import { clsx } from 'clsx'

import { LOGO_ALT, LOGO_PATH } from '@/lib/brand'

interface LogoProps {
  className?: string
  height?: number
  logoUrl?: string
  onClick?: () => void
}

export default function Logo({ className, height = 44, logoUrl, onClick }: LogoProps) {
  return (
    <Link
      href="/"
      className={clsx('inline-flex shrink-0 items-center', className)}
      onClick={onClick}
    >
      <Image
        src={logoUrl || LOGO_PATH}
        alt={LOGO_ALT}
        width={200}
        height={height}
        className="w-auto object-contain"
        style={{ height }}
        priority
      />
    </Link>
  )
}
