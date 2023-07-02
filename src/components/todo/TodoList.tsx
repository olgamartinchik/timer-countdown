import React from "react"
import { ITodo } from "../../models/todo.model"
import Todo from "./Todo"

type TodoListProps = {
    todos: ITodo[]
  
}


const TodoList: React.FunctionComponent<TodoListProps> = ({todos}) => {

    return (
        <>        
        {todos?.map(todo  => <Todo key={todo.id} {...todo}  />)}
         
        </>  
    )
}
export default React.memo(TodoList)