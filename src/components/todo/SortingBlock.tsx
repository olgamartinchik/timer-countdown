
import React , {useContext, useState} from "react"
import { Button } from "@mui/material"
import { FlexContainer } from "../../assets/styles/todo.styles"
import { CONTAINED, OUTLINED, SECONDARY } from "../../constants/styles.constants"
import { Context } from "../../context/context"

enum TypeBtn {
    'AllTask',
    'ActiveTask',
    'CompletedTask'
}


const SortingBlock: React.FunctionComponent = () => {
    const {setSortingTodos} = useContext(Context)

    const [activeBtn, setActiveBtn] = useState(TypeBtn.AllTask)

    return (
        <FlexContainer>
            <Button 
            variant={activeBtn === TypeBtn.AllTask ? CONTAINED : OUTLINED} 
            color={SECONDARY}
            onClick={()=>{setActiveBtn(TypeBtn.AllTask); setSortingTodos(null)}}
            >Show All Tasks</Button>
            <Button 
            variant={activeBtn === TypeBtn.ActiveTask ? CONTAINED : OUTLINED} 
            color={SECONDARY}
            onClick={()=>{setActiveBtn(TypeBtn.ActiveTask); setSortingTodos(false)}}
            >Show Active Tasks</Button>

            <Button 
            variant={activeBtn === TypeBtn.CompletedTask ? CONTAINED : OUTLINED} 
            color={SECONDARY}
            onClick={()=>{setActiveBtn(TypeBtn.CompletedTask); setSortingTodos(true)}}
            >Show Completed Tasks</Button>
        </FlexContainer>
    )
}
export default React.memo(SortingBlock)


