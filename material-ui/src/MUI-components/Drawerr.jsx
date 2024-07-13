import { Divider, Drawer, List,  IconButton } from "@mui/material";
import React from "react";

// imports of list
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


// imports icons
import HomeIcon from '@mui/icons-material/Home';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

// import Link fronm React-Router
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@emotion/react";

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';



const Drawerr = ({drawerWidth, setmyMode, noneOrblock, drawerType, setnoneOrblock, setdrawerType}) => {

    // use Location =>> Hook =>> import from react-router
    // عايز اغير ال bg => اللي واقف عندها home || create
    const location = useLocation()



    // عشان تحصل ع ال mode الحالي
    const Theme = useTheme()
    // بيحصل ع جميع القيم الافتراضية ويخزنها ف ال const ده
    // Theme.palette.mode

    return(
        <>
        <Drawer
            sx={{
                // breackpoints =>>> ف حالة الشاشات الصغيرة 
                display: {xs: noneOrblock, sm: "block"},

            width: `${drawerWidth}px`,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                width: `${drawerWidth}px`,
                boxSizing: 'border-box',
            },
            }}
            variant={drawerType}
            anchor="left"
            open={true}
            onClose={() => {
                setnoneOrblock("none")
                setdrawerType('permanent')
            }}
        >

            {/* <Button 
            }} variant="contained" color="primary">
                change mode
            </Button> */}



                {/* دي هتبقا ال list بتاعتي */}
                {/* عايزين نعمل انتقال بين ال pages => Link => React-Router */}
        <List>

    <ListItem sx={{display: "flex", justifyContent: "center", mb: "15px"}} disablePadding>
            <IconButton sx={{ ml: 1 }} onClick={() => {
                // locael storage
                // localStorage.setItem("currentMode", Theme.palette.mode === "dark" ? "light" : "dark")

                    // change mode
                    setmyMode(Theme.palette.mode === "light" ? "dark" : "light") }}>
                        {Theme.palette.mode === 'dark' ? <Brightness7Icon sx={{color: "gray"}} /> : <Brightness4Icon sx={{color: "orange"}} />}
            </IconButton>
    </ListItem>

            {/* <Toolbar /> */}
            <Divider />

            <Link style={{color: "inherit", textDecoration: "none"}} to="/">
                <ListItem sx={{bgcolor: location.pathname === '/'? "gray" : null}} disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <HomeIcon /> 
                        </ListItemIcon>
                    <ListItemText primary="Home" />
                    </ListItemButton>
                </ListItem>
            </Link>

            <Link style={{color: "inherit", textDecoration: "none"}} to="/create">
                <ListItem sx={{bgcolor: location.pathname === '/create'? "gray" : null}} disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <AddCircleIcon />
                        </ListItemIcon>
                    <ListItemText primary="Create" />
                    </ListItemButton>
                </ListItem>
            </Link>

                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <AccountCircleIcon />
                        </ListItemIcon>
                    <ListItemText primary="Profile" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <SettingsIcon />
                        </ListItemIcon>
                    <ListItemText primary="Settings" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <ExitToAppIcon />
                        </ListItemIcon>
                    <ListItemText primary="Logout" />
                    </ListItemButton>
                </ListItem>

        </List>


        </Drawer>
        </>
    )
}

export default Drawerr;