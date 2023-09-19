import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Routes from "./routes";

export const pxToRem = (value) => {
  return `${value / 16}rem`;
};

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat, Arial",
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    h1: {
      fontWeight: 700,
      lineHeight: 80 / 64,
      fontSize: pxToRem(40),
    },
    // h2: {
    //   fontWeight: 700,
    //   lineHeight: 64 / 48,
    //   fontSize: pxToRem(32),
    // },
    // h3: {
    //   fontWeight: 700,
    //   lineHeight: 1.5,
    //   fontSize: pxToRem(24),
    // },
    // h4: {
    //   fontWeight: 700,
    //   lineHeight: 1.5,
    //   fontSize: pxToRem(20),
    // },
    // h5: {
    //   fontWeight: 700,
    //   lineHeight: 1.5,
    //   fontSize: pxToRem(18),
    // },
    // h6: {
    //   fontWeight: 700,
    //   lineHeight: 28 / 18,
    //   fontSize: pxToRem(16),
    // },
    // subtitle1: {
    //   fontWeight: 600,
    //   lineHeight: 1.5,
    //   fontSize: pxToRem(16),
    // },
    // subtitle2: {
    //   fontWeight: 600,
    //   lineHeight: 22 / 14,
    //   fontSize: pxToRem(14),
    // },
  },
  palette: {
    primary: {
      main: "#339933",
    },
    text: {
      main: "#000",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: () => ({
        "*": {
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
        },
        html: {
          width: "100%",
          height: "100%",
          WebkitOverflowScrolling: "touch",
        },
        body: {
          width: "100%",
          height: "100%",
        },
        "#root": {
          width: "100%",
          height: "100%",
        },
      }),
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
          fontWeight: 700,
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
