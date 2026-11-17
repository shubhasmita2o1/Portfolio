/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        textBg: '#E8E8E3',
        secondary100: '#6b645c',
        secondary200: '#524d47',
        secondary300: '#242320',
        secondary400: '#080807',
        accent600: '#8c8c73',
        accent200: '#e8e8e3'
      },
      fontFamily: {
        editorial: ['"montreal"', '"PP Neue Montreal"', 'sans-serif'],
        display: ['"montreal"', '"PP Neue Montreal"', 'sans-serif'],
        mono: ['"montrealMono"', 'Consolas', 'GeistMono', 'monospace']
      }
    },
  },
  plugins: [],
}
