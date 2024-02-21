import { CssBaseline, Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import { Img } from "react-image";

const Home = () => {
    const styles = {
        span: {
            fontWeight: 700
        },
        introItem: {
            mt: '6.25rem',
        },
        avatarItem: {
            mt: '4rem',
            display: 'flex',
            alignItems: 'center'
        },
        avatarText: {
            ml: '1rem',
            color: '#73737d'
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

                <Grid item xs={12} sm={9} sx={styles.avatarItem}>
                    <Img 
                        src={'public/nghia.jpeg'}
                        width={"46"}
                        style={{borderRadius: 25}}
                    />

                    <Typography variant='body1' sx={styles.avatarText}>
                        Based in Philly, US. SWE in the making.
                    </Typography>
                </Grid>
            </Grid>
        </>
    )
}

export default Home;