/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        writing: '#0A0F0F',
        band: '#FFFE1D',
      },
      fontSize: {
        'xl': '1.5rem',
      },
      backgroundColor: {
        'almostblack-bg': '#0A0F0F',
      },
    },
  },
  plugins: [],
}
