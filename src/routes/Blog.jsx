import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogsAsync } from "../redux/actions/blogsAction";
// styles
import MyMarkdown from "../components/Markdown/MyMarkdown";
import MyLoading from "../components/MyLoading";

const Blog = () => {
    const loading = useSelector((state) => state.blog.loading);
    const blogs = useSelector((state) => state.blog.blogs);
    const error = useSelector((state) => state.blog.error);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBlogsAsync());
    }, [])

    return (!loading && blogs[0]) ? (
        <MyMarkdown content={blogs[0].content}/>
    ) : <MyLoading />;
}

export default Blog;