/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      "background-grey": "#ebebeb",
      "extra-light-grey": "#d9d9d6",
      "light-grey": "#999999",
      "medium-grey": "#666666",
      "dark-grey": "#333333",
      "dyson-black": "#000000",
      "photographic-black": "#000000",
      "lightbox-black": "#000000",
      "white": "#ffffff",
      "yellow": "#ffcd00",
      "blue": "#0057b8",
      "blueprint-blue": "#06038d",
      "blueberry": "#485cc7",
      "cyan": "#009fdf",
      "sea-blue": "#05c3de",
      "fuchsia": "#c6007e",
      "azure-blue": "#009cde",
      "dark-blue": "#0066cc",
      "copper": "#cc6e52",
      "green": "#43b02a",
      "royal-blue": {
        "100": "#6691d6",
        "200": "#336cc9",
        "300": "#0047bb",
        "400": "#003c9e",
        "500": "#003182",
      },
      "sky-blue": {
        "100": "#c4e2f8",
        "200": "#b0d9f5",
        "300": "#9ccff3",
        "400": "#84afce",
        "500": "#84afce",
      },
      "teal": {
        "100": "#66c0bc",
        "200": "#33aba5",
        "300": "#00968f",
        "400": "#007f79",
        "500": "#006964",
      },
      "apple-green": {
        "100": "#aed879",
        "200": "#93cb4d",
        "300": "#78be20",
        "400": "#66a11b",
        "500": "#548516",
      },
      "orange": {
        "100": "#fbcda1",
        "200": "#f5a658",
        "300": "#ff8200",
        "400": "#f5a658",
        "500": "#b25b00",
      },
      "red": {
        "100": "#e47f77",
        "200": "#db5449",
        "300": "#d2291c",
        "400": "#d10a11",
        "500": "#931c13",
      },
      "plum": {
        "100": "#bb89b3",
        "200": "#bb89b3",
        "300": "#8e3a80",
        "400": "#a56199",
        "500": "#a56199",
      },
    },
    fontFamily: {
      dysonfutura: ['dyson-futura', 'sans-serif'],
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif']
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [],
};
