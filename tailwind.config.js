/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      colors: {
        "slate-800": "#2c3e50",
        "blue-500": "#3498db",
        "blue-600": "#2980b9",
      },
      spacing: {
        "21cm": "21cm",
        "29.7cm": "29.7cm",
      },
      maxWidth: {
        "21cm": "21cm",
      },
      minHeight: {
        "29.7cm": "29.7cm",
      },
    },
  },
  plugins: [],
};
