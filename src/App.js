import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Routes from "./routes";
import theme from "./theme";
import { store } from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <Routes />
      </Provider>
      <Provider />
    </ThemeProvider>
  );
}

export default App;
