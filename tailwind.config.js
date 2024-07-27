/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: { 
      backgroundImage: {
        'hero-pattern': "url('C:/Users/SUBASH/OneDrive/Desktop/Java script/Landing page project/images/business-meeting.avif')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
      },
  },
  plugins: [],
}

