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
      backgroundColor: { BBG: "#00212E", BP: "#0081A7" },
      textColor: { para: "#E6E6E6" },
    },
  },
  plugins: [],
};
