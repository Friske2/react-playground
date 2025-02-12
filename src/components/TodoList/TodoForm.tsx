import useInputText from "./hooks/useInputText"
type TodoForm = {
    addTodo: (text: string) => void
}
function TodoForm(prop: TodoForm) {
    const { inputRef,getValue,isValid,clearInput } = useInputText()
    
    const  handleAddTodo = () => {
        const text = getValue()
        if(isValid(text)) {
            prop.addTodo(text)
            clearInput()
        }
    } 

    return (
        <div>
            text : <input ref={inputRef} type="text" />
            <button onClick={()=> {
                handleAddTodo()
            }}>Add</button>
        </div>
    )
}

export default TodoForm