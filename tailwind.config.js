/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FCF0F0",
        secondary: {
          DEFAULT: "#FF9C01",
          200: "rgb(140,65,145)",
        },
      },
      fontFamily: {
        mthin: ["Montserrat-Thin", "san-serif"],
        mbold: ["Montserrat-Bold", "san-serif"],
        mmedium: ["Montserrat-Medium", "san-serif"],
        mlight: ["Montserrat-Light", "san-serif"],
        mregular: ["Montserrat-Regular", "san-serif"],
        mblack: ["Montserrat-Black", "san-serif"],
      }
      
    },
  },
  plugins: [],
}

