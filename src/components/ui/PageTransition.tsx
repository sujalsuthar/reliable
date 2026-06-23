'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { type ReactNode, useRef } from 'react'

interface PageTransitionProps {
  children: ReactNode
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname()
  const prefersReducedMotion = useReducedMotion()
  const visitedPaths = useRef(new Set<string>())

  const isFirstVisit = !visitedPaths.current.has(pathname)
  visitedPaths.current.add(pathname)

  // First visit (incl. hard refresh) shows content immediately — no opacity:0 flash.
  const animateRouteChange = !isFirstVisit && !prefersReducedMotion

  return (
    <motion.div
      key={pathname}
      initial={animateRouteChange ? { opacity: 0 } : false}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  )
}
