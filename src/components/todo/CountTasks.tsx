import React from "react"
import { Subtitle } from "../../assets/styles/todo.styles"

type CountTasksProps = {
    count: number
}
const CountTasks: React.FunctionComponent<CountTasksProps> = ({count}) => {
    return (
        <Subtitle>
            <span>{count}</span> task{count <= 1 ? '' : 's'} remaining
        </Subtitle>
    )
}
export default React.memo(CountTasks)