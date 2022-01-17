// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem'
        }
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#0b0e16',
      primary: {
        50: '#f8f6ff',
        100: '#f1ecff',
        200: '#dcd0ff',
        300: '#c7b4ff',
        400: '#9e7bfe',
        500: '#7443fe',
        600: '#683ce5',
        700: '#5732bf',
        800: '#462898',
        900: '#39217c'
      },
      info: {
        50: '#f4f3f7',
        100: '#e8e8f0',
        200: '#c6c4d8',
        300: '#a4a1c1',
        400: '#5f5b93',
        500: '#1b1464',
        600: '#18125a',
        700: '#140f4b',
        800: '#100c3c',
        900: '#0d0a31'
      },
      success: {
        50: '#f6fefb',
        100: '#ecfcf8',
        200: '#d0f8ed',
        300: '#b3f3e3',
        400: '#7bebcd',
        500: '#42e2b8',
        600: '#3bcba6',
        700: '#32aa8a',
        800: '#28886e',
        900: '#206f5a'
      },
      warning: {
        50: '#fffcf7',
        100: '#fffaee',
        200: '#fff1d5',
        300: '#ffe9bc',
        400: '#ffd989',
        500: '#ffc857',
        600: '#e6b44e',
        700: '#bf9641',
        800: '#997834',
        900: '#7d622b'
      },
      danger: {
        50: '#fef4f6',
        100: '#fde9ed',
        200: '#fbc9d3',
        300: '#f8a8b8',
        400: '#f26683',
        500: '#ed254e',
        600: '#d52146',
        700: '#b21c3b',
        800: '#8e162f',
        900: '#741226'
      },
      gray: {
        50: '#f8fafc',
        100: '#f1f5f9',
        200: '#e2e8f0',
        300: '#cbd5e1',
        400: '#94a3b8',
        500: '#64748b',
        600: '#475569',
        700: '#334155',
        800: '#1e293b',
        900: '#0f172a'
      }
    },
    fontFamily: {
      satoshi: ['Satoshi', 'sans-serif'],
      inter: ['Inter', 'sans-serif']
    },
    fontSize: {
      display: '2.75rem',
      '6xl': '2.25rem',
      '5xl': '2rem',
      '4xl': '1.75rem',
      '3xl': '1.5rem',
      '2xl': '1.25rem',
      xl: '1rem',
      body: '0.875rem',
      sText: '0.75rem',
      xsText: '0.625rem'
    },
    lineHeight: {
      lh9: '4rem',
      lh8: '3rem',
      lh7: '2.25rem',
      lh6: '2rem',
      lh5: '1.75rem',
      lh4: '1.5rem',
      lh3: '1.25rem',
      lh2: '1.125rem',
      lh1: '1rem'
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: {
          fontSize: theme('fontSize.6xl'),
          fontFamily: theme('fontFamily.inter'),
          lineHeight: theme('lineHeight.lh8')
        },
        h2: {
          fontSize: theme('fontSize.5xl'),
          fontFamily: theme('fontFamily.inter'),
          lineHeight: theme('lineHeight.lh8')
        },
        h3: {
          fontSize: theme('fontSize.4xl'),
          fontFamily: theme('fontFamily.inter'),
          lineHeight: theme('lineHeight.lh7')
        },
        h4: {
          fontSize: theme('fontSize.3xl'),
          fontFamily: theme('fontFamily.inter'),
          lineHeight: theme('lineHeight.lh6')
        },
        h5: {
          fontSize: theme('fontSize.2xl'),
          fontFamily: theme('fontFamily.inter'),
          lineHeight: theme('lineHeight.lh5')
        },
        h6: {
          fontSize: theme('fontSize.xl'),
          fontFamily: theme('fontFamily.inter'),
          lineHeight: theme('lineHeight.lh4')
        },
        body: {
          fontSize: theme('fontSize.body'),
          fontFamily: theme('fontFamily.satoshi'),
          lineHeight: theme('lineHeight.lh3')
        }
      })
    })
  ]
}
