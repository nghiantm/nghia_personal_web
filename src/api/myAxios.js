import axios from "axios";

export const myAxios = axios.create({
    baseURL: 'https://blog-backend-6wa4.onrender.com',
})