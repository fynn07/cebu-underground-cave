/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        background : "#0D0E10",
        linegrey : "#303233"
      },
      fontFamily: {
        inrisans : ["'Inria Sans'", 'sans-serif']
      }
    },
    
  },
  plugins: [],
}

