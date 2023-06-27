import React, { useCallback} from 'react';
// import PropTypes from 'prop-types'
import { styled } from '@mui/material/styles';
import { Slider } from '@mui/material';
import MuiInput from '@mui/material/Input';
import { ContainerItems } from '../../assets/styles/app.styles';

const Input = styled(MuiInput)`
  width: 125px;
`;
const marks = [
  {
    value: 0,
    label: '0 min',
  },

  {
    value: 3600,
    label: '60 min',
  },
];
type PropType={
  setTime:  (value: React.SetStateAction<number>) => void
  setMinutes:  (value: React.SetStateAction<number>) => void
  setSeconds:  (value: React.SetStateAction<number>) => void
  minutes: number
  seconds: number
  time: number
  isPlay:boolean
}


const TimeInput: React.FunctionComponent<PropType>  = ({setTime,setSeconds,setMinutes,minutes, seconds, time, isPlay}) => {
    // const [minutes, setMinutes] = useState(0);
    // const [seconds, setSeconds] = useState(0);
   
    
      const handleSliderChange = useCallback((event: Event, newValue: number | number[]) => {
        // console.log('handleSliderChange',newValue)
        const minute = Math.floor(+newValue / 60);
        const second = (+newValue % 60) ;
        setMinutes(minute);
        setSeconds(second);
        setTime(minute*60+second)
      }, [minutes, seconds]);

      const handleMinuteChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        let value = parseInt(event.target.value);
        // console.log('handleMinuteChange',value)
        value = Math.min(value, 720);
        setMinutes(value);
        setTime(seconds+value*60)
      }, [minutes,seconds]);

      const handleSecondChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        let value = parseInt(event.target.value);
        // console.log('handleSecondChange',value)
        value = Math.min(value, 59); 
        setSeconds(value);
        setTime(minutes*60+value)
      }, [seconds, minutes]);
   
      

    return (
        <div>
            <p>Start time: {minutes}, {seconds}, {minutes*60+seconds}</p>
            <ContainerItems>
             
                <Input
                    value={minutes}
                    size="small"
                    onChange={handleMinuteChange}   
                    disabled={time === 0 && isPlay}                       
                    inputProps={{         
                    disabled: time !== 0 && isPlay,        
                    step: 1,
                    min: 0,
                    max: 720,
                    type: 'number',
                    'aria-labelledby': 'input-slider',
                }}
                /> <span>min</span>
                <Input
                    value={ seconds }
                    size="small"
                    onChange={handleSecondChange} 
                                                
                    inputProps={{
                    disabled: time !== 0 && isPlay,  
                    step: 1,
                    min: 0,
                    max: 59,
                    type: 'number',
                    'aria-labelledby': 'input-slider',
                }}
                /><span>sec</span>
                <Slider
                    value={minutes  * 60 + seconds}
                    valueLabelDisplay="on"
                    onChange={handleSliderChange }
                    step={15}          
                    min={0}
                    max={3600}
                    color="secondary"
                    marks={marks}
                    disabled={time !== 0 && isPlay }
                />
        
            </ContainerItems>
        </div>
    )

}
// TimeInput.propTypes = {  
//   setTime:  PropTypes.func,
//   setMinutes: PropTypes.func,
//   setSeconds:  PropTypes.func,
//   minutes: PropTypes.number,
//   seconds: PropTypes.number,
//   time: PropTypes.number,
//   isPlay: PropTypes.bool,
// }
export default React.memo(TimeInput)