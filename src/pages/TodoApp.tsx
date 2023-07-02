import React, { useEffect, useState, useMemo, useReducer } from "react"
import { Title } from "../assets/styles/app.styles"
import { TodoWrapper } from "../assets/styles/todo.styles"
import CountTasks from "../components/todo/CountTasks"
import NewTask from "../components/todo/NewTask"
import SortingBlock from "../components/todo/SortingBlock"
import TodoList from "../components/todo/TodoList"
import { defaultTodos } from "../data/mock.todo"

import { Context } from "../context/context"
import reducer   from '../store/reducer'



const TodoApp = () => {

   const [todos, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem('todos')!) || [...defaultTodos])

    const [sortBy, setSortBy]  = useState<boolean|null>(null)   
    // const [todos, setTodos] = useState< ITodo[] >(JSON.parse(localStorage.getItem('todos')!) || [...defaultTodos]) 

    useEffect(()=>{    
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])
  
 
    // const addTask = (newTask: string)=>{ 
    //     if(newTask.trim()){    //        
            // setTodos([...todos, {
            //     id: uuidv4(),
            //     title: newTask,
            //     completed: false
            // }])
    //     }
    // }
    // const deleteTask = (taskId: string) => {

        //  setTodos([...todos.filter(todo => todo.id !== taskId)])
    // }
    // const toggleTask = (taskId: string) => {

        // setTodos([...todos.map(todo=>{
        //     if(todo.id === taskId){
        //         todo.completed = !todo.completed
        //     }
        //     return todo
        // })])
    // }
    // const editTask = (taskId: string, newTitle: string) => {

        // setTodos([...todos.map(todo=>{
        //     if(todo.id === taskId){
        //         todo.title = newTitle
        //     }
        //     return todo
        // })])
    // }
   
   
    const setSortingTodos = (sortTodosBy: boolean|null) => {
       
        setSortBy(sortTodosBy)
    }

    const sortedTodos = useMemo(()=>{
        return [...todos].filter(todo => sortBy === null ? todo : todo.completed === sortBy)
        
    }, [todos, sortBy])
 
 return (
    <Context.Provider value={{        
        dispatch, 
        setSortingTodos
        }}>
    <>
        <Title>TODO List</Title>
        <TodoWrapper>
            <NewTask/>
            <SortingBlock/>
            <CountTasks 
            count={sortedTodos.length}
            />
            <TodoList          
            todos={sortedTodos}            
            />
        </TodoWrapper>
       
    </>
    </Context.Provider>
 )
}

export default React.memo(TodoApp)



