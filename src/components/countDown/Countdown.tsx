import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import { Title, StyledCounter, ContainerItems, TimerStyled } from '../../assets/styles/app.styles';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Box, LinearProgress, Typography } from '@mui/material';

import TimeInput from './TimeInput';
// import ProgressTime from './ProgressTime';
// import ButtonControl from './ButtonControl';
import { Button,  } from '@mui/material';


const Countdown = () => {
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
   
    const [time, setTime] = useState(0);
    const [isPlay, setIsPlay] = useState(false)
    const timer:React.MutableRefObject<null |number | NodeJS.Timeout> = useRef(null)

    const playAudio = () => {
        const audio = new Audio('https://zvukitop.com/wp-content/uploads/2021/09/zvuk-effekt-konec-6.mp3')
        
        audio.play();
   }
   useEffect(() => {
    if (isPlay) {
      timer.current = setInterval(() => {
        if (time > 0) {
          setTime((time) => time - 1);
        } else {
          clearInterval(timer.current!);
          setTime(0)
          setMinutes(0)
          setSeconds(0)
          setIsPlay(false)
          playAudio();
        }
      }, 1000);
    } else {
      clearInterval(timer.current!);
    }
  
    return () => {
      clearInterval(timer.current!);
    };
  }, [time, isPlay]);
   
    const toggleTimer = useCallback(() => {         
        setIsPlay(!isPlay) 
    },[isPlay])

    const resetTimer = useCallback(() => {
        clearInterval(timer.current!)
        setTime(0)
        setMinutes(0)
        setSeconds(0)
        setIsPlay(false)
        console.log('isPlay',isPlay)
    }, [])

    
   
   
      //progress
      const getTimerFormat = useMemo (()=>{
        return (time: number) => {
            const minutes = Math.floor(time / 60);
            const seconds = Math.floor((time % 60) );         
            return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;          
        }
    },[]) 
    
    return (
      
    <StyledCounter>
        <Title>Countdown</Title> {time}
        <TimeInput minutes={minutes} setMinutes={setMinutes} seconds={seconds} setSeconds={setSeconds} setTime = {setTime} time={time} isPlay={isPlay}/>
        
        {/* <ProgressTime  value={time} /> */}
        <Box sx={{ display: 'flex', flexDirection:'column', alignItems: 'center', gap:'30px', width: '50%' }}>
             <TimerStyled>{getTimerFormat(time)}</TimerStyled>
            <Box sx={{ width: '100%', mr: 1 }}>
                <LinearProgress variant="determinate" value={time ? Math.round((((minutes*60+seconds) - time) /(minutes*60+seconds)) * 100) : 0} />
            </Box>
            <Box sx={{ minWidth: 35 }}>
                <Typography variant="body2" color="text.secondary">{`${time ? Math.round((((minutes*60+seconds) - time) / (minutes*60+seconds)) * 100) : 0}%`}</Typography>
            </Box>
        </Box>

        {/* <ButtonControl/> */}
        <ContainerItems>
            <Button variant="contained" color="secondary" onClick={toggleTimer}>{!isPlay?<PlayArrowIcon/>:<PauseIcon/>}</Button>
            <Button variant="contained" color="secondary" onClick={resetTimer}>Reset</Button>            
        </ContainerItems>
        
    </StyledCounter>
    )

}
export default React.memo(Countdown)