/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          teal: '#067e88',
          'teal-dark': '#056b73',
          'teal-light': '#e6f6f7',
          orange: '#f36a21',
          'orange-hover': '#e05912',
          'orange-light': '#fff3eb',
          dark: '#0f172a',
          navy: '#0b1120',
          surface: '#f8fafc',
          border: '#e2e8f0',
        }
      },
      // Font stacks live as CSS variables in src/index.css — change them there.
      fontFamily: {
        sans: ['var(--font-body)'],
        display: ['var(--font-display)'],
        mono: ['var(--font-mono)'],
      },
      fontWeight: {
        black: '700',
      },
      letterSpacing: {
        tight: 'var(--heading-tracking)',
      },
      boxShadow: {
        'elevate': '0 20px 40px -15px rgba(7, 153, 164, 0.12)',
        'elevate-hover': '0 25px 50px -12px rgba(15, 23, 42, 0.18)',
      }
    },
  },
  plugins: [],
}
