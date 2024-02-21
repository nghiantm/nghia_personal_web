import { Box, ButtonBase, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const TagSelector = ({ tagList, currentTag, tagHandler }) => {
    const mode = useSelector((theme) => theme.theme);

    const styles = {
        box: {
            display: 'flex',
            flexWrap: 'wrap'
        }
    }

    return (
        <Box sx={styles.box}>
            {
                tagList.map((item, index) => {
                    return (
                        <ButtonBase 
                            key={index} 
                            onClick={() => tagHandler(item)}
                            sx={{
                                px: '1rem',
                                m: '0.4rem',
                                backgroundColor: mode === 'light' 
                                    ? currentTag === item 
                                        ? '#b1b4b7'
                                        : '#e2e3e5' 
                                    : currentTag === item
                                        ? '#a8acb3'
                                        : '#636a74',
                                borderRadius: '0.375rem',
                                boxShadow: mode === 'light' 
                                    ? '0px 2px 2px 0px rgba(0, 0, 0, 0.5)'
                                    : '0px 2px 2px 0px rgba(255, 255, 255, 0.5)'
                            }}
                        >
                            <Typography variant="body1">
                                {item}
                            </Typography>
                        </ButtonBase>
                    )
                })
            }
        </Box>
    )
}

export default TagSelector;