/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {} },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        carrosapp: {
          primary: "#4f46e5",
          "primary-content": "#ffffff",
          secondary: "#f59e0b",
          accent: "#22d3ee",
          neutral: "#3d4451",
          "base-100": "#f9fafb",
          "base-200": "#e5e7eb",
          "base-300": "#d1d5db",
          "base-content": "#1f2937",
        },
      },
      "dark",
    ],
  },
};
