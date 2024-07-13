import './Create.css'
import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';

// import icons
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CreateIcon from '@mui/icons-material/Create';

// import useNavigate from 'react-router-dom'
// import {Link} from 'react-router-dom'
// import useNavigate from 'react-router-dom'

const Create = () => {
    // use state to title & price => عشان هما بيتغيرو
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);

    // use navigate so translate to home page
    // const navigate = useNavigate()

    return (
        <Box sx={{ width: "400px" }} component="form">
            <TextField fullWidth={true}
                onChange={(eo) => {
                    setTitle(eo.target.value)
                }}
                autoComplete="off"
                label="Transaction Title"
                id="filled-start-adornment"
                sx={{ mt: "22px", display: 'block', }}
                InputProps={{
                    startAdornment: <InputAdornment position="start"><CreateIcon /></InputAdornment>,
                }}
                variant="standard"
            />



            <TextField fullWidth={true}
                onChange={(e) => {
                    setPrice(Number(e.target.value))
                }}
                autoComplete="off"
                label="Price"
                id="filled-start-adornment"
                sx={{ mt: "22px", display: 'block', }}
                InputProps={{
                    startAdornment: <InputAdornment position="start"><AttachMoneyIcon /></InputAdornment>,
                }}
                variant="standard"
            />

            <Button
                onClick={() => {
                    fetch("http://localhost:8888/mydata", {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ title, price })
                    })


                }} sx={{ mt: "20px" }} variant="contained" disableElevation>
                Submit  <KeyboardDoubleArrowRightIcon />
            </Button>


        </Box>
    )
}


export default Create;