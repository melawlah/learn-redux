const counterReducer = (state = 0, action) => {
    switch(action.type) {
        default:
            return state;
        case 'INCREMENT':
            return state + action.payload
        case 'DECREMENT':
            return state - 1
    }
}
export default counterReducer;