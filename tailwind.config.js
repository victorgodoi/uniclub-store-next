/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      grey: '#cacaca',
      lightBlack: '#222',
      grey2: '#747474',
      grey3: '#A1A1A1',
      imput: '#D8D8D8'
    },
  },
  plugins: [],
}
