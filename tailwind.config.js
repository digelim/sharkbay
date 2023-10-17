/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [
    require('@rise8/tailwind-pixel-perfect-preset')
  ],
  content: [
    "./**/*.{html,js}",
  ],
  theme: {
      extend: {
      colors: {
        'custom-gray': '#181628',
      },
    },
  }
}
