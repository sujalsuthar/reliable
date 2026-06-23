'use client'

export default function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-primary-900" />

      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 80% 60% at 70% 50%, rgba(77, 163, 255, 0.12) 0%, transparent 60%),
            radial-gradient(ellipse 50% 40% at 25% 65%, rgba(42, 109, 217, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse 40% 30% at 55% 25%, rgba(77, 163, 255, 0.06) 0%, transparent 40%)
          `,
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="absolute right-[6%] top-[30%] hidden font-mono text-[11px] leading-relaxed text-white/[0.06] lg:block">
        <p>structural.load(&quot;analysis&quot;);</p>
        <p>project.deliver(&quot;excellence&quot;);</p>
      </div>
    </div>
  )
}
