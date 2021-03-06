import linkName from "../constants/linkName";
import axiosClient from "./axiosClient";

const authApi = {
    check: (params) => {
        const url = linkName.CHECK_LOGIN;
        return axiosClient.post(url, params);
    },
    login: (params) => {
        const url = linkName.LOGIN;
        return axiosClient.post(url, params);
    },
    register: (params) => {
        const url = linkName.REGISTER;
        return axiosClient.post(url, params);
    },
    detail: (params) => {
        const url = linkName.USER_DETAIL_INDEX;
        return axiosClient.get(url, {params});
    },
    update: (params) => {
        const url = linkName.USER_INFO_INDEX;
        return axiosClient.put(url, params);
    },
}

export default authApi;