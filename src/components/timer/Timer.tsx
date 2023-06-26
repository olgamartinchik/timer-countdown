import React, {useState, useCallback, useMemo, useRef} from 'react';
import Button from '@mui/material/Button';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Title, StyledCounter, TimerStyled, ContainerItems } from '../../assets/styles/app.styles';




const Timer = ()=>{
    const [time, setTime] = useState(0)
 
    const [isPlay, setIsPlay] = useState(false)
    const timer:React.MutableRefObject<null |number | NodeJS.Timeout> = useRef(null)
   


    const getTimerFormat = useMemo (()=>{
        return (time: number) => {
            const minutes = Math.floor(time / 60000);
            const seconds = Math.floor((time % 60000) / 1000);
            const milliseconds = Math.floor((time % 1000) / 10);
      
            return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`;
          
        }
    },[]) 
    
    const toggleTimer = useCallback(() => { 
        setIsPlay(!isPlay)
        if(isPlay){
            clearInterval(timer.current!)
        }else{
            timer.current = setInterval(()=>    {
                setTime((time) => time + 10)
            }, 10)
        }

    },[isPlay])

    const resetTimer = useCallback(() => {
        clearInterval(timer.current!)
        setTime(0)
        setIsPlay(false)
    }, [])
    
    return(
        
            <StyledCounter >
                <Title>timer</Title>
                <TimerStyled>{getTimerFormat(time)}</TimerStyled>
                <ContainerItems>
                    <Button variant="contained" color="secondary" onClick={toggleTimer}>{!isPlay?<PlayArrowIcon/>:<PauseIcon/>}</Button>
                    <Button variant="contained" color="secondary" onClick={resetTimer}>Reset</Button>            
                </ContainerItems>
            </StyledCounter>
    )
        
}
export default React.memo(Timer);