/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        daniel: ["Daniel", "cursive"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
