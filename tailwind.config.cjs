/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      colors: {
        "blue-15": "#141539",
        "blue-23": "#1f3756",
        "blue-65": "#6795E4",
        "orange-53": "#EEA722",
        "red-52": "#DC2D4C",
      },
    },
  },
  plugins: [],
}
