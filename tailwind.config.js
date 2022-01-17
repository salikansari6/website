module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      inter: 'Inter',
      satoshi: 'Satoshi'
    },
    typography: theme => ({
      DEFAULT: {
        css: {
          fontFamily: theme('fontFamily.satoshi'),
          fontSize: '14px',
          lineHeight: '20px',
          'h1, h2, h3, h4, h5, h6': {
            fontFamily: theme('fontFamily.inter'),
            fontWeight: 'bold',
            color: '#000000'
          },
          h1: {
            fontSize: '36px',
            lineHeight: '48px'
          },
          h2: {
            fontSize: '32px',
            lineHeight: '40px'
          },
          h3: {
            fontSize: '28px',
            lineHeight: '36px'
          },
          h4: {
            fontSize: '24px',
            lineHeight: '32px'
          },
          h5: {
            fontSize: '20px',
            lineHeight: '28px'
          },
          h6: {
            fontSize: '16px',
            lineHeight: '24px'
          },
          small: {
            fontSize: '12px',
            lineHeight: '18px'
          }
        }
      },
      md: {
        css: {
          fontFamily: theme('fontFamily.satoshi'),
          fontSize: '14px',
          lineHeight: '20px',
          'h1, h2, h3, h4, h5, h6': {
            fontFamily: theme('fontFamily.inter'),
            fontWeight: 'bold',
            color: '#000000'
          },
          h1: {
            fontSize: '32px',
            lineHeight: '40px'
          },
          h2: {
            fontSize: '28px',
            lineHeight: '36px'
          },
          h3: {
            fontSize: '24px',
            lineHeight: '32px'
          },
          h4: {
            fontSize: '20px',
            lineHeight: '28px'
          },
          h5: {
            fontSize: '16px',
            lineHeight: '24px'
          },
          h6: {
            fontSize: '14px'
          },
          small: {
            fontSize: '12px',
            lineHeight: '18px'
          }
        }
      },
      sm: {
        css: {
          fontFamily: theme('fontFamily.satoshi'),
          fontSize: '14px',
          lineHeight: '20px',
          'h1, h2, h3, h4, h5, h6': {
            fontFamily: theme('fontFamily.inter'),
            fontWeight: 'bold',
            color: '#000000'
          },
          h1: {
            fontSize: '28px',
            lineHeight: '36px'
          },
          h2: {
            fontSize: '24px',
            lineHeight: '32px'
          },
          h3: {
            fontSize: '20px',
            lineHeight: '28px'
          },
          h4: {
            fontSize: '16px',
            lineHeight: '24px'
          },
          h5: {
            fontSize: '16px'
          },
          h6: {
            fontSize: '14px'
          },
          small: {
            fontSize: '12px',
            lineHeight: '18px'
          }
        }
      }
    }),
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
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require('@tailwindcss/typography')]
}
