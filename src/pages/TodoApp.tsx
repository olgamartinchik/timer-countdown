import React from "react"
import { Title } from "../assets/styles/app.styles"
import { TodoWrapper } from "../assets/styles/todo.styles"
import CountTasks from "../components/todo/CountTasks"
import NewTask from "../components/todo/NewTask"
import SortingBlock from "../components/todo/SortingBlock"
import Todo from "../components/todo/Todo"

const TodoApp = () => {
 return (
    <>

        <Title>TODO List</Title>
        <TodoWrapper>
             <NewTask></NewTask>
             <SortingBlock></SortingBlock>
             <CountTasks></CountTasks>
             <Todo></Todo>
            
        </TodoWrapper>
       
    </>
 )
}

export default React.memo(TodoApp)