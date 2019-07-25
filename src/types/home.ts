//example
export interface queryListRequestType {
	type?: boolean;
	keyword?: string;
	status: "1" | "0";
}
export interface queryListResponseType {
	pageSize: number;
	pageNum: number;
	totolCount: number;
	data: Array<{ id: string; name: string }>;
}
