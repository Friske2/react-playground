import { useReducer } from 'react'
import { Todo } from '../type'

enum TodoActionType {
    ADD_TODO = 'ADD_TODO',
    EDIT_TODO = 'EDIT_TODO',
    DELETE_TODO = 'DELETE_TODO'
}

function todoListReducer(state: Todo[], action: { type: string, payload: Todo | number | string }) {
    const { type, payload } = action
    const { ADD_TODO,EDIT_TODO,DELETE_TODO } = TodoActionType
    switch(type) {
        case ADD_TODO: 
            { 
                const text = payload as string
                const id = state.length + 1
                return [...state, { id, text }] 
            }
        case EDIT_TODO:
            return state.map(todo => {
                if(todo.id === (payload as Todo).id) {
                    return payload as Todo
                }
                return todo
            })
        case DELETE_TODO:
            return state.filter(todo => todo.id !== (payload as number))
        default:
            return state
    }

}   

function useTodoList() {
    const [state, dispatch] = useReducer(todoListReducer, [])
    const addTodo = ((text: string)=> {
        // add todo
        dispatch({ type: 'ADD_TODO', payload: text })
    })
    const editTodo = (({ text,id }: Todo)=> {
        // edit todo
        dispatch({ type: 'EDIT_TODO', payload: { text, id }})
    })
    const deleteTodo = ((id:number)=> {
        // delete todo
        dispatch({ type: 'DELETE_TODO', payload: id })
    })
    return {
        addTodo,
        editTodo,
        deleteTodo,
        todos: state
    }
}

export default useTodoList