import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'spotify-gray': '#121212',
        'mid-gray': '#a7a7a7',
        'dark-gray': '#242424',
        'dark-gray-2': '#282828',
        'mid-gray-2': '#9f9f9f',
        'spotify-black': '#090909',
        'spotify-light-black': '#121212',
        'spotify-light-black-2': '#181818',
        'spotify-light-black-3': '#1B1B1B'
      }
    },
  },
  plugins: [],
}
export default config
