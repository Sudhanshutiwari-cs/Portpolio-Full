/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightgray: '#eeeeee',
        
      },
      backgroundImage: {
        'blue-gradient': 'linear-gradient(180deg, #5FBCFF 12.5%, #006AB6 120%)',
      },
       animation: {
        'bg-position': 'bg-position 4s ease infinite',
      },
      keyframes: {
        'bg-position': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      
    },
  },
  plugins: [],
}