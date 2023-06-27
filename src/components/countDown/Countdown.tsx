import React, {useCallback, useEffect, useRef, useState} from 'react';
import { Title, StyledCounter } from '../../assets/styles/app.styles';
import TimeInput from './TimeInput';
import ProgressTime from './ProgressTime';
import ButtonControl from './ButtonControl';


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
     
    }, [])

  

    //TimeInput handlers
    const handleMinuteChange = useCallback((event: React.ChangeEvent < HTMLInputElement >) => {
        let value = parseInt(event.target.value);        
        value = Math.min(value, 720);
        setMinutes(value);
        setTime(seconds + value * 60)
      }, [seconds]);
      
      const handleSecondChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        let value = parseInt(event.target.value);        
        value = Math.min(value, 59); 
        setSeconds(value);
        setTime(minutes * 60 + value)
      }, [ minutes]);

      const handleSliderChange = useCallback((event: Event, newValue: number | number[]) => {        
        const minute = Math.floor(+newValue / 60);
        const second = (+newValue % 60) ;
        setMinutes(minute);
        setSeconds(second);
        setTime(minute * 60 + second)
      }, []);


    return (
      
    <StyledCounter>
        <Title>Countdown</Title> {time}

        <TimeInput minutes={minutes} seconds={seconds}  time={time} isPlay={isPlay} handleMinuteChange = {handleMinuteChange} handleSecondChange = {handleSecondChange} handleSliderChange={handleSliderChange}/>
        
        <ProgressTime  time={time} minutes={minutes} seconds={seconds}/>       

        <ButtonControl toggleTimer={toggleTimer} resetTimer={resetTimer} isPlay={isPlay}/>
    
        
    </StyledCounter>
    )

}
export default React.memo(Countdown)