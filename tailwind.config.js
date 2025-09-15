/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        merit: {
          gold: '#FFD700',
          bronze: '#CD7F32',
          silver: '#C0C0C0',
          dark: '#1a1a1a',
        },
        karma: {
          good: '#10B981',
          neutral: '#6B7280',
          bad: '#EF4444',
        }
      },
      fontFamily: {
        'chinese': ['Noto Sans TC', 'sans-serif'],
      },
      animation: {
        'merit-glow': 'merit-glow 2s ease-in-out infinite alternate',
        'karma-pulse': 'karma-pulse 1s ease-in-out',
      },
      keyframes: {
        'merit-glow': {
          '0%': { boxShadow: '0 0 5px #FFD700' },
          '100%': { boxShadow: '0 0 20px #FFD700, 0 0 30px #FFD700' },
        },
        'karma-pulse': {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        }
      }
    },
  },
  plugins: [],
}
