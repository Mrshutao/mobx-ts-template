import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import configs from "./router.config";
const Routes = () => {
	return (
		<Router basename="">
			<Switch>
				{configs.map(element => (
					<Route key={element.path} exact path={element.path} component={element.page} />
				))}
			</Switch>
		</Router>
	);
};
export default Routes;
