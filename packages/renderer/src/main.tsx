import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./Router";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <Provider store={store}>
    <Router />
  </Provider>
  // </React.StrictMode>
);
