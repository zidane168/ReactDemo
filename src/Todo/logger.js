function logger(reducer) {
    return (prevState, action) => {
        console.group(action.type)

        console.warn("Prev State:", prevState)
        console.warn("Action:", action)
        const newState = reducer(prevState, action)
        console.warn("New State:", newState)
        
        console.groupEnd();

        return newState;    // tra ve reducer (thuc ra tra ve newState)
    }
}

export default logger