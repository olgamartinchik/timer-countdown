import React, {useState, useCallback} from 'react';
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
const TimeInput = () => {
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
   
    
      const handleSliderChange = useCallback((event: Event, newValue: number | number[]) => {
        console.log('handleSliderChange',newValue)
        const minutes = Math.floor(+newValue / 60);
        const seconds = (+newValue % 60) ;
        setMinutes(minutes);
        setSeconds(seconds);
      }, [minutes, seconds]);

      const handleMinuteChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        let value = parseInt(event.target.value);
        console.log('handleMinuteChange',value)
        value = Math.min(value, 720);
        setMinutes(value);
      }, [minutes]);

      const handleSecondChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        let value = parseInt(event.target.value);
        console.log('handleSecondChange',value)
        value = Math.min(value, 59); 
        setSeconds(value);
      }, [seconds]);
   
     

    return (
        <div>
            <p>Start time: {minutes}, {seconds}</p>
            <ContainerItems>
             
                <Input
                    value={minutes}
                    size="small"
                    onChange={handleMinuteChange}                          
                    inputProps={{                 
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
                    step: 1,
                    min: 0,
                    max: 59,
                    type: 'number',
                    'aria-labelledby': 'input-slider',
                }}
                /><span>sec</span>
                <Slider
                    value={minutes*60+seconds}
                    valueLabelDisplay="on"
                    onChange={handleSliderChange }
                    step={15}          
                    min={0}
                    max={3600}
                    color="secondary"
                    marks={marks}
                />
        
            </ContainerItems>
        </div>
    )

}
export default React.memo(TimeInput)