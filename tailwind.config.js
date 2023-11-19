/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-banner': "url(`https://image.tmdb.org/t/p/w500/${movie[randomIndex].backdrop_path}`)",
      }
    },
  },
  plugins: [],
}