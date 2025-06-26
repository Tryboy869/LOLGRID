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
      colors: {
        lolgrid: {
          primary: '#ff6b35',
          secondary: '#f39c12',
          laugh: '#f1c40f',
          meh: '#95a5a6',
          wtf: '#9b59b6',
          legendary: '#e74c3c'
        }
      }
    },
  },
  plugins: [],
}
