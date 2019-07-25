import axios from "./axios";
import { queryListRequestType, queryListResponseType } from "../types";

export const queryList = (request: queryListRequestType) => axios.post("/api/brand/query", request).then((res: queryListResponseType) => res);
