module.exports = {
  content: ['./public/**/*.html', './src/**/*.svelte', './components/**/*.svelte'],
  theme: {
    extend: {
      maxWidth: {
        'custom': '430px', // Custom maxWidth of 430px
      },
      screens: {
        'custom': '430px', // Define a custom breakpoint at 430px
      },
      borderRadius: {
        'large': '30px', // Define a custom border radius if needed
      },
      spacing: {
        '5': '20px',
      },
      colors: {
        'navback': 'var(--color-navback)',
        'navbutton': 'var(--color-navbutton)',
        'navaccent': 'var(--color-navaccent)',
        'navoutline': 'var(--color-navoutline)',
        'navlines': 'var(--color-navlines)',
        'navgray': 'var(--color-navgray)',
        'black': '#252522',
        'white': '#f3f1eb',
      },
      dropShadow: {
        custom: 'var(--custom-up-shadow-default)'
      },
      boxShadow: {
        custom: 'var(--custom-shadow-default)',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
  safelist: [
    'stroke-animate'
  ]
}