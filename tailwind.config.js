/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}", // Adjust paths based on your project structure
      "./public/index.html",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#1E40AF", // Custom primary color
          secondary: "#9333EA", // Custom secondary color
        },
        fontFamily: {
          sans: ["Inter", "sans-serif"],
        },
      },
    },
    plugins: [],
  };
  