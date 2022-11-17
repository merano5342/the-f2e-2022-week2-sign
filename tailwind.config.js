/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')


module.exports = {
  content: ['./src/**/*.{js,jsx}'],

  theme: {
    fontWeight: {
      regular: 400,
      bold: 700,
    },
    colors: {
      'black': '#000000',
      'white': '#ffffff',
      'gray': '#71717A',
      'yellow': '#EAB308',

      'lightYellow': '#FEF08A',
      'blue': '#1D4ED8',
      'lightBlue': '#3B82F6',
      'red': '#BE123C',
      'rose': '#F43F5E',

      'gray1': '#F4F4F5',
      'gray2': '#E4E4E7',
      'gray3': '#D4D4D8',
      'gray4': '#A1A1AA',
      'gray7': '#3F3F46',
      'gray8': '#27272A',



    },
    screens: {
      // 'xs': '376px',
      'md': '640px',
      'lg': '768px',
    }

  },
  plugins: [
    plugin(function ({ addBase, addComponents, theme }) {
      addBase({
        'h1': {
          color: theme('colors.gray'),
          fontFamily: 'Inter',
          fontSize: '18 px',
          fontWeight: '700',
          lineHeight: '28 px',
          letterSpacing: '0em',
          textAlign: 'left',
        },
        'h2': {
          color: theme('colors.gray'),
          fontFamily: 'Inter',
          fontSize: '18px',
          fontWeight: '400',
          lineHeight: '28px',
          letterSpacing: '0em',
          textAlign: 'left',
        },
        'h3': {
          color: theme('colors.gray'),
          fontFamily: 'Inter',
          fontSize: '16px',
          fontWeight: '700',
          lineHeight: '24px',
          letterSpacing: '0em',
          textAlign: 'left',
        },
        'h4': {
          color: theme('colors.gray'),
          fontFamily: 'Inter',
          fontSize: '16px',
          fontWeight: '400',
          lineHeight: '24px',
          letterSpacing: '0em',
          textAlign: 'left',
        },
        'h5': {
          color: theme('colors.gray'),
          fontFamily: 'Inter',
          fontSize: '14px',
          fontWeight: '400',
          lineHeight: '20px',
          letterSpacing: '0em',
          textAlign: 'left',
        },
        'h6': {
          color: theme('colors.black'),
          fontFamily: 'Inter',
          fontSize: '14px',
          fontWeight: '400',
          lineHeight: '20px',
          letterSpacing: '0em',
          textAlign: 'left',
        },
      }),
        addComponents({
          '.sub-h1': {
            fontFamily: 'Bellefair, sans-serif',
            fontSize: '28px',
          },
          '.sub-h2': {
            fontFamily: 'Barlow\\ Condensed, sans-serif',
            fontWeight: '400',
            fontSize: '14px',
            letterSpacing: '2.35px',
            textTransform: 'uppercase',
          },
          '.nav-text': {
            fontFamily: 'Barlow\\ Condensed, sans-serif',
            fontWeight: '400',
            fontSize: '16px',
            letterSpacing: '2.7px',
            textTransform: 'uppercase',
          },
          'p': {
            fontFamily: 'Barlow, sans-serif',
            fontSize: '18px',
            color: theme('colors.lightPurple')
          },

          '.btn-blue': {
            backgroundColor: '#3490dc',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#2779bd'
            },
          },
          '.btn-red': {
            backgroundColor: '#e3342f',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#cc1f1a'
            },
          },
        })
    })
  ],
}


