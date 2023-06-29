
import React from "react"
import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material"
import { OUTLINED, SECONDARY } from "../../constants/styles.constants"
import { FlexContainer, TodoContainer } from "../../assets/styles/todo.styles"

const Todo = () => {
    return (
        <TodoContainer>
           
            {/* <FormControlLabel control={<Checkbox color={SECONDARY} />} label="todo" /> */}
            <TextField id="outlined-basic" color={SECONDARY}  variant={OUTLINED} defaultValue='todo' size="small" sx={{ width: '50%' }}/>
            <FlexContainer>
                <Button variant={OUTLINED} color={SECONDARY}>Edit</Button> 
                <Button variant={OUTLINED} color={SECONDARY}>Delete</Button>
            </FlexContainer>
            
        </TodoContainer>
    )
}
export default React.memo(Todo)