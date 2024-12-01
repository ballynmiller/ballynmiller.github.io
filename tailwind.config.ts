import type { Config } from 'tailwindcss';
 
const config: Config = {
  content: [ 
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'ashGray': '#9DB5B2',
        'cambridgeBlue': '#A2C5AC',
        'slateGray': '#878E99',
        'timberwolf': '#D3D5D4',
      },
    },
  },
  plugins: [],
};
export default config;