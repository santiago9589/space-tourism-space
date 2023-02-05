/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      xl: '1440px',
    },
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
        'technology': "url('/src/assets/technology/background-technology-desktop.jpg')",
        'homepage-md': "url('/src/assets/home/background-home-tablet.jpg')",
        'destination-md': "url('/src/assets/destination/background-destination-tablet.jpg')",
        'crew-md': "url('/src/assets/crew/background-crew-tablet.jpg')",
        'technology-md': "url('/src/assets/technology/background-technology-tablet.jpg')",
        'homepage-sm': "url('/src/assets/home/background-home-mobile.jpg')",
        'destination-sm': "url('/src/assets/destination/background-destination-mobile.jpg')",
        'crew-sm': "url('/src/assets/crew/background-crew-mobile.jpg')",
        'technology-sm': "url('/src/assets/technology/background-technology-mobile.jpg')"
      }
    },
  },
  plugins: [],
}