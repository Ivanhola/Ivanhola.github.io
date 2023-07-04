/** @type {import('tailwindcss').Config} */
module.exports = {



  daisyui: {
    themes: [
      {
        'snlnk': {
 'primary' : '#aeaeae',
 'primary-focus' : '#526dff',
 'primary-content' : '#1b1c22',
 'secondary' : '#570df8',
 'secondary-focus' : '#4506cb',
 'secondary-content' : '#1b1c22',
 'accent' : '#191D24',
 'accent-focus' : '#22272f',
 'accent-content' : '#b9d0ff',
 'neutral' : '#afc0e8',
 'neutral-focus' : '#c0d2ff',
 'neutral-content' : '#1b1c22',
 'base-100' : '#131519',
 'base-200' : '#22212c',
 'base-300' : '#1b1c22',
 'base-content' : '#ffffff',
 'info' : '#1c92f2',
 'success' : '#3a9141',
 'warning' : '#f0e555',
 'error' : '#c63e31',
'--rounded-box': '1rem',          
'--rounded-btn': '.5rem',        
'--rounded-badge': '1.9rem',  
'--animation-btn': '.25s', 
'--animation-input': '.2s', 
'--btn-text-case': 'uppercase', 
'--navbar-padding': '.5rem',      
'--border-btn': '1px',            


        },
      },
    ],
  },

  content: ["./dist/*.{html,js}"],
  theme: {
    fontSize:{
      base: '1.1rem',
      xl: '2rem',
    },

    fontFamily: {
      display: ['Roboto', 'sans-serif'],
    },

    extend: {
      "colors": {
        "theme_primary": {
          "50": "#0f0f0f",
          "100": "#d0d0d1",
          "200": "#a1a1a3",
          "300": "#343434",
          "400": "#2a2a2a",
          "500": "#131519",
          "600": "#0f1114",
          "700": "#0b0d0f",
          "800": "#08080a",
          "900": "#040405"
        }
      }
    },
  },
  plugins: [require("daisyui")],
}

