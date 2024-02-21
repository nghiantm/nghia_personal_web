import { Link, Typography } from "@mui/material";
import { Img } from "react-image";
import Markdown from "react-markdown"
import rehypeHighlight from 'rehype-highlight';
import remarkToc from "remark-toc";

const MyMarkdown = ({ content }) => {
    return (
        <Markdown
            rehypePlugins={[[rehypeHighlight], [remarkToc]]}
            components={{
                p(props) {
                    const {children, ...rest} = props;
                    return <Typography variant="body1">{children}</Typography>
                },
                a(props) {
                    const {children, href, ...rest} = props;
                    return <Link 
                        variant="body1"
                        href={href}
                    >
                        {children}
                    </Link>
                },
                img(props) {
                    const {src, alt, ...rest} = props;
                    return <Img 
                        src={[src]}
                        width="100%"
                    />
                }
            }}
        >
            {content}
        </Markdown>
    )
}

export default MyMarkdown;