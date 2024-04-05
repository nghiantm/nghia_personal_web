import React from "react";
// redux
import { useDispatch, useSelector } from "react-redux";
// MUI
import { AppBar, Box, ButtonBase, CssBaseline, Toolbar, Typography, useTheme } from "@mui/material";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
// routing
import { Link } from "react-router-dom";
import DropMenu from "./DropMenu";
import { toggleTheme } from "../../redux/actions/themeAction";

const LoggedOutView = ({pathname}) => {
    const dispatch = useDispatch();
    const handleChangeTheme = () => {
        dispatch(toggleTheme());
    }

    // light or dark mode
    const mode = useSelector((theme) => theme.theme);

    const theme = useTheme();
    const styles = {
        appBar: {
            position: 'absolute',
            background: 'transparent',
            boxShadow: 'none',
            paddingTop: '1rem',
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
            px: 14/8,
            borderRadius: '8px',
            "& .MuiTouchRipple-root .MuiTouchRipple-child": {
                borderRadius: "8px"
            }
        },
        inactiveText: {
            color: mode === 'light' ? '#878787' : '#949496',
            transition: 'color 0.3s ease',
            "&:hover": {
                color: mode === 'light' ? '#000' : '#fff'
            }
        },
        name: {
            color: "#878787",
            ml: "1rem"
        }
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
                            <Typography variant='h2' sx={styles.name}>Nghia Nguyen</Typography>
                        </ButtonBase>
                    </Box>

                    {/* display all buttons when larger than 600px width */}
                    <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
                        {/*
                        <ButtonBase
                            LinkComponent={Link}
                            to='/blog'
                            sx={styles.button}
                        >
                            <Typography variant='h2' sx={styles.inactiveText}>Blog</Typography>
                        </ButtonBase>
                        */}

                        <ButtonBase 
                            LinkComponent={Link}
                            to='/project'
                            sx={styles.button}
                        >
                            <Typography variant='h2' sx={styles.inactiveText}>Project</Typography>
                        </ButtonBase>
                    </Box>

                    <ButtonBase
                        onClick={handleChangeTheme}
                        sx={styles.button}
                    >
                        { mode === 'light' 
                            ? <DarkModeIcon sx={styles.inactiveText}/>
                            : <LightModeIcon sx={styles.inactiveText}/>
                        }
                    </ButtonBase>

                    <Box sx={{ display: { xs: 'flex', sm: 'none' }, mr: "1rem" }}>
                        <DropMenu />
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default LoggedOutView;