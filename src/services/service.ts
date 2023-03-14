import Axios, { AxiosResponse } from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const axios = Axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    ApiKey: API_KEY,
  },
});

export const orderService = () => {
    return axios.get("/Orders").then((response: AxiosResponse) => response.data);
}