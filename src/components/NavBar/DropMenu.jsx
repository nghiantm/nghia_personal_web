import React from "react";
import { ButtonBase, Menu, MenuItem, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

const DropMenu = () => {
    const styles = {
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
                    onClick={handleCloseNavMenu}
                >
                    <Typography variant='h3' sx={styles.menuText}>Project</Typography>
                </MenuItem>
            </Menu>
        </>
    )
}

export default DropMenu;