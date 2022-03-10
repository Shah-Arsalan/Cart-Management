import React from "react";
import ReactDOM from "react-dom";
import setupMockServer from "./api/mock.server";
import { CartProvider } from "./cart-context";

import App from "./App";
import { PageProvider } from "./page-context";

setupMockServer();

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <PageProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </PageProvider>
  </React.StrictMode>,
  rootElement
);
