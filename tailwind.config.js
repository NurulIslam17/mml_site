module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        ubuntu: ['Ubuntu', 'serif'],
        edu: ['Edu NSW ACT Foundation', 'cursive'],
      },
      shadow:{
        sd1:['rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset']
      }
    },
  },
  plugins: [],
}
