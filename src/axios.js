import requests from "./requests";
import axios from "axios";

// instance is an AxiosInstance (interface)
const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3",
});



export default instance;