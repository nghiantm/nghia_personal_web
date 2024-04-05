import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const BlogCard = ({ blogPost }) => {
    const theme = useSelector((theme) => theme.theme);

    const styles = {
        box: {
            py: 2,
            borderBottom: 1,
            borderColor: theme === 'light' ? '#ddd' : '#747474'
        },
        title: {
            mb: 1,  
        },
        summary: {
            color: '#a3a3a3',
        },
        author: {
            mt: 1,
            color: '#909090'
        }
    }
    
    return (
        <Box sx={styles.box}>
            <Typography variant="h2" sx={styles.title}>
                {blogPost.title}
            </Typography>

            <Typography variant="caption" sx={styles.summary}>
                {blogPost.content.substring(0, 200) + "..."}
            </Typography>

            <Typography variant="body1" sx={styles.author}>
                Written by {blogPost.author} on {blogPost.createdAt}
            </Typography>
        </Box>
    )
}

export default BlogCard;