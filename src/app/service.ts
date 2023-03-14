import Axios from 'axios';
const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const axios_base = Axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
        "ApiKey": API_KEY
    },
  });

  