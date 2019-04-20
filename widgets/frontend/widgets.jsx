import React from "react"
import ReactDOM from "react-dom"
import Clock from "./clock"
import Tabs from "./tabs"

const Root = () => (
  <div></div>
)

const renderArray = [<Clock />, <Tabs />];
  
addEventListener('DOMContentLoaded', (event) => {
const root = document.getElementById("root");
ReactDOM.render(renderArray, root);
});
