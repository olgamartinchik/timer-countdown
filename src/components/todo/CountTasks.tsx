import React from "react"
import { Subtitle } from "../../assets/styles/todo.styles"


const CountTasks = () => {
    return (
        <Subtitle>
            <span>2</span> tasks remaining
        </Subtitle>
    )
}
export default React.memo(CountTasks)