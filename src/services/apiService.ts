import axios, { Axios } from "axios";

const apiService = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

//const cancelToken = axios.CancelToken.source();

export { apiService };
