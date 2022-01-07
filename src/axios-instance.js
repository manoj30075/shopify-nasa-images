import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.nasa.gov/",
    timeout: 1000,
});

export default instance;
