/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0f172a", // Dark navy for text
        accent: "#f97316",  // Orange for highlights
        bg: "#fdfbf8",      // Soft cream background
      },
    },
  },
  plugins: [],
}