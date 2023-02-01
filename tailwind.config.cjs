/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      blackReq: '#0B0D17',
      lilaReq: '#D0D6F9',
      whiteReq: '#FFFFFF',
    },
    fontFamily: {
      bellefair: ["Bellefair", "sans-serif"],
      barlow: ["Barlow Condensed", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        'homepage': "url('/src/assets/home/background-home-desktop.jpg')",
        'destination': "url('/src/assets/destination/background-destination-desktop.jpg')",
        'crew': "url('/src/assets/crew/background-crew-desktop.jpg')",
        'technology': "url('/src/assets/technology/background-technology-desktop.jpg')"
      }
    },
  },
  plugins: [],
}