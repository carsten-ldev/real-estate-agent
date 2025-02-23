import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#162A41",
        energy_A: "green",
		    energy_B: "yellow",
		    energy_C: "orange",
		    energy_D: "red",
      },
    },
  },
  plugins: [],
} satisfies Config;
