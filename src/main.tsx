import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import Providers from "./context/providers/providers";

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>,
  document.getElementById("root")
);
