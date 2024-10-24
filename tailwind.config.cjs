module.exports = {
  content: ['./public/**/*.html', './src/**/*.svelte', './components/**/*.svelte'],
  // purge: {
  //   safelist: [
  //     'from-news-d',
  //     'from-eat-d',
  //     'from-burgundy-d',
  //     'from-shop-d',
  //     'to-white'
  //   ],
  // },
  theme: {
    extend: {
      backgroundImage: {
        'alert-gradient': 'linear-gradient(135deg, transparent, transparent 25%, hsla(0,0%,0%,.05) 25%, hsla(0,0%,0%,.05) 50%, transparent 50%, transparent 75%, hsla(0,0%,0%,.05) 75%, hsla(0,0%,0%,.05))',
      },
      height: {
        '98': '98%',
      },
      scale: {
        '99': '.99',
      },
      maxWidth: {
        'custom': '430px', // Custom maxWidth of 430px
      },
      screens: {
        'custom': '431px', // Define a custom breakpoint at 430px
      },
      borderRadius: {
        'large': '30px', // Define a custom border radius if needed
      },
      spacing: {
        '5': '20px',
      },
      stroke: theme => ({
        jobs: theme('colors.jobs'),
        news: theme('colors.news'),
        eat: theme('colors.eat'),
        shop: theme('colors.shop'),
      }),
      colors: {
        'dark': 'hsl(230, 11%, 22%)',
        'dark-l10': 'hsl(230, 11%, 32%)', // Lightened by 10%
        'dark-l20': 'hsl(230, 11%, 42%)', // Lightened by 20%
        'dark-l30': 'hsl(230, 11%, 52%)', // Lightened by 30%
        'dark-l40': 'hsl(230, 11%, 62%)', // Lightened by 40%
        'dark-l50': 'hsl(230, 11%, 72%)', // Lightened by 50%
        'dark-l60': 'hsl(230, 11%, 82%)', // Lightened by 60%
        'dark-l70': 'hsl(230, 11%, 92%)', // Lightened by 70%
        'dark-d10': 'hsl(230, 11%, 12%)',  // Darkened by 10%
        'dark-d20': 'hsl(230, 11%, 2%)', // Darkened by 20%
        'navbutton': 'hsl(45, 72%, 66%)',

        // VERSION 1
        // 'accent1': 'hsl(40, 45%, 58%)',
        // 'accent1-l10': 'hsl(40, 45%, 68%)',
        // 'accent1-l20': 'hsl(40, 45%, 78%)',
        // 'accent1-l30': 'hsl(40, 45%, 88%)',
        // 'accent1-l40': 'hsl(40, 45%, 98%)',
        // 'accent1-d10': 'hsl(40, 45%, 48%)',
        // 'accent1-d20': 'hsl(40, 45%, 38%)',
        // 'accent1-d30': 'hsl(40, 45%, 28%)',
        // 'accent1-d40': 'hsl(40, 45%, 18%)',
        // 'accent1-d50': 'hsl(40, 45%, 8%)',

        // 'accent1-o7': 'hsla(40, 45%, 58%, 0.7)',

        // 'accent2': 'hsl(180, 20%, 30%)',
        // 'accent2-l10': 'hsl(180, 20%, 40%)', // Lightened by 10%
        // 'accent2-l20': 'hsl(180, 20%, 50%)', // Lightened by 20%
        // 'accent2-l30': 'hsl(180, 20%, 60%)', // Lightened by 30%;
        // 'accent2-l40': 'hsl(180, 20%, 70%)', // Lightened by 40%;
        // 'accent2-l50': 'hsl(180, 20%, 80%)', // Lightened by 50%;
        // 'accent2-l60': 'hsl(180, 20%, 90%)', // Lightened by 60%;
        // 'accent2-l70': 'hsl(180, 20%, 100%)', // Lightened by 70%;
        // 'accent2-d10': 'hsl(180, 20%, 20%)', // Darkened by 10%
        // 'accent2-d20': 'hsl(180, 20%, 10%)', // Darkened by 20%
        // 'accent2-d30': 'hsl(180, 20%, 0%)', // Darkened by 60%

        // 'news': '#6d597a',
        // 'news-l': '#aa98b5',
        // 'news-d': '#3f294d',

        // 'eat': '#2f6690',
        // 'eat-l': '#7595ae',
        // 'eat-d': '#0d2e48',

        // 'burgundy': '#c9ada7',
        // 'burgundy-l': '#e2dad8',
        // 'burgundy-d': '#9a746c',

        // 'shop': '#84a59d',
        // 'shop-l': '#d0dbd8',
        // 'shop-d': '#426c62',

        // 'green': '#dab78f',
        // 'green-l': '#c6bdaf',
        // 'green-d': '#ac854c',

        // VERSION 2
        // 'accent2': 'hsl(40, 45%, 58%)',
        // 'accent2-l10': 'hsl(40, 45%, 68%)',
        // 'accent2-l20': 'hsl(40, 45%, 78%)',
        // 'accent2-l30': 'hsl(40, 45%, 88%)',
        // 'accent2-l40': 'hsl(40, 45%, 98%)',
        // 'accent2-d10': 'hsl(40, 45%, 48%)',
        // 'accent2-d20': 'hsl(40, 45%, 38%)',
        // 'accent2-d30': 'hsl(40, 45%, 28%)',
        // 'accent2-d40': 'hsl(40, 45%, 18%)',
        // 'accent2-d50': 'hsl(40, 45%, 8%)',

        // 'accent2-o7': 'hsla(40, 45%, 58%, 0.7)',

        // 'accent1': 'hsl(180, 20%, 30%)',
        // 'accent1-l10': 'hsl(180, 20%, 40%)', // Lightened by 10%
        // 'accent1-l20': 'hsl(180, 20%, 50%)', // Lightened by 20%
        // 'accent1-l30': 'hsl(180, 20%, 60%)', // Lightened by 30%;
        // 'accent1-l40': 'hsl(180, 20%, 70%)', // Lightened by 40%;
        // 'accent1-l50': 'hsl(180, 20%, 80%)', // Lightened by 50%;
        // 'accent1-l60': 'hsl(180, 20%, 90%)', // Lightened by 60%;
        // 'accent1-l70': 'hsl(180, 20%, 100%)', // Lightened by 70%;
        // 'accent1-d10': 'hsl(180, 20%, 20%)', // Darkened by 10%
        // 'accent1-d20': 'hsl(180, 20%, 10%)', // Darkened by 20%
        // 'accent1-d30': 'hsl(180, 20%, 0%)', // Darkened by 60%

        // 'news': '#6d597a',
        // 'news-l': '#aa98b5',
        // 'news-d': '#3f294d',

        // 'eat': '#2f6690',
        // 'eat-l': '#7595ae',
        // 'eat-d': '#0d2e48',

        // 'burgundy': '#c9ada7',
        // 'burgundy-l': '#e2dad8',
        // 'burgundy-d': '#9a746c',

        // 'shop': '#84a59d',
        // 'shop-l': '#d0dbd8',
        // 'shop-d': '#426c62',

        // 'green': '#dab78f',
        // 'green-l': '#c6bdaf',
        // 'green-d': '#ac854c',

        // VERSION 3
        // Teal
        'accent1': '#236e6e',
        //'accent1': 'hsl(179, 67%, 43%)',
        'accent1-l10': 'hsl(179, 67%, 53%)',
        'accent1-l20': 'hsl(179, 67%, 63%)',
        'accent1-l30': 'hsl(179, 67%, 73%)',
        'accent1-l40': 'hsl(179, 67%, 83%)',
        'accent1-l50': 'hsl(179, 67%, 93%)',

        'accent1-d10': 'hsl(179, 67%, 43%)',
        'accent1-d20': 'hsl(179, 67%, 33%)',
        'accent1-d30': 'hsl(179, 67%, 23%)',
        'accent1-d40': 'hsl(179, 67%, 13%)',
        'accent1-d50': 'hsl(179, 67%, 3%)',

        'accent1-o7': 'hsla(179, 67%, 43%, 0.7)',

        // Yellow/Gold
        'accent2': '#e1b046',
        //'accent2': 'hsl(40, 68%, 88%)',
        'accent2-l10': 'hsl(40, 68%, 98%)', // Lightened by 10%
        
        'accent2-d10': 'hsl(40, 68%, 78%)', // Darkened by 10%
        'accent2-d20': 'hsl(40, 68%, 68%)', // Darkened by 20%
        'accent2-d30': 'hsl(40, 68%, 58%)', // Darkened by 30%
        'accent2-d40': 'hsl(40, 68%, 48%)', // Darkened by 40%
        'accent2-d50': 'hsl(40, 68%, 38%)', // Darkened by 50%
        'accent2-d60': 'hsl(40, 68%, 28%)', // Darkened by 60%
        'accent2-d70': 'hsl(40, 68%, 18%)', // Darkened by 70%
        'accent2-d80': 'hsl(40, 68%, 8%)', // Darkened by 80%

        // Purple - News
        //'news': 'hsl(79, 30%, 63%)',
        'news': '#965ba3',
        'news-l': '#d4ced6',
        'news-d': '#61316d',

        // Reddish-Orange - Eat
        //'eat': 'hsl(7, 65%, 89%)',
        'eat': '#e4624d',
        'eat-l': 'hsl(4, 61%, 94%)',
        'eat-d': '#8E3729',

        // Burgundy
        'burgundy': 'hsl(337, 52%, 52%)',
        'burgundy-l': 'hsl(337, 52, 82%)',
        'burgundy-d': 'hsl(337, 52%, 22%)',

        // Blue - Shop
        //'shop': 'hsl(216, 62%, 36%)',
        'shop': '#2794cf',
        'shop-l': 'hsl(200, 80%, 96%)',
        //'shop-d': 'hsl(200, 80%, 51%)',
        'shop-d': '#185777',

        // Green
        'green': 'hsl(60, 59%, 78%)',
        'green-l': 'hsl(60, 59%, 98%)',
        'green-d': 'hsl(60, 59%, 58%)',

        // Dusty Blue - Jobs
        'jobs': '#81cfe0',
        'jobs-l': 'hsl(190,42,100)',
        'jobs-d': 'hsl(190,42,50)',

        // Light Yellow - enjoy
        'enjoy': '#f5d76e',
        'enjoy-d': 'hsl(47,55,50)',

        'navlines': 'hsl(50, 40%, 95%)',
        'gray-25': 'hsla(230, 7%, 92%, 0.25)',
        'black': 'hsl(230, 11%, 22%)', // Same as dark (need to address this issue)
        
        'light': '#e5e7eb',
        'light-l100': 'hsl(0, 0%, 100%)',
        'light-80': 'hsla(0, 0%, 96%, .8)',

        //'white': '#f8f9fa',
        'white': 'rgb(246,246,246)',
        'purewhite': '#ffffff',
      },
      dropShadow: {
        custom: '1px 1px 1px rgba(0,0,0,.5)', // Custom drop shadow
      },
      boxShadow: {
        custom: '0 0 4px rgba(33,37,56,1)', // Custom box shadow
      },
      backdropBlur: {
        '6': '6px',
        '8': '8px',
      },
      fontSize: {
        // don't forget to change these in styles.css as well
        'clamp-lg': 'clamp(5.21875rem, 3.7454rem + 6.5481vw, 11.603125rem)',
        'clamp-md': 'clamp(1.75rem, 3vw, 2.75rem)',
        'clamp-sm': 'clamp(1.5rem, 0.98rem + 0.2564vw, 1.25rem)',
        'clamp-xs': 'clamp(0.95rem, 1rem + 0.513vw, 1.25rem)'
      },
      inset: {
        '-bottom-full': '-100%',
      },
      backgroundColor: ['before', 'after'],
      content: ['before', 'after'],
      position: ['before', 'after'],
      width: ['before', 'after'],
      transition: ['before', 'after'],
    },
    backgroundImage: {
      'gradient-to-t': 'linear-gradient(to top, rgba(24, 52, 51, .8), rgba(24, 52, 51, 0))',
      'gradient-to-b': 'linear-gradient(to bottom, rgba(24, 52, 51, .8), rgba(24, 52, 51, 0))',
      // 'gradient-to-b-shop': 'linear-gradient(to bottom, var(--shop-d), var(--shop-l))',
      // 'gradient-to-b-eat': 'linear-gradient(to bottom, var(--eat-d), var(--eat-l))',
      'gradient-to-l': 'linear-gradient(to left, rgba(24, 52, 51, .8), rgba(24, 52, 51, 0))',
      'gradient-to-r': 'linear-gradient(to right, rgba(24, 52, 51, .8), rgba(24, 52, 51, 0))',
    },
    fontFamily: {
      'sans': ['"Jost"', 'Helvetica', 'Arial', 'sans-serif'],
    },
    aspectRatio: {
      auto: 'auto',
      square: '1 / 1',
      video: '16 / 9',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
      13: '13',
      14: '14',
      15: '15',
      16: '16',
    }
  },
  variants: {
    extend: {
      height: ['responsive'],
      fill: ['hover', 'focus'],
      backdropBlur: ['responsive'],
      backgroundImage: ['responsive'],
      aspectRatio: ['responsive', 'hover'],
      stroke: ['hover', 'focus'],
    }
  },
  safelist: [
    'tns-outer',
    'line-clamp-1',
    'line-clamp-2',
    'line-clamp-3',
    'line-clamp-none',
  ]
};