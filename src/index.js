import React from "react";
import ReactDOM from "react-dom/client";
import Start from "./pages/Start";
import { GlobalStyled } from "./GlobalStyled";
import Router from "./Router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyled />
    <Router></Router>
  </React.StrictMode>
);