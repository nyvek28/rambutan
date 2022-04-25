const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'background': 'var(--background)',
      'text': 'var(--text-color)'
    },
    extend: {
      maxWidth: {
        'body': 'var(--max-body-width)',
      },
      fontSize: {
        'xl': '64px',
        'lg': '32px',
        'base': '20px',
        'sm': '14px',
      },
      fontFamily: {
        "cormorant": ["Cormorant Garamond", ...defaultTheme.fontFamily.sans],
      },
    }
  },
  plugins: [],
}
