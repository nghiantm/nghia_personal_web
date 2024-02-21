import { CssBaseline, Grid, Typography, useTheme } from "@mui/material";
import React from "react";

const Home = () => {
    const styles = {
        span: {
            fontWeight: 700
        },
        introItem: {
            mt: '6.25rem'
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