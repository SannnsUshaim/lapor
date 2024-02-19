/** @type {import('tailwindcss').Config} */
module.exports = {
content: ["index.html"],
darkMode: 'class',
  theme: {
    extend: {
      container : {
        center : true,
        padding : '16px',
      },
      colors: {
        primary : '#526D82',
        secondary : '#9DB2BF',
        light : '#DDE6ED',
        dark : '#27374D',
        lighter : '#f8f8f8',
        alert: '#BF3131',
        success: '#20c997'
      },
    },
    
  },
  plugins: [],
}

