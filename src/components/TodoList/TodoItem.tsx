import {  useState } from 'react'
import { Todo } from './type'
import useInputText from './hooks/useInputText'
type TodoItem = {
    item: Todo,
    editTodo: (todo: Todo) => void,
    deleteTodo: (id: number) => void
}

function TodoItem({item, editTodo, deleteTodo}: TodoItem) {
    const { inputRef,getValue,isValid } = useInputText()
    const [isEdit, setIsEdit] = useState(false)
    const handleEditTodo = () => {  
        const text = getValue()
        if(isValid(text)) {
            editTodo({
                id: item.id,
                text
            })
        }
    }
    const handleDeleteTodo = () => {
        deleteTodo(item.id)
    }  
    return (
        <li key={item.id}>
            <input disabled={!isEdit} ref={inputRef} type="text" defaultValue={item.text} />
            {
                isEdit ? <button onClick={()=> {
                    setIsEdit(false)
                }}>Save</button> : <button onClick={()=> {
                    setIsEdit(true)
                    handleEditTodo()
                }}>edit</button>
            }
            <button
             onClick={()=> {
                handleDeleteTodo()
             }}
            >delete</button>
        </li>
    )
}

export default TodoItem