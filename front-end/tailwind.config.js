/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{html,js,vue}'
    // "./layouts/**/*.vue",
    // "./pages/**/*.vue",
    // "./plugins/**/*.{js,ts}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'custom': ['ubuntu-mono', 'Ubuntu', 'sans-serif'],
        // 'raleway': ['Raleway', 'sans-serif'],
        'workSans': ['Work Sans', 'sans-serif'],
        'heebo': ['Heebo', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
