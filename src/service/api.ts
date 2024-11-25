import axios from "axios";

const api = axios.create({
    baseURL: 'http://192.168.13.27:8005/api',
})

export default api