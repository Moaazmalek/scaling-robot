/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8',      // Custom blue
        secondary: '#F59E0B',    // Custom yellow
        accent: '#10B981',       // Custom green
        customGray: {
          light: '#F3F4F6',
          DEFAULT: '#6B7280',
          dark: '#374151',
        },
      },
    },
  },
  plugins: [],
}
