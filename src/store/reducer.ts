import { ADD, DELETE, EDIT, TOGGLE } from "../constants/actions.constants"
import { ITodo } from "../models/todo.model"
import { v4 as uuidv4 } from 'uuid';

export default function reducer (state: ITodo[], action: { type: string, payload: string, data?: string }) {
    switch (action.type){
        case ADD:
            return [...state, {
                id: uuidv4(),
                title: action.payload,
                completed: false
            }]
        case TOGGLE:
            return state.map(todo => {
                if(todo.id === action.payload){
                    // console.log('reduser', todo.completed)
                   return {...todo, completed: !todo.completed} 
                
                }
                return todo
            })
        case EDIT:
            return   state.map(todo => {
                if(todo.id === action.payload){
                    todo.title = action.data!
                }
                return todo
            })
        case DELETE:
            return state.filter(todo => todo.id !== action.payload)
        default:
         return state
    }
}