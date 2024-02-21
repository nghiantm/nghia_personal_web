import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPortfolioAsync } from "../redux/actions/blogsAction";
// styles
import MyMarkdown from "../components/Markdown/MyMarkdown";
import MyLoading from "../components/MyLoading";

const Project = () => {
    const loading = useSelector((state) => state.blog.loading);
    const portfolio = useSelector((state) => state.blog.portfolio);
    const error = useSelector((state) => state.blog.error);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!portfolio) {
            dispatch(getPortfolioAsync());
        }
    }, [])

    return (!loading && portfolio) ? (
        <MyMarkdown content={portfolio}/>
    ) : <MyLoading />;
}

export default Project;