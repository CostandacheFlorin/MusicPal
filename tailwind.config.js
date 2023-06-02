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
        primary: "#121212",
        secondary: "#535353",
        tertiary: "#1db954",
        textPrimary: "#ffffff",
        inputBg: "#3c3f43"
      }
      
    },
  },
  plugins: [],
}
