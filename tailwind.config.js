/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        heading: ['Literata', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        accent: {
          DEFAULT: '#2563eb',
          hover: '#1d4ed8',
        },
      },
    },
  },
  plugins: [],
}
