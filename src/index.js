import React from "react";
import { render } from "react-dom";
import "./styles/index.css";
import App from "./app";
import * as serviceWorkerRegistration from "./serviceWorkersRegistration";

render(<App />, document.getElementById("root"));

serviceWorkerRegistration.register();
