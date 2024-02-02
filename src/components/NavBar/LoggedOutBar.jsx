import React from "react";
import { AppBar, Box, ButtonBase, CssBaseline, Menu, MenuItem, Toolbar, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import MenuIcon from '@mui/icons-material/Menu';

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
            justifyContent: 'flex-start'
        },
        button: {
            px: 16/8
        },
        inactiveText: {
            color: '#878787',
            transition: 'color 0.3s ease',
            "&:hover": {
                color: '#000'
            }
        },
        menuText: {

        }
    }

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

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
                            <ButtonBase sx={styles.button}>
                                <Typography variant='h2' sx={styles.inactiveText}>Blog</Typography>
                            </ButtonBase>

                            <ButtonBase sx={styles.button}>
                                <Typography variant='h2' sx={styles.inactiveText}>Project</Typography>
                            </ButtonBase>
                        </Box>

                        <ButtonBase sx={styles.button}>
                            <DarkModeIcon sx={styles.inactiveText}/>
                        </ButtonBase>

                        <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
                            <ButtonBase 
                                onClick={handleOpenNavMenu}
                                sx={styles.button}
                            >
                                <MenuIcon sx={styles.inactiveText}/>
                            </ButtonBase>

                            <Menu
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', sm: 'none' },
                                }}
                            >
                                <MenuItem 
                                    component={Link}
                                    to='/blog'
                                    onClick={handleCloseNavMenu}
                                >
                                    <Typography variant='h3' sx={styles.menuText}>Blog</Typography>
                                </MenuItem>

                                <MenuItem 
                                    component={Link}
                                    to='/project'
                                >
                                    <Typography variant='h3' sx={styles.menuText}>Project</Typography>
                                </MenuItem>
                            </Menu>
                        </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default LoggedOutView;