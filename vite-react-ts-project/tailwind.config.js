/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // From C&E design colours
        transparent: "transparent",
        current: "currentColor",
        white: "#fff",
        red: "#D7153A", // Used in CTAs
        navy: "#002664",
        blue: {
          DEFAULT: "#002664", // Navy duplicated for backwards compatibility. Should be removed once pages with container and steps components using blue have been updated to navy.
          light: "#CBEDFD",
          tertiary: "#6cace4", // Focus border
          medium: "#407EC9",
        },
        pink: "#FFB8C1",
        grey: {
          2: "#fafafa",
          5: "#f2f2f2",
          DEFAULT: "#e6e7e9",
          10: "#e5e5e5",
          15: "#d9d9d9",
          30: "#b3b3b3",
          60: "#666",
        },
        error: "#ff635c",
        warning: "#f69900",
        success: "#0cac78",
        info: "#00bfe9",
        danger: "#e53e3e",
        black: "#000000",
        body: "#333",
      },
      fontFamily: {
        sans: ["Public Sans", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
}

