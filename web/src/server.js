import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { store as createStore, actions } from "state";
import { Provider } from "react-redux";
import path from "path";

import { HelloWorld } from "./containers";
import assets from "../build/asset-manifest.json";

const app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static("./build"));

app.get("*", function (req, res) {
  let store = createStore();

  store.dispatch(actions.toggleHello());
  store.dispatch(actions.toggleHello());

  console.log(JSON.stringify(assets));

  res.render("index", {
    state: JSON.stringify(store.getState()),
    mainScript: assets["main.js"],
    content: ReactDOMServer.renderToStaticMarkup(
      <Provider {...{ store }} >
        <HelloWorld />
      </Provider >
    )
  });
});

app.listen(3000, function () {
  console.log("App listening on port 3000");
});