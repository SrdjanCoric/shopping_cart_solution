import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Shop from "./components/Shop";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <Shop />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
