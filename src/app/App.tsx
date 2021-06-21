import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

import AccountHome from "../views/Account";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#E78282",
    },
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
