/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#000000',     // True black for ultra-premium feel
          gray: '#0c0c0c',     // Very dark gray for contrast sections
          lightGray: '#151515',
          red: '#c62828',      // Richer, deeper red
          darkRed: '#8e0000',
          light: '#ffffff',
          text: '#eeeeee',
          muted: '#888888'
        }
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': 'linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,1))',
        'noise': 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")'
      },
      animation: {
        'shimmer': 'shimmer 2.5s linear infinite',
        'blob': 'blob 7s infinite',
        'spin-slow': 'spin 15s linear infinite',
      },
      keyframes: {
        shimmer: {
          'from': { transform: 'translateX(-100%)' },
          'to': { transform: 'translateX(200%)' }
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' }
        }
      }
    },
  },
  plugins: [],
}
