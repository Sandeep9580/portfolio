/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "100%": {
            width: "100%",
          },
        },
        // blink: {
        //   "50%": {
        //     borderColor: "transparent"
        //   },
        //   "100%": {
        //     borderColor: "white"
        //   }
        // }
      },
      animation: {
        typing: "typing 3s steps(30) infinite alternate, blink .9s infinite",
      },
      fontFamily: {
        HeadFont: ["Poetsen One", "sans-serif"],
        Reddit: ["Reddit Sans", "sans-serif"],
        Pacifico: ["Archivo Black", "sans-serif"],
        Garamond: ["EB Garamond", "serif"],
        Arapey: ["Arapey", "serif"],
        Titillium: ["Titillium Web", "sans-serif"],
      },
    },
  },
  plugins: [],
};
