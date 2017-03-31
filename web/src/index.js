import React from "react";
import ReactDOM from "react-dom";
import { store } from "state";
import { Provider } from "react-redux";

import { HelloWorld } from "./containers";

ReactDOM.render(
  <Provider store={store(window.__STATE__ || "Hello")} >
    <HelloWorld />
  </Provider>,
  document.getElementById("root")
);