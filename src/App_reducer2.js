import { useReducer, useRef } from 'react'
import './App.css'

// useReducer

// 1. init state
// 2. Actions: Up (+1) / Down (-1)
// 3. Reducer
// 4. Dispatch

// ------------------------------

// 1. initState
const initState = {
    job: '',        // value of input
    jobs: []        // list jobs display
}

// 2. Actions 
const SET_JOB        = 'set_JOB'
const ADD_JOB        = 'add_JOB'
const DELETE_JOB     = 'delete_JOB'

// convert action => action, value (payload) and send to Reducer handling
const setJob = (payload) => {
    return {
        type: SET_JOB,
        payload
    }
}

const addJob = (payload) => {
    return {
        type: ADD_JOB,
        payload
    }
}

const deleteJob = (payload) => {
    return {
        type: DELETE_JOB,
        payload
    }
}

// --- test payload
console.log(setJob('Clean up'))
// --- test

// 3. Reducer
const reducer = ((state, action) => {

    let newState = ""

    console.group();
    console.log('Action', action);
    console.log('Prev State', state);

    switch (action.type) {  
        case SET_JOB:
            newState = {
                ...state,
                job: action.payload     // chep de job
            }
            break;

        case ADD_JOB:
            newState = {
                ...state,
                jobs: [...state.jobs, action.payload]   // chep de jobs
            }
            break;

        case DELETE_JOB: 

            const newJobs = [...state.jobs]
            newJobs.splice(action.payload, 1);
            console.log('vi tri bat dau: ', action.payload)

            newState = {
                ...state,
                jobs: [...newJobs]
            }
            break;

        default:
            throw new Error('Invalid action')
    }

    console.log('New State', newState);
    console.groupEnd();

    return newState;
})


function App() {

    const [ state, dispatch ] = useReducer(reducer, initState)

    const { job, jobs } = state // destructuring

    const nameRef = useRef()

    const handleSubmit = () => {
        dispatch(addJob(job))
        dispatch(setJob(''))
        nameRef.current.focus()
    }

    const handleDelete = (index) => {
        console.log(`delete: ${index}`)
        dispatch(deleteJob(index))
    }

    console.log('jobs: ', jobs)

    return (
        <div className="App" style={ { padding: '20px' } }>
            <h1> CityU's Task </h1>
            <input 
                ref = { nameRef }
                value = { job }
                onChange = { 
                    (e) => { 
                        dispatch(setJob(e.target.value)) // e truyen trong function onChange
                    } 
                }
                placeholder='Enter todo ...'
            />

            <button
                onClick = { handleSubmit }
            > Add </button>

            <ul>
            {
                jobs.map( (job, index) => (
                    <li  key = { index }  > 
                        { job } 
                        
                        <span  
                            onClick = { handleDelete(index) } // index truyen tu key xuong
                        > 
                            &times; 
                        </span>
                    </li> 
                ) )
            }
            </ul>
        </div>
    );
}
export default App;

