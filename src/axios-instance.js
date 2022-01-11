/**
 * Axios wrapper for the API
 * created on: 2022-01-07
 * author: @manoj30075
 */
import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://api.nasa.gov/",
    timeout: 30000,
});

export default axiosInstance;
