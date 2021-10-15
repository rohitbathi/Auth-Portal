import Axios from "axios";

const axios = Axios.create({
    baseURL: "http://13.233.136.51:8000",
});

export default axios;
