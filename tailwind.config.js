/** @type {import('tailwindcss').Config} */

// tailwind.config.js

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'almost-black': '#0A0F0F',
        'pearl-white': '#F8F8F9',
        'pedestrian-lemon': '#FFFE1D',
        'sugar-chic': '#FCC5FF',
      },
      fontFamily: {
        'telegraf-slanted': ['PPTelegraf-RegularSlanted', 'sans-serif'],
        'telegraf': ['PPTelegraf-Regular', 'sans-serif'],
        'grandir-italic': ['PPAgrandir-WideBlackItalic', 'sans-serif'],
      },
      fontSize: {
        'xl': '1.5rem',
      },
      backgroundColor: {
        'almostblack-bg': '#0A0F0F',
      },
      backgroundImage: {
        'pinkball': "url('public/assets/bilab-09.svg')",
        'yellowball': "url('public/assets/bilac-10.svg')",
        'whiteball': "url('public/assets/bilaa-05.svg')",
      },
    },
  },
  plugins: [],
}
