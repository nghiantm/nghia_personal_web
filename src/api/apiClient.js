import { myAxios } from "./myAxios";

export const getAllPost = () => {
    return myAxios.get("/api/blogs")
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.log("ERROR")
        })
}

export const getAllPortfolio = () => {
    return myAxios.get("/api/portfolio")
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.log("ERROR")
        })
}