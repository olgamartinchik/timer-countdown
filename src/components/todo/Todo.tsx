
import React, { useCallback, useContext, useState } from "react"
import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material"
import { OUTLINED, SECONDARY } from "../../constants/styles.constants"
import { FlexContainer, TodoContainer } from "../../assets/styles/todo.styles"
import { Context } from "../../context/context"
import { DELETE, EDIT, TOGGLE } from "../../constants/actions.constants"
// import { ITodo } from "../../models/todo.model"

type TodoProp = {
    id?: string 
    title: string
    completed: boolean
  
}

const Todo: React.FunctionComponent<TodoProp> = ({id, title, completed}) => {

    const [isEdit, setIsEdit] = useState(false)
    const [inputValue, setInputValue] = useState(title)

    const { dispatch } = useContext(Context)

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        
        setInputValue((e.target as HTMLInputElement).value)
       
    }, [])

    const handleButtonDeleteOrSave = useCallback(() => {
        // console.log('handleButton todo', isEdit, id)
        if(!isEdit){
            // deleteTask(id!)
            dispatch({
                type: DELETE,
                payload: id!
            })
        }else{
            // editTask(id!, inputValue)
            dispatch({
                type: EDIT,
                payload: id!,
                data: inputValue.trim()
            })
            setIsEdit(!isEdit)
        }
    }, [isEdit, id, inputValue, dispatch])

    // const handleToggleTask = useCallback(() => {
    //     console.log('handleToggleTask')
    //     // toggleTask(id!)
    //     dispatch({
    //         type: TOGGLE,
    //         payload: id!
    //     })
    // }, [id, dispatch])

    const handleButtonEditOrCancel = useCallback(() => {
        setIsEdit(!isEdit)
        if(!isEdit){
            setInputValue(title)
        }
    }, [isEdit, title])

    return (
        <TodoContainer>
           {isEdit ? 
            <TextField 
            id="outlined-basic" 
            color={SECONDARY}  
            variant={OUTLINED}            
            value={inputValue}
            size="small" 
            sx={{ width: '50%' }}
            onChange={handleChange}
            />
            :
            <FormControlLabel 
            control={<Checkbox color={SECONDARY} 
            checked = {completed}
            // onClick={handleToggleTask} 
            onClick={()=> dispatch({
                type: TOGGLE,
                payload: id!
            })}
            />} 
            label={title} 
            />
            }
         
            
            <FlexContainer>
                <Button 
                variant={OUTLINED} 
                color={SECONDARY} 
                onClick={handleButtonEditOrCancel}
                >
                    {isEdit ? 'Cancel' : 'Edit'}
                </Button> 
                <Button 
                variant={OUTLINED} 
                color={SECONDARY}
                onClick={handleButtonDeleteOrSave}
                >
                    {isEdit ? 'Save' : 'Delete'}
                </Button>
            </FlexContainer>
            
        </TodoContainer>
    )
}
export default React.memo(Todo)


