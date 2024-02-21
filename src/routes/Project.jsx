import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPortfolioAsync } from "../redux/actions/blogsAction";
// styles
import MyMarkdown from "../components/Markdown/MyMarkdown";
import MyLoading from "../components/MyLoading";
import { Typography } from "@mui/material";

const Project = () => {
    const loading = useSelector((state) => state.blog.loading);
    const portfolio = useSelector((state) => state.blog.portfolio);
    const error = useSelector((state) => state.blog.error);

    const dispatch = useDispatch();

    useEffect(() => {
        if (!portfolio.length)
            dispatch(getPortfolioAsync());
    }, [])

    return (!loading && portfolio.length && portfolio[0]) ? (
        <>
            <MyMarkdown content={"## Welcome to my \`portfolio\`!"}/>
            <Typography variant="body1">My name is Nghia Nguyen, and this is what I'm doing:</Typography>
            <ul style={{ paddingLeft: '30px' }}>
                <li><Typography>Currently a sophomore majoring in Computer Science, with concentration in Computer Vision and Computer Architecture at Drexel University</Typography></li>
                <li><Typography>Former Software Engineer Intern at BHSoft Summer 2023</Typography></li>
                <li><Typography>I have experiences in front-end development, specifially with web-app. I am striving to become a full-stack developer in the near future</Typography></li>
                <li><Typography>I developed impactful softwares in various fields, from financial to home security</Typography></li>
            </ul>
            <MyMarkdown content={"## Computer Science Projects I did at Drexel"} />
            {
                portfolio.map((item, index) => {
                    return (
                        <MyMarkdown key={index} content={item.content} />
                    )
                })
            }
        </>
    ) : <MyLoading />;
}

export default Project;