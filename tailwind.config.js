/* eslint-disable no-undef */
module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
    mode: "jit",
    darkMode: "class", // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                josefin: ["Josefin Sans", "sans-serif"],
            },
            backgroundImage: {
                "dark-desktop":
                    "url('./src/assets/images/bg-desktop-dark.jpg')",
                "dark-mobile": "url('./src/assets/images/bg-mobile-dark.jpg')",
                "light-desktop":
                    "url('./src/assets/images/bg-desktop-light.jpg')",
                "light-mobile":
                    "url('./src/assets/images/bg-mobile-light.jpg')",
            },
            colors: {
                "bright-blue": {
                    DEFAULT: "var(--bright-blue)",
                },
                "light-theme": {
                    "very-light-gray": "var(--very-light-gray)",
                    "very-light-grayish-blue": "var(--very-light-grayish-blue)",
                    "light-grayish-blue": "var(--light-grayish-blue)",
                    "dark-grayish-blue": "var(--dark-grayish-blue)",
                    "very-dark-grayish-blue": "var(--very-dark-grayish-blue)",
                    "very-dark-grayish-blue-2": "var(very-dark-grayish-blue-2)",
                },
                "dark-theme": {
                    "very-dark-blue": "var(--very-dark-blue)",
                    "very-dark-desaturated-blue":
                        "var(--very-dark-desaturated-blue)",
                    "light-grayish-blue": "var(--light-grayish-blue)",
                    "light-grayish-blue-2": "var(--light-grayish-blue-2)",
                    "dark-grayish-blue": "var(--dark-grayish-blue)",
                    "very-dark-grayish-blue": "var(--very-dark-grayish-blue)",
                    "very-dark-grayish-blue-2":
                        "var(--very-dark-grayish-blue-2)",
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require("@tailwindcss/forms")],
};
