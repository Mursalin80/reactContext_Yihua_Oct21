import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./redux/store";
import CartProvider from "./providers/cart/cart.provider.jsx";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <CartProvider>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </CartProvider>,
  document.getElementById("root")
);
