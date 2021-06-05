import React from "react";
import ReactDOM from "react-dom";
import Heading from "./Heading";
import List from "./List";
import App from "./components/App";
ReactDOM.render(
  <div>
    <App />
    <Heading />
    <List />
  </div>,
  document.getElementById("root")
);
