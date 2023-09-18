import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Routes from "./routes";

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat, Arial",
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
