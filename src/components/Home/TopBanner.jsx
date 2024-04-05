import { Box, Typography } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";
import homeBackground from "../../assets/images/homeBackground.webp"
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

const TopBanner = ({ theme }) => {
    const styles = {
        imageBox: {
            backgroundImage: `url(${homeBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            overflow: "hidden",
            [theme.breakpoints.up("lg")]: {
                height: "95vh"
            },
        },
        welcomeText: {
            mt: "14rem",
            ml: "1rem",
            color: "#fff",
            fontFamily: "Garamond, serif",
            flexGrow: 1
        },
        downArrow: {
            fontSize: "3rem",
            mb: "3rem",
            color: "#878787",
            transition: 'color 0.3s ease',
            "&:hover": {
                color: "#fff"
            },
            cursor: "pointer"
        },
    }

    return (
        <Box sx={styles.imageBox}>
            <Typography variant="h1" sx={styles.welcomeText}>
                Welcome. <br/>This is Nghia.
            </Typography>
            
            <ScrollLink to="profile" smooth duration={1000} onClick={(e) => e.preventDefault()}>
                <KeyboardDoubleArrowDownIcon 
                    sx={styles.downArrow}
                />
            </ScrollLink>
        </Box>
    )
}

export default TopBanner;