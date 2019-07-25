import axios from "axios";
let instance = axios.create({
	timeout: 10000
});

instance.defaults.withCredentials = true;

instance.interceptors.response.use(
	response => {
		// console.log(response);
		if (response.status !== 200) {
			// console.log(response);
			return Promise.reject(response.data);
		} else {
			if (response.data && response.data.type === "SUCCESS") {
				return Promise.resolve(response.data.data);
			} else {
				if (response.data.type === "FAIL") {
					return Promise.reject(response.data.data.reason);
				} else if (response.data.type === "ERROR") {
					return Promise.reject(response.data.data.reason || "服务端错误，请联系管理人员");
				} else {
					return Promise.reject("服务端错误");
				}
			}
		}
	},
	error => {
		return Promise.reject(error.message);
	}
);

export default {
	get: (url: string) => instance.get(url).then((res: any) => res),
	post: (url: string, params?: any) => instance.post(url, params).then((res: any) => res)
};
