import  {createContext} from 'react'
interface IContext {
    
    setSortingTodos: (sortTodosBy: boolean|null) => void
    dispatch: React.Dispatch<{
        type: string;
        payload: string;
        data?: string | undefined;
    }>
}
export const Context = createContext<IContext>({

    setSortingTodos: () => {},
    dispatch: () => {}
})

