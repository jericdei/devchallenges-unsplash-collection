import type { Config } from "tailwindcss";
import formsPlugin from "@tailwindcss/forms";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "var(--clr-primary-50)",
          400: "var(--clr-primary-400)",
          500: "var(--clr-primary-500)",
          600: "var(--clr-primary-600)",
        },
      },
    },
  },
  plugins: [formsPlugin],
};
export default config;
