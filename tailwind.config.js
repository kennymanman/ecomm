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



    extend: {


      fontFamily: {
        regular: ['cardinalfruitweb-regular-TRIAL', 'sans-serif'],
        italic: ['cardinalfruitweb-italic-TRIAL', 'sans-serif'],
        apfel: ['ApfelGrotezk-Regular', 'sans-serif'],
        suisse: ['SuisseIntl-Regular' , 'sans-serif']
      },

      colors: {
        "base-color": "#EBEBEB",
        "subtext-color": "#868686",
      }

    },
  },
  plugins: [],
}

