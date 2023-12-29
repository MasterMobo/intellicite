import { createTheme, ThemeProvider } from "@mui/material/styles";
import { GlobalStyles } from "@mui/material";
import "@fontsource/tajawal";
import "@fontsource-variable/aleo";

const mainTheme = createTheme({
    palette: {
        primary: {
            main: "#fd842c",
        },
        secondary: {
            main: "#ff1744",
        },
        background: {
            default: "#FEF8F0",
        },
        success: {
            main: "#cefab1",
            contrastText: "#2f5914",
        },

        error: {
            main: "#f7b3a6",
            contrastText: "#541a0e",
        },
    },

    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontWeight: "bold",
                },
            },
        },
    },

    typography: {
        h1: {
            fontFamily: ["Aleo Variable", "sans-serif"].join(","),
        },
        h2: {
            fontFamily: ["Aleo Variable", "sans-serif"].join(","),
        },
        h3: {
            fontFamily: ["Aleo Variable", "sans-serif"].join(","),
        },
        h4: {
            fontFamily: ["Aleo Variable", "sans-serif"].join(","),
        },
        h5: {
            fontFamily: ["Aleo Variable", "sans-serif"].join(","),
        },
        h6: {
            fontFamily: ["Aleo Variable", "sans-serif"].join(","),
        },

        body1: {
            fontFamily: ["Aleo Variable", "sans-serif"].join(","),
        },

        body2: {
            fontFamily: ["Aleo Variable", "sans-serif"].join(","),
        },

        fontFamily: ["Tajawal", "sans-serif"].join(","),
        fontSize: 16,
    },
});

export default mainTheme;
