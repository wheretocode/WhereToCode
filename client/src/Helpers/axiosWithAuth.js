import axios from "axios";

const axiosWithAuth = () => {
    const token = localStorage.getItem("token");

    return axios.create({
        headers: {
        "Content-Type": "application/json",
        authorization: token
        }
    });
};

export default axiosWithAuth;