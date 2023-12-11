/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // width: {
      //   "hero-width": "60%",
      // },
      backgroundImage: {
        "bg-intro":
          "linear-gradient(170deg,hsl(0, 0%, 22%) 0%,hsl(0, 0%, 6%)30%)",
      },
    },
  },
  plugins: [],
};
