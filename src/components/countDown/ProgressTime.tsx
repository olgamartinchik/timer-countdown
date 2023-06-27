import React, { useMemo } from "react";
import { TimerStyled } from '../../assets/styles/app.styles';
import { Box, LinearProgress, Typography } from '@mui/material';

type ProgressTimeProp = {
    time: number,
    minutes: number,
    seconds: number
}
const ProgressTime: React.FunctionComponent<ProgressTimeProp> = ({time, minutes, seconds}) => {
    
    const getTimerFormat = useMemo (()=>{
        return (time: number) => {
            const minutes = Math.floor(time / 60);
            const seconds = Math.floor((time % 60) );         
            return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;          
        }
    },[]) 

    return (
        <Box sx={{ display: 'flex', flexDirection:'column', alignItems: 'center', gap:'30px', width: '50%' }}>
            <TimerStyled>{getTimerFormat(time)}</TimerStyled>
            <Box sx={{ width: '100%', mr: 1 }}>
                <LinearProgress variant="determinate" value={time ? Math.round((((minutes*60+seconds) - time) /(minutes*60+seconds)) * 100) : 0} />
            </Box>
            <Box sx={{ minWidth: 35 }}>
                <Typography variant="body2" color="text.secondary">{`${time ? Math.round((((minutes*60+seconds) - time) / (minutes*60+seconds)) * 100) : 0}%`}</Typography>
            </Box>
        </Box>
    )
}
export default  React.memo(ProgressTime)