const Reducer = (state = [], action) => {
    const { type, payload } = action
    switch (type) {
        case "ADD_TODO":
            return [...state, payload]
        case "REMOVE_TODO":
            return state.filter(item => item.name != payload)
        default:
            return state;
    }
}
export default Reducer;