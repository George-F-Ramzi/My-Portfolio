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
      backgroundColor: { BBG: "#00212E", BP: "#005F73", BS: "#003F4D" },
      textColor: { para: "#E6E6E6", BC: "#2C2C2C" },
      gridTemplateColumns: {
        projects: "repeat(auto-fit, minmax(328px, 1fr));",
        skills: "repeat(auto-fit, minmax(276px, 1fr));",
      },
    },
  },
  plugins: [],
};
