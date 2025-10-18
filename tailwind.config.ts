import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#1bf6dcff",
        darkBg: "#160656b6",
      },
      backgroundImage: {
        "gradient-cover":
          "linear-gradient(90.21deg, rgba(14, 233, 215, 0.77) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)",
      },
    },
  },
  plugins: [],
};

export default config;