/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "dark-custom": "#191919",
      },
      backgroundImage: {
        "hero-pattern": 'url("/public/img/Hero.png")',
        "sustain-img": 'url("/public/img/sustain.png")',
        "people-img": 'url("/public/img/people.png")',
      },
    },
  },
  plugins: [],
};
