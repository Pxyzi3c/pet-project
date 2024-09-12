import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
        colors: {
            dark: {
                1: '#222638',
                2: '#161925',
            },
            gray: {
                dark: '#A5A5A5',
                light: '#D9D9D9',
                lightest: '#ECECEC'
            },
            white: {
                1: '#FFFFFF',
                2: '#F1F5F9',
            },
            blue: {
                1: '#5EEAD4',
            },
            sky: {
                1: '#C4F9EB',
            },
            orange: {
                1: '#FF742E',
            },
            purple: {
                1: '#830EF9',
            },
            yellow: {
                1: '#F9A90E',
            },
        },
        },
    },
    plugins: [],
};

export default config;
