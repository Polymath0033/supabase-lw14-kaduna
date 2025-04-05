/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neutral: {
          950: "#0E121B",
          900: "#191B25",
          800: "#232530",
          700: "#2B303B",
          600: "#525866",
          500: "#717784",
          400: "#232530",
          300: "#CACFD8",
          200: "#E0E4EA",
          100: "#F3F5F8",
          50: "#F5F7FA",
          0: "#ffffff",
        },
        blue: {
          700: "#2547D0",
          500: "#335CFF",
          50: "#EBF1FF",
        },
        green: {
          500: "#21C16B",
          100: "#191B25",
        },
        red: {
          500: "#FB3748",
          100: "#FFD5D8",
        },
      },
      fontSize: {
        "text-preset-1": [
          "24px",
          {
            letterSpacing: "-0.5px",
            lineHeight: "120%",
            fontWeight: 700,
          },
        ],
        "text-preset-2": [
          "20px",
          {
            letterSpacing: "-0.5px",
            lineHeight: "120%",
            fontWeight: 700,
          },
        ],
        "text-preset-3": [
          "16px",
          {
            letterSpacing: "-0.3px",
            lineHeight: "120%",
            fontWeight: 600,
          },
        ],
        "text-preset-4": [
          "14px",
          {
            letterSpacing: "-0.2px",
            lineHeight: "120%",
            fontWeight: 500,
          },
        ],
        "text-preset-5": [
          "14px",
          {
            letterSpacing: "-0.2px",
            lineHeight: "120%",
            fontWeight: 400,
          },
        ],
        "text-preset-6": [
          "12px",
          {
            letterSpacing: "-0.2px",
            lineHeight: "120%",
            fontWeight: 400,
          },
        ],
      },
      borderRadius: {
        0: "0px",
        4: "4px",
        6: "6px",
        8: "8px",
        10: "10px",
        12: "12px",
        16: "16px",
        20: "20px",
        24: "24px",
        full: "999px",
      },
      boxShadow: {
        small: "0px 4px 6px 0px rgba(240, 240, 240, 0.60);",
        large: "0px 8px 12px 0px rgba(240, 240, 240, 0.60);",
      },
      spacing: {
        0: "0px",
        "025": "2px",
        "050": "4px",
        "075": "6px",
        100: "8px",
        150: "12px",
        200: "16px",
        250: "20px",
        300: "24px",
        400: "32px",
        500: "40px",
        600: "48px",
        800: "64px",
        1000: "80px",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Noto serif", "serif"],
        monospace: ["Source code pro", "monospace"],
        cursive: ["Pacifico", "cursive"],
      },
    },
  },
  plugins: [],
};
