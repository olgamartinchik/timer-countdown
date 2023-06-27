import React from 'react'
import { Box } from '@mui/material'
import {Link} from 'react-router-dom'


const Navigation = () => {
    return (

        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center',  gap: '50px', padding: '20px'}}>
            <Link to="/">Timer</Link>
            <Link to="/countdown">Countdown</Link>

         </Box>
    )

}
export default Navigation