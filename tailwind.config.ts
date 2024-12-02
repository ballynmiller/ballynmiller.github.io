import type { Config } from 'tailwindcss';
 
const config: Config = {
  content: [ 
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      cerulean: '#1C6E8C',
      charcoal: '#274156',
      frenchGray: '#D0CCD0',
      wenge: '#605856',
      white: '#FBFCFF',
    },
    extend: {
    },
  },
  plugins: [],
};
export default config;