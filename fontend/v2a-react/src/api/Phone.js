import linkName from "../constants/linkName";
import axiosClient from "./axiosClient";

const phoneApi = {
    getList: (params) => {
        const url = linkName.HOME.PHONE;
        return axiosClient.get(url, {params});
    },
    getListBranch: (slug) => {
        const url = linkName.BRANCH + `/${slug}`;
        return axiosClient.get(url);
    },
    getDetail: (slug) => {
        const url = linkName.HOME.PHONE + `/${slug}`;
        return axiosClient.get(url);
    },
    createRatting: (params) => {
        const url = '/rate/create';
        return axiosClient.post(url, params);
    },
    getRatting: (params) => {
        const url = '/rate';
        return axiosClient.get(url, {params});
    },
}

export default phoneApi;