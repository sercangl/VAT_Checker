import axios from "axios";

const instance = axios.create({
    baseURL: 'https://vat-api.despatchcloud.uk/api/',
    crossdomain: true,
    proxyHeaders: false,
    withCredentials: false,
    credentials: false
});

export default instance;