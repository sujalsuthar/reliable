'use client'

import { useInView } from 'framer-motion'
import { useEffect, useMemo, useRef, useState } from 'react'

import StatCard from '@/components/ui/StatCard'

interface AnimatedStatCardProps {
  value: string
  label: string
  description?: string
  variant?: 'light' | 'dark'
}

interface ParsedValue {
  target: number
  prefix: string
  suffix: string
}

function parseNumericValue(value: string): ParsedValue | null {
  const trimmed = value.trim()
  const match = trimmed.match(/^([^0-9]*)([\d.,]+)([^0-9]*)$/)

  if (!match) return null

  const target = parseFloat(match[2].replace(/,/g, ''))
  if (Number.isNaN(target)) return null

  return {
    target,
    prefix: match[1],
    suffix: match[3],
  }
}

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3
}

function AnimatedStatValue({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  const parsed = useMemo(() => parseNumericValue(value), [value])
  const [display, setDisplay] = useState(value)

  useEffect(() => {
    if (!isInView || !parsed || hasAnimated.current) return

    hasAnimated.current = true
    const duration = 1800
    const startTime = performance.now()
    const { target, prefix, suffix } = parsed
    let frameId = 0

    const animate = (now: number) => {
      const rawProgress = Math.min((now - startTime) / duration, 1)
      const progress = easeOutCubic(rawProgress)
      const current = Math.round(target * progress)
      setDisplay(`${prefix}${current}${suffix}`)

      if (rawProgress < 1) {
        frameId = requestAnimationFrame(animate)
      } else {
        setDisplay(value)
      }
    }

    setDisplay(`${parsed.prefix}0${parsed.suffix}`)
    frameId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(frameId)
  }, [isInView, parsed, value])

  useEffect(() => {
    if (!parsed) {
      setDisplay(value)
    }
  }, [value, parsed])

  return <span ref={ref}>{display}</span>
}

export default function AnimatedStatCard({
  value,
  label,
  description,
  variant = 'light',
}: AnimatedStatCardProps) {
  return (
    <StatCard
      value={<AnimatedStatValue value={value} />}
      label={label}
      description={description}
      variant={variant}
    />
  )
}
