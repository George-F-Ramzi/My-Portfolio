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
      backgroundImage: {
        Gradient: "linear-gradient(to right bottom,#212121 ,#151515)",
      },
      borderColor: { color: "#262626" },
      gridTemplateColumns: {
        skills: "repeat(auto-fit, minmax(276px, 1fr));",
      },
    },
  },
  plugins: [],
};
