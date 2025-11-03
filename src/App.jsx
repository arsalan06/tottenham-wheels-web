import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import CartDrawer from "./components/CartDrawer";
import { Provider as ReduxProvider } from "react-redux";
import { theme } from "./uiTheme/theme";
import Router from "./components/Router";
import { store } from "./redux/store";
// Create custom theme with the specified color

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <CartProvider>
      <BrowserRouter>
        <ReduxProvider store={store}>
          <Router />
        </ReduxProvider>
        <CartDrawer />
      </BrowserRouter>
    </CartProvider>
  </ThemeProvider>
);

export default App;
