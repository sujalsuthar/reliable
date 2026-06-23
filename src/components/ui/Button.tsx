'use client'

import { clsx } from 'clsx'
import { motion } from 'framer-motion'
import type { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'outline' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  children: ReactNode
  href?: string
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>
  className?: string
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type']
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-primary-600 text-white hover:bg-primary-700 rounded-lg font-medium',
  outline:
    'border border-primary-600 text-primary-600 hover:bg-primary-50 rounded-lg',
  ghost: 'text-primary-600 hover:bg-primary-50 rounded-lg',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'min-h-[44px] px-4 py-2 text-sm',
  md: 'min-h-[44px] px-4 py-2.5 text-base',
  lg: 'min-h-[44px] px-6 py-3 text-lg',
}

const motionProps = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  href,
  onClick,
  className,
  type = 'button',
}: ButtonProps) {
  const classes = clsx(
    'inline-flex items-center justify-center transition-colors',
    variantClasses[variant],
    sizeClasses[size],
    className,
  )

  if (href) {
    return (
      <motion.a
        href={href}
        onClick={onClick}
        className={classes}
        {...motionProps}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      {...motionProps}
    >
      {children}
    </motion.button>
  )
}
