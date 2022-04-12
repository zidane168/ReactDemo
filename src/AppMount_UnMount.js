import { useState } from 'react'
import Content from './Content.js'

// ----------------------------------------------------------------------------------------------------------------
// Mount/unMount
function App() {

    const [ show, setShow ] = useState(false); 

    return (
        <div className="App" style={ { padding: '20px' } }>
            <button 
                onClick = { () => setShow(!show) }    
            > 
                Toggle 
            </button>
            { show && <Content/> }
        </div>
    );
}
export default App;

