import { useState } from 'react'
import Content8 from './Content8.js';               // useEffect vs useLayoutEffect

function App() {

    const [ show, setShow ] = useState(false); 

    return (
        <div className="App" style={ { padding: '20px' } }>
            <button 
                onClick = { () => setShow(!show) }    
            > 
                Toggle 
            </button>
            
            { show && <Content8/> }

        </div>
    );
}
export default App;

