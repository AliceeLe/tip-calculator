/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'strong-cyan': 'hsl(172, 67%, 45%)',
      "very-dark-cyan": 'hsl(183, 100%, 15%)',
      "dark-grayish-cyan": 'hsl(186, 14%, 43%)',
      "grayish-cyan": 'hsl(184, 14%, 56%)',
      'light-grayish-cyan': 'hsl(185, 41%, 84%)',
      'very-light-grayish-cyan': 'hsl(189, 41%, 97%)',
      'white': 'hsl(0, 0%, 100%)',
      'red':'#E17052',
      'green' :'#26C2AE',
    },
    extend: {
      fontFamily: {
        'mono': ['"Space Mono"'],
      }
    },
    boxShadow: {
      "shadow": '0px 32px 43px 0px rgba(79, 166, 175, 0.20)',
    },
  },
  plugins: [],
}

