import Todo from './Todo'

// ---- useReducer ----
// 1. init state
// 2. Actions: Up (+1) / Down (-1)
// 3. Reducer
// 4. Dispatch
// ---- useReducer ----

function App() {

    return (
        <div className="App" style={ { padding: '20px' } }>
           <Todo />
        </div>
    );
}
export default App;

