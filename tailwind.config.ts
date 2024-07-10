import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        laptop: { max: "68.75em" },
        tablet: { max: "47.5em" },
        mobile: { max: "37.5em" },
      },
    },
  },
  plugins: [],
};
export default config;
