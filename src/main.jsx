import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./index2.css";
import "./navbar.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
