import { Box, Container, CssBaseline, Grid, Typography, useTheme } from "@mui/material";
import React from "react";

const Home = () => {
    const theme = useTheme();

    const styles = {
        introText: {
            [theme.breakpoints.down('sm')]: {
                fontSize: '28px'
            },
            [theme.breakpoints.between('sm', 'lg')]: {
                fontSize: '38px'
            },
            [theme.breakpoints.up('lg')]: {
                fontSize: '52px'
            },
        },
        span: {
            fontWeight: 700
        },
        introItem: {
            mt: '100px'
        }
    }

    return (
        <>
            <CssBaseline /> {/* allow for custom theme */}
            <Grid container justifyContent={'flex-start'}>
                <Grid item xs={12} sm={9} md={7} sx={styles.introItem}>
                    <Typography variant='h1' align='left' sx={styles.introText}>
                        <span style={styles.span}>Hi, I am Nghia</span>. I live in Philly, USA. I am a software engineer experimenting with <span style={styles.span}>Web Technologies</span>.
                    </Typography>
                </Grid>
            </Grid>
        </>
    )
}

export default Home;