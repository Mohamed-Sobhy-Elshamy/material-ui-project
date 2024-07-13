import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import { Box, CssBaseline, ThemeProvider,  createTheme } from "@mui/material";

// imports all things you needed in AppBar
import Appbar from "../MUI-components/Appbar";

// imports all things you needed in Drawer

import Drawerr from "../MUI-components/Drawerr";

// size of drawer
const drawerWidth = 240;




const Root = () => {

// use state to change mode
    const [myMode, setmyMode] = useState("dark")

    // dark theme
    const darkTheme = createTheme({
    palette: {
        mode: myMode,
    },
    });

// عايزين نضيف بقا ال icon 
// موجودة ف ال Drawerr



        // using use state =>>> عشان ده متغير = اللي هو لما ادوس ع الزرار يظهر لي ال دراوير
        const [noneOrblock, setnoneOrblock] = useState("none")
        // this is var عايز اوديه لل drawer . 

        const [drawerType, setdrawerType] = useState("permanent");
        // the parmanent => to store in variable drawerType



    return(
        <ThemeProvider theme={darkTheme}>
                    <CssBaseline />
            {/* النافبار */}
            <>
            <Appbar drawerWidth={drawerWidth} setnoneOrblock={setnoneOrblock}
            setdrawerType={setdrawerType}
            />

            {/* Drawer */}
            <Drawerr drawerWidth={drawerWidth}
            setmyMode={setmyMode} 
            noneOrblock={noneOrblock}
            drawerType={drawerType}
            setnoneOrblock={setnoneOrblock}
            setdrawerType={setdrawerType}
            /> 

            {/* انا عاوز اقوله انت هتعرض root وبعدين تعرض باقي ال pages */}
            {/* Box هو عنصر اب لمجموعة من العناصر */}
            <Box sx={{ml: {sm: `${drawerWidth}px`},
            display: "flex", 
            justifyContent: "center", 
            mt: "50px"
            }}
            component="main">
                <Outlet />
            </Box>
            {/* لما اروح الى اي مسار هيعرض الحاجة بتاعته + ان الحاجة اللي ف ال روت ثابتة */}
            </>
        </ThemeProvider>
    )
}

export default Root;