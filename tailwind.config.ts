import type { Config } from "tailwindcss";

const svgToDataUri = require("mini-svg-data-uri");

const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config = {
  safelist: [
    // General Layout
    "relative", "absolute", "top-0", "bottom-0", "left-0", "right-0", "w-full", "h-full", 
    "mx-auto", "my-6", "my-10", "mt-5", "mt-7", "mt-10", "mt-12", "mb-3", "mb-5", "mb-10", 
    "mb-12", "overflow-hidden", "flex", "flex-col", "flex-wrap", "inline", "inline-block", 
    "text-center", "items-center", "justify-center", "justify-between", "space-x-1",
  
    // Padding and Margins
    "p-2", "p-3", "p-4", "p-5", "p-10", "px-4", "px-5", "px-6", "px-8", "px-10", "py-4", "py-5", 
    "py-6", "py-10", "py-20", "pb-2", "gap-2", "gap-4", "gap-6", "gap-10", "gap-16",
  
    // Grid and Positioning
    "grid", "grid-cols-1", "md:grid-cols-6", "lg:grid-cols-5", "md:grid-row-7", "justify-start", 
    "top-10", "inset-0", "inset-x-0", "ml-[0.09375rem]", "mt-4", "z-10", "z-20", "z-40", "z-50", 
    "z-[1]", "z-[60]", "z-[5000]", "translate-x-[-50%]", "translate-y-[-50%]", "-top-0.5", 
    "-left-0.5", "right-0", "bottom-0",
  
    // Typography
    "text-start", "text-center", "text-sm", "text-base", "text-lg", "text-xl", "text-2xl", 
    "text-4xl", "text-5xl", "text-6xl", "text-xs", "sm:text-base", "sm:text-xl", "md:text-3xl", 
    "lg:text-5xl", "xl:text-5xl", "text-white", "text-black", "dark:text-white", "text-purple", 
    "text-neutral-600", "text-neutral-200", "text-[#C1C2D3]", "font-bold", "font-light", 
    "font-normal", "font-extralight", "leading-[1.6]", "whitespace-nowrap",
  
    // Backgrounds and Borders
    "bg-black", "bg-white", "bg-transparent", "bg-gradient-to-t", "bg-gradient-to-b", 
    "bg-slate-950", "bg-neutral-200", "border", "border-white/[0.1]", "border-white/[0.2]", 
    "border-black/[0.2]", "border-slate-800", "rounded-3xl", "rounded-full", "rounded-[6px]", 
    "rounded-sm", "border-b-0",
  
    // Colors and Gradients
    "bg-gradient-to-r", "from-indigo-500", "to-red-500", "from-gray-950", "to-[84%]", 
    "from-emerald-400/0", "via-emerald-400/90", "to-emerald-400/0", "dark:bg-black", "bg-opacity-75", 
    "text-white-200", "pointer-events-none", "opacity-70",
  
    // Animations and Transitions
    "animate-scroll", "animate-[spin_2s_linear_infinite]", "animate-spotlight", 
    "duration-200", "duration-300", "duration-700", "duration-3", "transition", 
    "hover:shadow-xl", "hover:bg-transparent", "hover:[animation-play-state:paused]", 
    "hover:text-neutral-500", "group-hover/pin:opacity-100", "opacity-0", "opacity-1", 
    "opacity-[0.8]", "hidden", "hover:opacity-100",
  
    // Width and Height
    "w-[4px]", "w-[80vw]", "w-full", "w-max", "w-screen", "h-4", "h-20", "h-40", "h-72", "h-80", 
    "h-96", "h-[calc(100%_+_4px)]", "md:w-[60vw]", "md:h-[40vh]", "md:h-[40rem]", "lg:h-10", 
    "lg:w-10", "lg:h-12", "lg:w-[84%]", "sm:w-[570px]", "sm:h-[40vh]", "sm:h-[41rem]", 
    "max-w-96", "max-w-full", "max-w-7xl", "min-w-full", "min-w-40",
  
    // Flex and Grid Specific
    "flex-shrink-0", "flex-nowrap", "sm:w-[570px]", "sm:h-[41rem]", "md:row-span-1", "md:col-span-2",
  
    // Utilities for Effects and Components
    "backdrop-blur", "backdrop-blur-3xl", "bg-[radial-gradient(#CBACF9_40%,transparent_60%)]", 
    "text-xs", "text-lg", "lg:gap-8", "p-[3px]", "shadow-input", "shadow-[0_8px_16px_rgb(0_0_0/0.4)]", 
    "shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1)]", "rounded-[50%]", "shadow-[0_0_0_1px_rgba(25,28,33,0.08)]", 
  
    // Safe for Animations
    "motion-reduce:animate-none", "transform", "translate-x-0", "scale-100", 
    "translate-y-[14px]", "h-[11.25rem]", "w-[11.25rem]", "blur-[3px]", "blur-[2px]", "backdrop-blur-xl",
  ],
  
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        black: {
          DEFAULT: "#000",
          100: "#000319",
          200: "rgba(17, 25, 40, 0.75)",
          300: "rgba(255, 255, 255, 0.125)",
        },
        white: {
          DEFAULT: "#FFF",
          100: "#BEC1DD",
          200: "#C1C2D3",
        },
        blue: {
          "100": "#E4ECFF",
        },
        purple: "#CBACF9",
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
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
        moveHorizontal: {
          "0%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
          "50%": {
            transform: "translateX(50%) translateY(10%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
        },
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        moveVertical: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "50%": {
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        spotlight: "spotlight 2s ease .75s 1 forwards",
        shimmer: "shimmer 2s linear infinite",
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="100" height="100" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
} satisfies Config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default config;
