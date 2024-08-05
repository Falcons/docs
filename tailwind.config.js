/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        primary: "#0d1d45",
        secondary: "#00c6c2"
      },
      backgroundImage: {
        index: "linear-gradient(to top, rgba(60, 60, 60, 1), rgba(243, 244, 246, 0.5)), url(/assets/images/robot_close.png)",
        translucent: "linear-gradient(to top, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.2))"
      }
    },
  },
  plugins: [],
}

