import React from "react";

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import {  Link, Typography } from "@mui/material";
import Avatar from '@mui/material/Avatar';

// import icon menu
import WidgetsIcon from '@mui/icons-material/Widgets';

const Appbar = ({drawerWidth, setnoneOrblock, setdrawerType}) => {
    return(
        <>
            <AppBar position="static" sx={{ml: {xs: 0, sm: `${drawerWidth}px`}, width: {sm: `calc(100% - ${drawerWidth}px)`}}}>
                <Toolbar>
                <IconButton sx={{display: {sm : "none"}}} onClick={() => {
                    setdrawerType("temporary")
                    setnoneOrblock("block")
                }}>
                    <WidgetsIcon />
                </IconButton>

                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}>
                    </IconButton>

                    <Link underline="none" color="inherit" sx={{ flexGrow: 1, "&:hover": {fontSize:"17px"} }} href="/">My Expenses</Link>

                    <Typography sx={{mr: "16px"}} variant="body1" color="inherit">Mohamed Elshamy</Typography>
                    {/* <Avatar alt="Remy Sharp" src="./images/c:\Users\Options\Downloads\WhatsApp Image 2023-07-11 at 2.32.39 AM.jpeg" /> */}

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Appbar;