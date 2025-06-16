/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7851A9", // Royal Purple
        accent: "#CFB53B",  // Old Gold
        background: "#0a0a0a",
        foreground: "#ffffff"
      },
      fontFamily: {
        heading: ["'Bebas Neue'", "sans-serif"],
        body: ["Inter", "sans-serif"]
      }
    }
  },
  plugins: []
}
