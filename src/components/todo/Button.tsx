import React from "react"

type ButtonProps = {
    text: string
} 

const Button: React.FunctionComponent<ButtonProps> = ({text}) => {
    return(
       
        <button>{text}</button>
       
    )
}
export default React.memo(Button)