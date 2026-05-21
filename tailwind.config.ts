import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#1a3a8f',
          'blue-dark': '#0d1f5c',
          'blue-light': '#2a50c8',
          'blue-pale': '#eef2fb',
          orange: '#f47920',
          'orange-light': '#ff9038',
          'orange-dark': '#d96710',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-oswald)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
