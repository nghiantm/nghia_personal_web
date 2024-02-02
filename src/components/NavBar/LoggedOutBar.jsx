import React from "react";
import { AppBar, Box, ButtonBase, CssBaseline, Toolbar, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import DropMenu from "./DropMenu";

const LoggedOutView = () => {
    const theme = useTheme();
    const styles = {
        appBar: {
            position: 'static',
            background: 'transparent',
            boxShadow: 'none',
            paddingTop: '48px',
            [theme.breakpoints.up('lg')]: {
                paddingTop: '96px'
            },
        },
        logoBox: {
            flexGrow: 1,
        },
        logoButton: {
            justifyContent: 'flex-start',
            borderRadius: '8px',
            "& .MuiTouchRipple-root .MuiTouchRipple-child": {
                borderRadius: "8px"
            }
        },
        button: {
            px: 16/8,
            borderRadius: '8px',
            "& .MuiTouchRipple-root .MuiTouchRipple-child": {
                borderRadius: "8px"
            }
        },
        inactiveText: {
            color: '#878787',
            transition: 'color 0.3s ease',
            "&:hover": {
                color: '#000'
            }
        },
    }

    return (
        <>
            <AppBar sx={styles.appBar}>
                <Toolbar disableGutters variant='dense' sx={styles.toolBar}>
                        <Box sx={styles.logoBox}>
                            <ButtonBase
                                LinkComponent={Link}
                                to='/'
                                sx={styles.logoButton}
                            >
                                <Typography variant='h2'>Nghia Nguyen</Typography>
                            </ButtonBase>
                        </Box>

                        {/* display all buttons when larger than 600px width */}
                        <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
                            <ButtonBase
                                LinkComponent={Link}
                                to='/blog'
                                sx={styles.button}
                            >
                                <Typography variant='h2' sx={styles.inactiveText}>Blog</Typography>
                            </ButtonBase>

                            <ButtonBase 
                                LinkComponent={Link}
                                to='/project'
                                sx={styles.button}
                            >
                                <Typography variant='h2' sx={styles.inactiveText}>Project</Typography>
                            </ButtonBase>
                        </Box>

                        <ButtonBase sx={styles.button}>
                            <DarkModeIcon sx={styles.inactiveText}/>
                        </ButtonBase>

                        <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
                            <DropMenu />
                        </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default LoggedOutView;