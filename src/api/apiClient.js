import { myAxios } from "./myAxios";

export const getAllPost = () => {
    return myAxios.get("/api/blogs")
        .then((res) => {
            console.log("PULLING");
            return res.data;
        })
        .catch((err) => {
            console.log("ERROR")
        })
}