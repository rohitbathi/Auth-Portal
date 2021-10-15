import Axios from "axios";

const axios = Axios.create({
    baseURL: "https://pcc-project.herokuapp.com",
});

export default axios;
