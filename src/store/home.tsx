import { observable, action } from "mobx";
import { queryList } from "../api";
class Home {
	@observable name = "xmly";

	@action getData = () => {
		queryList({ keyword: "xmly", status: "1" }).then(res => {
			console.log(res.data);
		});
	};
}
export default  Home;
