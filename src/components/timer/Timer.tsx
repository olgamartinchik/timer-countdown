import React, {useState, memo, useCallback, useMemo, useRef} from 'react';
import Button from '@mui/material/Button';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
  text-transform: uppercase;
`;
const TimerStyled= styled.span`
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
`;
const StyledCounter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin:0 auto;
    padding: 20px;
`;
const ButtonCounter = styled.div`
    display: flex;    
    gap: 20px;    
`;

const Timer = ()=>{
    const [time, setTime] = useState(0)
 
    const [isPlay, setIsPlay]=useState(false)
    const timer:React.MutableRefObject<null |number | NodeJS.Timeout> = useRef(null)
   


    const getTimerFormat = useMemo (()=>{
        return (time: number)=>{
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
            timer.current = setInterval(()=>{
                setTime((time) => time + 10)
            }, 10)
        }

    },[isPlay])
    const resetTimer = useCallback(() => {
        clearInterval(timer.current!)
        setTime(0)
        setIsPlay(false)
    },[])
    
    return(
        
            <StyledCounter >
                <Title>timer</Title>
                <TimerStyled>{getTimerFormat(time)}</TimerStyled>
                <ButtonCounter>
                    <Button variant="contained" color="secondary" onClick={toggleTimer}>{!isPlay?<PlayArrowIcon/>:<PauseIcon/>}</Button>
                    <Button variant="contained" color="secondary" onClick={resetTimer}>Reset</Button>            
                </ButtonCounter>
            </StyledCounter>
    )
        
}
export default React.memo(Timer);