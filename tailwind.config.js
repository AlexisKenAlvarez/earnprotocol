/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
        inter: ['Inter']
      },
      colors: {
        purple: '#6C3FBA',
        aqua: '#6FB0AA',
        blk: '#020100',
        desc: '#DCDCDC'
      }
    },
  },
  plugins: [],
}

