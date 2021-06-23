import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import Theme from '../styles/theme';

import AccountHome from "../views/Account";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: Theme.colors.primary,
    },
    secondary:{
      main: Theme.colors.secondary
    }
  },
  typography: {
    fontFamily: "Montserrat, sans-serif",
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AccountHome />
    </ThemeProvider>
  );
};

export default App;
