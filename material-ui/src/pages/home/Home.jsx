import { Box, Typography, IconButton } from '@mui/material';
import './Home.css';
import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';

const Home = () => {

    // هنعمل variable to array بتاعتي 
    const [mydata, setMydata] = useState([])


    // عايز اول لما افتح page home => ينفذ الاكواد بتاعت ال fetch => using =>> use Effect
    useEffect(() => {
        fetch('http://localhost:8888/mydata')
            .then((response) => response.json())
            .then((data) => setMydata(data))
    }, [mydata])


    // total price => variable 
    // const [total, setTotal] = useState(0);
    // هيكون ف error => solution is let in JS
    let totalPrice = 0;


    return (
        <Box>

            {mydata.map((item) => {
                // setTotal()
                totalPrice += item.price
                return (
                    <Paper key={item.id} sx={{
                        width: "366px", display: "flex", justifyContent: "space-between",
                        m: "30px", pt: "30px", pb: "5px", position: "relative"
                    }}>
                        <Typography sx={{ ml: "15px", fontSize: "26px" }} variant="h6" >{item.title}</Typography>
                        <Typography sx={{ mr: "15px", fontSize: "26px", opacity: "0.7" }} variant="h6" >${item.price}</Typography>

                        <IconButton onClick={() => {
                            fetch(`http://localhost:8888/mydata/${item.id}`, { method: "DELETE" })
                        }}


                            sx={{ position: "absolute", top: "0", right: "0" }}>
                            <HighlightOffIcon />
                        </IconButton>
                    </Paper>
                )
            })}


            <Typography textAlign="center" mt="5px" variant="h4">
                <CurrencyExchangeIcon /> Total Price is  ${totalPrice}
            </Typography>
        </Box>
    )
}

export default Home;