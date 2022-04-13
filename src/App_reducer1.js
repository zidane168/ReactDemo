import { useReducer } from 'react'
import './App.css'

// useReducer

// 1. init state
// 2. Actions: Up (+1) / Down (-1)
// 3. Reducer
// 4. Dispatch

// ------------------------------

// 1. initState
const initState = 0

// 2. Actions 
const UP_ACTION = 'up'
const DOWN_ACTION = 'down'

// 3. Reducer
const reducer = (state, action) => {

    console.group();
    console.log ('prevState: ', state);
    
    let newState = 0;
    switch (action) {
        case UP_ACTION:
          newState = state + 1
          break;

        case DOWN_ACTION:
          newState = state - 1
          break;

        default: 
          throw new Error('Invalid action')
    }
    console.log ('newState: ', newState);
    console.groupEnd();
    return newState;
}

function App() {

    const [ count, dispatch ] = useReducer(reducer, initState)
    return (
        <div className="App" style={ { padding: '20px' } }>
            <h1> { count } </h1>
            <button
                onClick={ () => dispatch(DOWN_ACTION) }
            > DOWN </button>
            
            <button
                onClick={ () => dispatch(UP_ACTION) }
            > UP </button>
        </div>
    );
}
export default App;

