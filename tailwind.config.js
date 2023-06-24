/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      lineHeight: { LH: "150%" },
      textColor: { para: "#CCCCCC" },
      gridTemplateColumns: {
        skills: "repeat(auto-fit, minmax(276px, 1fr));",
      },
    },
  },
  plugins: [],
};
