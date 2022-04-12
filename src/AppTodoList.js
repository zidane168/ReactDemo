import { useState } from 'react'

// ----------------------------------------------------------------------------------------------------------------
// Todo list storage into localstorage.setItem('jobs') / localstorage.jobs
function App() {

    const [ job, setJob ] = useState('');
    const [ jobs, setJobs ] = useState(
        () => {
            const storage = JSON.parse(localStorage.getItem('jobs'));       // convert string to array
            return storage ?? [];       // first time => if storage = null will use []
        }
    );

    const handleSubmit = () => {
        console.log(job);

        if (job) {
            setJobs( prev => {
                
                const newJobs = [ ...prev, job ];

                // add to list storage
                localStorage.setItem('jobs', JSON.stringify(newJobs));

                return newJobs;
            });
            setJob(''); // reset job input on input box
        }
       
    }
    console.log(job);

    return (
        <div className="App" style={ { padding: '20px' } }>
            <input 
                value = { job }
                onChange = { (e) => setJob(e.target.value) } 
            />
            <button onClick = { handleSubmit } > Add </button>

            <ul>
                { 
                    jobs.map( (job, index) => (
                        <li key = { index }>
                            { job }
                        </li>
                    ) )
                }
            </ul>
        </div>
    );
}
export default App;

