import { Box, ButtonBase, Container, CssBaseline, Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import { Img } from "react-image";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import homeBackground from "../assets/images/homeBackground.webp"


const Home = () => {
    const theme = useTheme();

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
            fontFamily: "Montserrat",
            flexGrow: 1
        },
        downArrow: {
            fontSize: "3rem",
            mb: "3rem",
            color: "#fff",
            cursor: "pointer"
        },
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
            color: '#73737d',
            flexGrow: '1'
        },
        icon: {
            mr: '1rem',
        },
    }

    return (
        <>
            <Box sx={styles.imageBox}>
                <Typography variant="h1" sx={styles.welcomeText}>Welcome. <br/>This is Nghia.</Typography>
                <ScrollLink to="profile" smooth duration={1000} onClick={(e) => e.preventDefault()}>
                    <KeyboardDoubleArrowDownIcon 
                        sx={styles.downArrow}
                    />
                </ScrollLink>
            </Box>

            <section id="profile">
                <CssBaseline /> {/* Allow for theme control */}
                <Container disableGutters maxWidth="lg" id="profile">
                    <Box height={"100vh"}>
                        <Grid container justifyContent={'flex-start'}>
                            <Grid item xs={12} sm={9} md={7} sx={styles.introItem}>
                                <Typography variant='h1' align='left' sx={styles.introText}>
                                    <span style={styles.span}>Hi, I am Nghia</span>. I live in Philly, USA. I am a software engineer experimenting with <span style={styles.span}>Web Technologies</span>.
                                </Typography>
                            </Grid>

                            <Grid item xs={12} sx={styles.avatarItem}>
                                <Img 
                                    src={'https://nghia-web.s3.amazonaws.com/nghia.jpeg'}
                                    width={"46"}
                                    style={{borderRadius: 25}}
                                />

                                <Typography variant='body1' sx={styles.avatarText}>
                                    Based in Philly, US.<br />SWE in the making.
                                </Typography>

                                <ButtonBase
                                    component={Link}
                                    to="https://github.com/nghiantm"
                                    disableRipple
                                    target="_blank"
                                >
                                    <GitHubIcon sx={styles.icon}/>
                                </ButtonBase>

                                <ButtonBase
                                    component={Link}
                                    to="https://www.linkedin.com/in/nghiantm/"
                                    disableRipple
                                    target="_blank"
                                >
                                    <LinkedInIcon sx={styles.icon}/>
                                </ButtonBase>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </section>
        </>
    )
}

export default Home;