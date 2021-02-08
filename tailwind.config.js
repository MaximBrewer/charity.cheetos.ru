const colors = require("tailwindcss/colors");
module.exports = {
    theme: {
        fontFamily: {
            sans: [
                "ui-sans-serif",
                "system-ui",
                "-apple-system",
                "BlinkMacSystemFont",
                "Segoe UI",
                "Roboto",
                "Helvetica Neue",
                "Arial",
                "Noto Sans",
                "sans-serif",
                "Apple Color Emoji",
                "Segoe UI Emoji",
                "Segoe UI Symbol",
                "Noto Color Emoji"
            ],
            serif: [
                "ui-serif",
                "Georgia",
                "Cambria",
                "Times New Roman",
                "Times",
                "serif"
            ],
            mono: [
                "ui-monospace",
                "SFMono-Regular",
                "Menlo",
                "Monaco",
                "Consolas",
                "Liberation Mono",
                "Courier New",
                "monospace"
            ],
            body: ["Montserrat", "sans-serif"],
            monserrat: ["Montserrat", "sans-serif"],
            druk: ["druk_text_widebold"]
        },
        screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1140px"
        },
        extend: {
            spacing: {
                "72": "18rem",
                "84": "21rem",
                "96": "24rem"
            }
        },
        colors: {
            transparent: "transparent",
            current: "currentColor",
            black: colors.black,
            white: colors.white,
            gray: colors.trueGray,
            indigo: colors.indigo,
            red: colors.rose,
            yellow: colors.amber,
            orange: {
                50: "#ffe8e5",
                100: "#fff2e5",
                200: "#ffe5cc",
                300: "#ffd7b2",
                400: "#ffca99",
                500: "#ffbd80",
                600: "#ffb066",
                700: "#ffa34d",
                800: "#ff9633",
                900: "#ff7b00"
            },
            purple: {
                50: "#ab49f5",
                100: "#ab49f5",
                200: "#ab49f5",
                300: "#ab49f5",
                400: "#ab49f5",
                500: "#ab49f5",
                600: "#ab49f5",
                700: "#a031f5",
                800: "#9518f5",
                900: "#8b00f5"
            }
        }
    },
    variants: {},
    plugins: []
};
