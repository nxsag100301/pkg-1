/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#B22830',
        'primary-100': '#A11122',
        'dark-brown': '#1F1717',
        'dark-brown2': '#470004',
        outstanding: '#FFF8F7',
        'border-card': '#EFF0F7',
        'gray-90': '#626276',
        'gray-30': '#EFF0F7',
        'gray-50': '#CCCDE0',
        'gray-70': '#8B8BA4',
        'gray-100': '#4D4D60',
        'midnight-100': '#150202',
        'yellow-1': '#FFD147'
      }
    },
    fontFamily: {
      jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
      harmony: ['SVN-Harmony', 'sans-serif']
    },
    backgroundImage: {
      bg1: "url('/assets/bg1.jpg')",
      bg2: "url('/assets/bg2.png')",
      'thien-trang': "url('/assets/thientrang.png')",
      'banner-gradient':
        'linear-gradient(180deg, #B22830 16.67%, #4C1114 151.79%)'
    }
    // screens: {
    //   sm: '600px',
    //   md: '768px',
    //   lg: '992px',
    //   xl: '1200px',
    //   '2xl': '1536px'
    // }
  },
  plugins: []
}
