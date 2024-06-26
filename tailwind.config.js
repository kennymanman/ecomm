/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {

    fontFamily: {
      sans: ['sans-serif', 'Arial', 'Verdana'], // Default sans-serif stack
      serif: ['serif', 'Georgia', 'Palatino'], // Default serif stack
      mono: ['monospace', 'Consolas', 'Monaco'], // Default monospace stack
      cardinalfruitregular: ['"cardinalfruitregular"', 'sans-serif'] // Add your custom font
    },



    extend: {},
  },
  plugins: [],
}

