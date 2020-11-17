import React from "react";
import ReactDOM from "react-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { pink, blue, deepPurple } from "@material-ui/core/colors";
import { Provider } from "react-redux";
import store from "./store";

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: pink,
    textPrimary: blue[700],
  },
  status: {
    danger: "orange",
  },
  typography: {
    fontFamily: "Raleway, Arial",
    textPrimary: deepPurple,
  },
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
