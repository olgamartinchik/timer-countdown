import { Button, TextField } from "@mui/material"
import React, { useCallback, useContext, useState } from "react"
import { FlexContainer, Form } from "../../assets/styles/todo.styles"
import { ADD } from "../../constants/actions.constants"
import { OUTLINED, SECONDARY } from "../../constants/styles.constants"
import { Context } from "../../context/context"



const NewTask = () => {
    const [inputValue, setInputValue] = useState("")
    const {dispatch} = useContext(Context)


    const handleChange =  useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue((e.target as HTMLInputElement).value)
        
    }, [])
   
   
    const handleSubmit = useCallback((e: any) => {
        e.preventDefault();
      
        dispatch({
            type: ADD,
            payload: inputValue.trim()
        })
        setInputValue('');
       
        (document.activeElement as HTMLInputElement).blur()

    }, [inputValue, dispatch])

    return (
        <Form onSubmit={handleSubmit}>
            <FlexContainer>       
                <TextField 
                id="outlined-basic" 
                label="New todo..." 
                variant={OUTLINED} 
                color={SECONDARY} 
                size="small" 
                sx={{ width: '100%' }} 
                value = {inputValue} 
                onChange={handleChange}              
                />
           
                <Button 
                variant={OUTLINED} 
                color={SECONDARY} 
                type='submit'               
                >Add</Button>
            </FlexContainer>
        </Form>
    )

}
export default NewTask