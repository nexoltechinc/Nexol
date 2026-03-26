/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Custom colors for Nexol brand
        navy: {
          DEFAULT: '#0B0B12',
          light: '#10101A',
          lighter: '#141423',
        },
        cyan: {
          50: '#E6FCFF',
          100: '#B3F5FF',
          200: '#80EEFF',
          300: '#4DE7FF',
          400: '#5EEAD4', // Accent Teal
          500: '#2DD4BF', // Accent Teal Hover
          600: '#14B8A6',
          700: '#0F766E',
          800: '#00647D',
          900: '#00485C',
        },
        emerald: {
          400: '#5EEAD4',
          500: '#2DD4BF',
        },
        blue: {
          400: '#9B8CFF', // Secondary
          500: '#7C52FF', // Primary Hover
          600: '#6F3DFF', // Primary
          700: '#5E30E6', // Primary Active
        },
        indigo: {
          400: '#9B8CFF',
          500: '#7C52FF',
          600: '#6F3DFF',
        },
        slate: {
          300: '#C9CCDA', // Body Text
          400: '#8E93A8', // Muted Text
          500: '#6C7186', // Disabled Text
          600: '#26263A', // Border Default
          700: '#26263A', // Border Default mapping
          800: '#18182A', // Elevated Card Background
          900: '#141423', // Card Background
          950: '#10101A', // Section Background
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        glow: '0 0 40px rgba(0, 212, 255, 0.2)',
        'glow-sm': '0 0 20px rgba(0, 212, 255, 0.1)',
        'glow-lg': '0 0 60px rgba(0, 212, 255, 0.3)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0, 212, 255, 0.2)" },
          "50%": { boxShadow: "0 0 40px rgba(0, 212, 255, 0.4)" },
        },
        "slide-up": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "float": "float 3s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "slide-up": "slide-up 0.5s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "scale-in": "scale-in 0.3s ease-out",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #0A1628 0%, #0F1D32 50%, #0A1628 100%)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
