import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: "#7BAE7F",
        cream: "#F7F3EC",
        rose: "#D88C9A",
        sunflower: "#F2C94C",
        brown: "#6B4F3A",
        moss: "#5B7C5F",
      },
      fontFamily: {
        heading: ["var(--font-heading)"],
        body: ["var(--font-body)"],
      },
      boxShadow: {
        soft: "0 18px 40px rgba(107, 79, 58, 0.12)",
        card: "0 16px 30px rgba(123, 174, 127, 0.12)",
      },
      backgroundImage: {
        "paper-wash": "radial-gradient(circle at top left, rgba(242, 201, 76, 0.22), transparent 28%), radial-gradient(circle at top right, rgba(216, 140, 154, 0.16), transparent 25%), linear-gradient(180deg, rgba(247, 243, 236, 1), rgba(255, 250, 244, 1))",
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        bob: "bob 4.5s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        bob: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -6px, 0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
