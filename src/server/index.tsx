import axios from "axios";
import { ENDPOINT, TOKEN } from "../container/index.js";
console.log("====================================");
console.log("Token", localStorage.getItem("token"));
console.log("====================================");
export const requies = axios.create({
  baseURL: `${ENDPOINT}api/v1`,
  timeout: 10000,
  data: {},
  headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
});
