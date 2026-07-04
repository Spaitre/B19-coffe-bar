/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        espresso: '#2C1A0E',
        cream: '#F5ECD7',
        forest: '#3B4A3F',
        ink: '#1A1A1A',
        muted: '#6B6B6B',
        offwhite: '#FAF6EF',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        '6xl': '72rem',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        blob: {
          '0%, 100%': { borderRadius: '42% 58% 63% 37% / 42% 45% 55% 58%' },
          '50%': { borderRadius: '58% 42% 37% 63% / 55% 58% 42% 45%' },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        blob: 'blob 12s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
