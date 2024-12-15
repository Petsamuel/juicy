/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx,tsx,ts}"],
  safelist: [
    {
      pattern: /bg-\[\#[a-fA-F0-9]{6}\]/, 
      
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
