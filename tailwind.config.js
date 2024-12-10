/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#1b1f23',
          secondary: '#2a2f33',
        },
        primary: {
          DEFAULT: '#c7341f',
          hover: '#e54d32',
        },
        card: {
          DEFAULT: 'rgba(32, 34, 37, 0.7)',
          hover: 'rgba(42, 44, 47, 0.8)',
        },
      },
      backgroundColor: {
        'glass': 'rgba(32, 34, 37, 0.7)',
      },
      backdropFilter: {
        'glass': 'blur(10px)',
      },
      boxShadow: {
        'glow': '0 0 10px rgba(199, 52, 31, 0.3)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

