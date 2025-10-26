/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "320px", // 최소 구간
      sm: "375px", // 시안 기준
      md: "448px", // 상한 (이때부터 확대 적용)
    },
    extend: {},
  },
  plugins: [],
};
