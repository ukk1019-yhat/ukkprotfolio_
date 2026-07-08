/** @type {import('tailwindcss').Config} */
export default {
  content: ['./**/*.{ts,tsx}', '!./node_modules/**', '!./dist/**'],
  theme: {
    extend: {
      colors: {
        near: { black: '#0A0A0B' },
        warm: { white: '#F2F0EA' },
        amber: { accent: '#D9A441' },
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
