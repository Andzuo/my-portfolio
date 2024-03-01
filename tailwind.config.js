/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
      //   primary:{
      //     100 : '#9FC131',
      //     200 : '#DBF227',
      //     300 : '#D6D58E',
      //   },
      //   secondary: {
      //     100 : '#005C53',
      //     200 : '#042940',
      //   }
      // }
        green: {
          100 : '#D6D58E',
          200 : '#DBF227',
          300 : '#9FC131'
        },
        blue: {
          100: '#005C53',
          200: '#042940'
        }
      },
      animation: {
        wiggle : 'spin 3s linear infinite',
      },
      keyframes: {
        wiggle: {
          '0%': {
            top: '15%'
          },
          '15%': {
            top: '55%'
          },
          '50%': {
            top: '55%'
          },
          '90%': {
            top: '55%'
          },
          '100%': {
            top: '15%'
          }

        }
      },
      fontFamily: {
        body: ['Montserrat']        
      },
    },
    plugins: [],
  }
}
