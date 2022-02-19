import { useState } from "react"
import { connect } from "react-redux"
import { AddTodoAction, RemoveTodoAction } from "../../redux/actions/todo-action"
const Todo = (props) => {
    const [todo, setTodo] = useState("")
    return (
        <div >
            <input type="text" onChange={(e) => { setTodo(e.target.value) }} /><br />
            <button onClick={() => props.AddTodoAction(todo)}>ADD</button>
            <button onClick={() => props.RemoveTodoAction(todo)}>REMOVE</button>
            <div className="base_redux">
                {
                    props.todos.map((res, i) =>
                        <div className="div_redux">
                            <h1>Id:{i}</h1>
                            <h1>Name:{res.name}</h1>
                            <h1>Is completed:{String(res.isCompleted)}</h1>
                        </div>
                    )
                }
            </div>

        </div>
    )
}
export default connect((state) => ({ todos: state.todos }), { AddTodoAction, RemoveTodoAction })(Todo)