/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_includes/**/*.{html,js,md}',
    './_layouts/**/*.{html,js,md}',
    './_*/*.{html,js,md}',
    './*.{html,js,md}'
  ],
  theme: {
    fontSize: {
      xs: ['0.75rem', '1.2'],
      sm: ['0.875rem;', '1.2'],
      base: ['1rem', '1.2'],
      lg: ['1.125rem;', '1.2'],
      xl: ['1.25rem', '1.2'],
      '2xl': ['1.5rem', '1.2'],
      '3xl': ['1.875rem', '1'],
      '4xl': ['2.25rem', '1'],
      '5xl': ['3rem', '1'],
      '6xl': ['3.75rem', '1'],
      '7xl': ['4.5rem', '1'],
      '8xl': ['6rem', '1'],
      '9xl': ['8rem', '1'],
    },
    fontFamily: {
      'sans': ['Roboto Condensed', 'sans-serif'],
      'serif': ['Crimson Pro', 'serif'],
      'oranienbaum': ['Oranienbaum', 'serif'],
      'poppins': ['Poppins', 'sans-serif'],
    },
    extend: {
      lineHeight: {
        'tight': '.85',
        'snug': '.95',
        '12': '3rem',
      },
      spacing: {
        '5p': '5%',
        '10p': '10%',
        '15p': '15%',
        '20p': '20%',
        '30p': '30%',
        '45p': '45%',
        '50p': '50%',
        '60p': '60%',
        '90p': '90%',
      },
      aspectRatio: {
        '5/3': '5 / 3',
      },
      minHeight:{
        '100': '100vh',
        '90': '90vh',
        '80': '80vh',
        '70': '70vh',
        '60': '60vh',
        '50': '50vh',
      },
      maxHeight:{
        '100': '100vh',
        '90': '90vh',
        '80': '80vh',
        '70': '70vh',
        '60': '60vh',
        '50': '50vh',
        '40': '40vh',
        '30': '30vh',
        '20': '20vh',
        '10': '10vh',
      },

      maxWidth:{
        '50': '50%',
        '75': '75%',
      },

      aspectRatio: {
        'landscape': '3 / 2',
        'portrait-tall': '5/8',
        'portrait': '4/5',
        '5/3': '5 / 3',
      },
      
      colors: {
        'polo': {
          DEFAULT: '#99B8D6',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#F0F5F9',
          300: '#D3E1ED',
          400: '#B6CCE2',
          500: '#99B8D6',
          600: '#719CC6',
          700: '#4980B6',
          800: '#39648E',
          900: '#294866',
          950: '#213A52'
        },
        "blue": "var(--#99B8D6)",
        "light-blue": "var(--#F0F5F9)",
        "dark-blue": "var(--#213A52)",

      },
    },
  },
}
