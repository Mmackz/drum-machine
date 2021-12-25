import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalStyles } from "./components/app/styles/global-styles"

ReactDOM.render(
   <Fragment>
      <GlobalStyles />
      <App />     
   </Fragment>,
   document.getElementById("root")
);
