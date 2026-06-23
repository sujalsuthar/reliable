import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e8f2fc',
          100: '#c5ddf5',
          200: '#9ec5ef',
          300: '#6ba8e8',
          400: '#4da3ff',
          500: '#2a6dd9',
          600: '#1a4fa0',
          700: '#0f3a78',
          800: '#0c2d5c',
          900: '#0a1628',
          950: '#0B1120',
        },
        accent: {
          400: '#4da3ff',
          500: '#2a6dd9',
        },
        whatsapp: {
          DEFAULT: '#25D366',
          hover: '#20bd5a',
        },
        navy: {
          DEFAULT: '#0a1628',
          mid: '#0d1f3c',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        arabic: [
          'var(--font-cairo)',
          'var(--font-tajawal)',
          'Cairo',
          'Tajawal',
          'system-ui',
          'sans-serif',
        ],
        display: ['Georgia', 'Times New Roman', 'serif'],
      },
      borderRadius: {
        card: '12px',
        tag: '20px',
        xl: '16px',
        '2xl': '20px',
      },
      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
        hover: '0 4px 16px rgba(26,79,160,0.14)',
        nav: '0 2px 16px rgba(10,22,40,0.08)',
        mega: '0 8px 40px rgba(10,22,40,0.12)',
      },
      maxWidth: {
        site: '1400px',
      },
    },
  },
  plugins: [],
}
export default config
