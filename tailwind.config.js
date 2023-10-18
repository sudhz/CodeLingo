/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-body": "#101827",
        "dark-header": "#1f2937",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
