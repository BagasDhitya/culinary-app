import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'culinary-white': '#fafafa',
        'culinary-amber-400': '#fbbf24',
        'culinary-amber-500': '#f59e0b',
        'culinary-amber-600': '#d97706',
        'culinary-amber-700': '#b45309'
      },
      fontFamily: {
        regular: 'poppins-regular',
        medium: 'poppins-medium',
        semibold: 'poppins-semibold',
        bold: 'poppina-bold'
      }
    },
  },
  plugins: [],
}
export default config
