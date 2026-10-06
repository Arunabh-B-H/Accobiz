/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f4f9',
          100: '#dbe5f2',
          200: '#b7cde5',
          300: '#87abd4',
          400: '#5583bf',
          500: '#3363a7',
          600: '#234b8c',
          700: '#1a3971',
          800: '#0e2249',
          900: '#0a1937',
          950: '#040b1b',
        },
        gold: {
          50: '#fffdf0',
          100: '#fff9c6',
          200: '#fff08a',
          300: '#ffe247',
          400: '#f5cb1b',
          500: '#d4af37',
          600: '#b58c22',
          700: '#8f681a',
          800: '#74521b',
          900: '#61431b',
          950: '#38230b',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        serif: ['Cinzel', 'Playfair Display', 'serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #F3E086 0%, #D4AF37 50%, #AA7C11 100%)',
        'gold-text': 'linear-gradient(135deg, #FFF099 0%, #D4AF37 50%, #997008 100%)',
        'navy-gradient': 'linear-gradient(135deg, #0A1937 0%, #061325 50%, #030A18 100%)',
        'glass-card': 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)',
        'glass-light': 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.75) 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', filter: 'drop-shadow(0 0 15px rgba(212, 175, 55, 0.4))' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 25px rgba(212, 175, 55, 0.8))' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        }
      }
    },
  },
  plugins: [],
}
