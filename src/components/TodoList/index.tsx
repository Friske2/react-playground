import TodoForm from './TodoForm'
import TodoItem from './TodoItem'
import useTodoList from './hooks/useTodoList'
function TodoList() {
    const { addTodo,editTodo,deleteTodo,todos } = useTodoList()
    return (
        <div>
            <div style={{
                margin: "10px 0",
            }}>
                TodoList
            </div>
            <TodoForm addTodo={addTodo} />
            <div>
                <ul>
                    {
                        (!todos || todos?.length === 0) ? <li>No Todo</li> :
                        todos?.map(todo => (
                            <TodoItem item={todo} editTodo={editTodo} deleteTodo={deleteTodo} />
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default TodoList