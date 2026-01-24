import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: false,

  // Where to look for your css declarations
  include: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/containers/**/*.{js,jsx,ts,tsx}",
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      breakpoints: {
        sm: "320px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1920px",
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",

  jsxFramework: "react",
});
