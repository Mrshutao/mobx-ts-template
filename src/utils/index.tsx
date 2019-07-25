export const checkPhone = (phone: string) => {
	return !/^1[3456789]\d{9}$/.test(phone);
};
export const formatNum = <T extends number>(num: T) => {
	if (!num) return num;
	return num > 9999 ? Math.ceil(num / 100) / 100 + "万" : num;
};

export const getQueryString = (name: string) => {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if (r !== null) return unescape(r[2]);
	return null;
};

export const findNode = (key: string, list: any[], node: string, value: string | number) => {
	let result: any = null;
	if (list.length === 0 || Object.prototype.toString.call(list) !== "[object Array]") {
		return null;
	} else {
		for (let i = 0; i < list.length; i++) {
			if (list[i][key] === value) {
				result = list[i];
				break;
			} else {
				if (list[i][node]) {
					const t = findNode(key, list[i][node], node, value);
					if (t) {
						result = t;
						break;
					}
				}
			}
		}
		return result;
	}
};

