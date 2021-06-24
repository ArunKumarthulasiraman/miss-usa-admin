import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";

import Theme from "../styles/theme";
import { MainRoute } from "../router/routes";
import RouteMapper from "../router/RouteMapper";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: Theme.colors.primary,
    },
    secondary: {
      main: Theme.colors.secondary,
    },
  },
  typography: {
    fontFamily: "Montserrat, sans-serif",
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <RouteMapper data={MainRoute} />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
