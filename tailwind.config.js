module.exports = {
  purge: {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    options: {
      safelist: ['dark:bg-black', 'dark:border-gray-600', 'dark:text-gray-200', 'dark:bg-blue-900']
    }
  },
  darkMode: 'class',
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
