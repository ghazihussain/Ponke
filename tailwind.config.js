/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "p-yellow": "#FFB000",
        "p-red": "#ED2B20",
        "p-green": "#3E671A",
        "p-skin": "#f3c684",
        "p-dark": "#1D1D1D",
        "p-brown": " #744302",
      },
      fontFamily: {
        "luckiest-guy-regular": ["var(--font-luckiestguy)"],
        "maladroit-regular": ["var(--font-maladroit)"],
        "yantramanav-regular": ["var(--font-yantramanav-r)"],
        "yantramanav-semibold": ["var(--font-yantramanav-sb)"],
        "yantramanav-bold": ["var(--font-yantramanav-b)"],
      },
    },
  },
  plugins: [],
};
