export const AddTodoAction = (text) => (dispatch) => {
    const AddTodo = { name: text, isCompleted: true }
    dispatch({ type: "ADD_TODO", payload: AddTodo })
}

export const RemoveTodoAction = (text) => (dispatch) => {
    dispatch({ type: "REMOVE_TODO", payload: text })
}
