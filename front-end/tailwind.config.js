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
        // raleway: '"Raleway", sans-serif',
        // workSans: '"Work Sans", sans-serif'
      }
    },
  },
  plugins: [],
}
