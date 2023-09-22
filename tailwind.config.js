/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./src/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        nav: "url('assets/LP images/nav.png')",
      },
      height: {
        height1: "600px",
      },
      colors: {
        footer: "#E7E7E7",
        footletter: "#C7C7C7",
      },
    },
  },
  plugins: [require("daisyui")],
};
