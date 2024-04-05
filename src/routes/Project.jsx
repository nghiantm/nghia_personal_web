import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPortfolioAsync } from "../redux/actions/blogsAction";
// styles
import MyMarkdown from "../components/Markdown/MyMarkdown";
import MyLoading from "../components/MyLoading";
import { CssBaseline, Typography } from "@mui/material";
import TagSelector from "../components/Project/TagSelector";
import { Container } from "@mui/system";
import { useTheme } from "@emotion/react";

const Project = () => {
    const dispatch = useDispatch();
    const theme = useTheme();
    const loading = useSelector((state) => state.blog.loading);
    const portfolio = useSelector((state) => state.blog.portfolio);
    const error = useSelector((state) => state.blog.error);

    const [selectedTag, setTag] = useState('All');
    const filteredPortfolio = selectedTag === 'All' 
        ? portfolio 
        : portfolio.filter(item => item.tags.includes(selectedTag));

    useEffect(() => {
        dispatch(getPortfolioAsync());
    }, [])

    const styles = {
        container: {
          px: '2.5rem',
          pt: "4rem",
          [theme.breakpoints.between('md', 'lg')]: {
            px: '7.5rem'
          },
        },
    }

    return (!loading && filteredPortfolio && filteredPortfolio[0]) ? (
        <>
            <CssBaseline />
            <Container disableGutters maxWidth="lg" sx={styles.container}>
                <MyMarkdown content={"## Welcome to my \`portfolio\`!"}/>
                <Typography variant="body1">My name is Nghia Nguyen, and this is what I'm doing:</Typography>
                <ul style={{ paddingLeft: '30px' }}>
                    <li><Typography>Currently a sophomore majoring in Computer Science, with concentration in Computer Vision and Computer Architecture at Drexel University</Typography></li>
                    <li><Typography>Former Software Engineer Intern at BHSoft Summer 2023</Typography></li>
                    <li><Typography>I have experiences in front-end development, specifially with web-app. I am striving to become a full-stack developer in the near future</Typography></li>
                    <li><Typography>I developed impactful softwares in various fields, from financial to home security</Typography></li>
                </ul>
                <MyMarkdown content={"## CS Projects I did at Drexel"} />

                <TagSelector 
                    tagList={['All', 'JavaScript', 'Python', 'C#', 'Swift']}
                    currentTag={selectedTag}
                    tagHandler={setTag}
                />

                {
                    filteredPortfolio.map((item, index) => {
                        return (
                            <MyMarkdown key={index} content={item.content} />
                        )
                    })
                }
            </Container>
        </>
    ) : <MyLoading />;
}

export default Project;