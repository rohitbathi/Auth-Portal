import axios from "./axiosHook";

export default function logout() {
    axios
        .post(
            "/auth/token/logout/",
            {},
            {
                headers: {
                    Authorization: `Token ${localStorage.getItem("userToken")}`,
                },
            }
        )
        .then((response) => {
            if (response.status === 204) {
                localStorage.removeItem("userToken");
                window.location.replace("/");
            }
        })
        .catch((err) => {
            console.log(err.response);
        });
}
