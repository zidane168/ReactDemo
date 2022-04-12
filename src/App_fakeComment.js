import { useState } from 'react'
import Content7 from './Content7.js';               // useEffect(callback, [])      => (customerEvent, Emit)

function App() {

    // use Customer Event
    const emitComment = (id) => {

        setInterval(() => {
            window.dispatchEvent(
                new CustomEvent(`lesson-${id}`, {
                    detail: `This is content of comment ${id}`
                })
            );
        }, 2000)
    }

    // have 3 lesson (Content 7)
    emitComment(1);
    emitComment(2);
    emitComment(3);

    const [ show, setShow ] = useState(false); 

    return (
        <div className="App" style={ { padding: '20px' } }>
            <button 
                onClick = { () => setShow(!show) }    
            > 
                Toggle 
            </button>
            
            { show && <Content7/> }

        </div>
    );
}
export default App;

