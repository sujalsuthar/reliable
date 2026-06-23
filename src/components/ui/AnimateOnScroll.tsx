'use client'

import { clsx } from 'clsx'
import { motion, useReducedMotion } from 'framer-motion'
import { type ReactNode, useEffect, useState } from 'react'

type Direction = 'up' | 'left' | 'right'

interface AnimateOnScrollProps {
  children: ReactNode
  delay?: number
  direction?: Direction
  className?: string
}

function getInitialOffset(direction: Direction) {
  switch (direction) {
    case 'left':
      return { x: -30, y: 0 }
    case 'right':
      return { x: 30, y: 0 }
    case 'up':
    default:
      return { x: 0, y: 30 }
  }
}

export default function AnimateOnScroll({
  children,
  delay = 0,
  direction = 'up',
  className,
}: AnimateOnScrollProps) {
  const offset = getInitialOffset(direction)
  const prefersReducedMotion = useReducedMotion()
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted || prefersReducedMotion) {
    return <div className={clsx(className)}>{children}</div>
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      className={clsx(className)}
    >
      {children}
    </motion.div>
  )
}
