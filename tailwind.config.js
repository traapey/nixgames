/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins"],
      },
      fontSize: {
        "5xl": [
          "48px",
          {
            lineHeight: "72px",
          },
        ],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
