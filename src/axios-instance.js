import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://api.nasa.gov/",
    timeout: 30000,
});

export default axiosInstance;
