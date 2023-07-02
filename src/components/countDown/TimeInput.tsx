import React from 'react';
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
type PropType = {
  minutes: number
  seconds: number
  time: number
  isPlay: boolean
  handleMinuteChange: (event: React.ChangeEvent<HTMLInputElement>)=> void
  handleSecondChange: (event: React.ChangeEvent<HTMLInputElement>)=> void
  handleSliderChange: (event: Event, newValue: number | number[]) => void
}


const TimeInput: React.FunctionComponent<PropType>  = ({minutes, seconds, time, isPlay, handleMinuteChange, handleSecondChange, handleSliderChange}) => {
    
      

    return (
        <div>
            
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

export default React.memo(TimeInput)