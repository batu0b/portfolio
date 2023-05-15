/** @type {import('tailwindcss').Config} */
// import * as colors from "tailwindcss/colors";
import * as Clip from "tailwind-clip-path"
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        code: ['"Fira Code"', "monospace"],
        "press-start": ['"Press Start 2P"', "cursive"],
      },
      backgroundColor: {
        "light-black": "#050505",
      },
      clipPath: {
        mypolygon: "circle(47.0% at 50% 50%);",
    },
    },
    
  },

  plugins: [Clip],
};
