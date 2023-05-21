/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-desktop': "url('/src/img/coffeebean-hero-coffee-cup.jpg')",
        'hero-mobile': "url('/src/img/coffeebean-hero-coffee-cup-mobile.jpg')",
      }
    },
    colors: {
      colors: {
        secondary: "#3a3a3b",
        accent: "#db9457",
        gray: "#f6f6f7",
        white: "#fff",
        blck: "#000",
      }
    }
  },
  plugins: [],
}

