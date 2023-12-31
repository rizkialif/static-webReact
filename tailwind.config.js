/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url('../public/assets/rizbarner.jpg')",
        'homebanner': "url('../public/assets/homebanner.jpg')"
      },
      colors: {
        'regal-blue': '#176B87',
      },
    },
    fontSize: {
      '2xl': ['1.5rem', {
        lineHeight: '2rem',
        letterSpacing: '-0.01em',
        fontWeight: '500',
      }],
      '3xl': ['1.875rem', {
        lineHeight: '2.25rem',
        letterSpacing: '-0.02em',
        fontWeight: '700',
      }],
      'footer-logo': ['1.75rem', {
        letterSpacing: '-0.02em',
      }],
    }
  },
  plugins: [],
}

