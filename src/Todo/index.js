import { useReducer } from "react";
import reducer, { initState }  from "./reducer";
import { addJob, deleteJob, setJob } from './constants'
import { styles } from './todo.css'

import logger from './logger.js'

// co tham so thi: dung cai nay => () => handleDelete(index)
// ko tham so thi: dung => handleDelete()

function Todo() {

    //const [ state, dispatch ] = useReducer(reducer, initState);
    const [ state, dispatch ] = useReducer(logger(reducer), initState);

    // tu duy, logger bao quanh reducer, thi function logger phai tra ve cai reducer

    const { job, jobs } = state 

    const handleSubmit = () => {
        dispatch(addJob(job))
    }

    const handleDelete = (index) => {
        console.log('index: ', index)
        dispatch(deleteJob(index))
    }

    const handleClick = () => {
        console.log('handle click: ')
    }

    return (
        <>
            <h1> Paragon asia List Task </h1>
            <input 
                value={ job }
                onChange={ (e) => dispatch(setJob(e.target.value)) }
                className="input"
                
            />

            <button onClick={ handleSubmit }> 
                Add
            </button>

            <ul>
            {
                jobs.map ( (job, index) => (
                    <li className="job_panel" key={ index }>
                        <span className="job_title"> { job } </span>
                        <span className="job_close" onClick={ handleClick } > &times; </span>
                        <button onClick={ () => handleDelete(index) }  > DELETE </button>    
                    </li>
                ) )
            }
            </ul>
        </>
    );
}

export default Todo;