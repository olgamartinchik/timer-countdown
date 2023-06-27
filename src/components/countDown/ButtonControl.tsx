import React from "react"
import { Button } from "@mui/material"
import { ContainerItems } from "../../assets/styles/app.styles"
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

type ButtonControlProp = {
    isPlay: boolean,
    toggleTimer: () => void,
    resetTimer: () => void,
}
const ButtonControl: React.FunctionComponent<ButtonControlProp> = ({toggleTimer, resetTimer, isPlay}) => {
    return (
        <ContainerItems>
            <Button variant="contained" color="secondary" onClick={toggleTimer}>{!isPlay?<PlayArrowIcon/>:<PauseIcon/>}</Button>
            <Button variant="contained" color="secondary" onClick={resetTimer}>Reset</Button>            
        </ContainerItems>
    )

}
export default React.memo(ButtonControl)