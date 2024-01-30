/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      colors: {
        'flux-yellow': '#FFA41B',
        'flux-blue': '#1178C9',
        'blue-050': '#EBF8FF',
        'blue-100': '#BEE3F8',
        'blue-200': '#90CDF4',
        'blue-300': '#63B3ED',
        'blue-400': '#4299E1',
        'blue-500': '#3182CE',
        'blue-600': '#2B6CB0',
        'blue-700': '#2C5282',
        'blue-800': '#2A4365',
        'blue-900': '#1A365D',
        'gray-050': '#F7FAFC',
        'gray-100': '#EDF2F7',
        'gray-200': '#E2E8F0',
        'gray-300': '#CBD5E0',
        'gray-400': '#A0AEC0',
        'gray-500': '#718096',
        'gray-600': '#4A5568',
        'gray-700': '#2D3748',
        'gray-800': '#1A202C',
        'gray-900': '#171923',
      },
      boxShadow: {
        'flux-shadow': '0px 2px 1px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}

