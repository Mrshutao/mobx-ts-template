import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { RouteComponentProps } from "react-router";
import { Button } from "antd";
import HomeStore from "@/store/home";

import styles from "./index.module.scss";

interface Props extends RouteComponentProps {
	homeStore: HomeStore;
}

interface State {}

@inject("homeStore")
@observer
class Home extends Component<Props, State> {
	render() {
		const { history, homeStore } = this.props;
		return (
			<div className={styles.wrap}>
				<img src={require("./images/test.jpg")} />
				<span className={styles.title}>大家好,我是{homeStore.name}</span>
				<Button type="primary" onClick={() => history.push("/detail")}>
					惦记我
				</Button>
			</div>
		);
	}
}

export default Home;
