/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        background: "#000A0F",
        primary50: "#FFAD7D",
        "primary-main": "#F55A00",
        red: "#FF0000",
        offwhite: "#D2D2D2",
        secDark: "#0D161B",
        card: "#091318",
      },
      boxShadow: {
        hard: "6px 8px 0px -2px white;",
      },
      screens: {
        tiny: "300px",
        tablet: "640px",
      },
      fontFamily: {
        sans: ["var(--font-fontlack)"],
      },
    },
  },
  plugins: [require("daisyui")],
};
