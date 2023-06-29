import { Button, TextField } from "@mui/material"
import React from "react"
import { FlexContainer } from "../../assets/styles/todo.styles"
import { OUTLINED, SECONDARY } from "../../constants/styles.constants"
// import Button from "./Button"
// import TodoInput from "./TodoInput" 

const NewTask = () => {
    return (
        <FlexContainer>
            <TextField id="outlined-basic" label="New todo..." variant="outlined" color={SECONDARY} size="small" sx={{ width: '100%' }}/>
            <Button variant={OUTLINED} color={SECONDARY}>Add</Button>
        </FlexContainer>
    )

}
export default React.memo(NewTask)