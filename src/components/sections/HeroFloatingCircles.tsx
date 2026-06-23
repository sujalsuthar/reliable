'use client'

import { motion } from 'framer-motion'

const circles = [
  { size: 320, left: '8%', top: '15%', duration: 8, color: 'bg-primary-400/10' },
  { size: 220, left: '72%', top: '55%', duration: 12, color: 'bg-accent-400/8' },
  { size: 160, left: '48%', top: '8%', duration: 15, color: 'bg-primary-500/10' },
] as const

export default function HeroFloatingCircles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {circles.map((circle, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full ${circle.color}`}
          style={{
            width: circle.size,
            height: circle.size,
            left: circle.left,
            top: circle.top,
          }}
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: circle.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
