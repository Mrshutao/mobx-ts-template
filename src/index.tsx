import React from "react";
import ReactDOM from "react-dom";
import Root from "./router";
import * as serviceWorker from "./serviceWorker";
import "./assets/style/index.scss";

import { Provider } from "mobx-react";
import store from "./store";

ReactDOM.render(
	<Provider {...store}>
		<Root />
	</Provider>,
	document.getElementById("root")
);

serviceWorker.unregister();
