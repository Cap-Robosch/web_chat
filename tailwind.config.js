/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        bounce200: "bounce 1s infinite 200ms",
        bounce400: "bounce 1s infinite 400ms",
      },
      colors:{
        'purple': '#9139D3',
        'pink': '#ED349B',
      },
      fontFamily:{
        'fonte': 'Poppins, sans-serif',
      },
    },
  },
  plugins: [],
};
