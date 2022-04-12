import { useState } from 'react'
// import Content1 from './Content1.js'             // useEffect(callback)          => update DOM
// import Content2 from './Content2.js'             // useEffect(callback, [])      => call api
// import Content3 from './Content3.js'             // useEffect(callback, [deps])  => call api voi tham so
// import Content4 from './Content4.js';            // useEffect(callback, [])      => addEventListener / removeEventListener
// import Content5 from './Content5.js';            // useEffect(callback, [])      => setInterval / setTimeout
import Content6 from './Content6.js';               // useEffect(callback, [])      => clean up chay truoc va clean up lan truoc no (dung trong TH xoa anh ra khoi object khi chon anh hai tro di)

function App() {

    const [ show, setShow ] = useState(false); 

    return (
        <div className="App" style={ { padding: '20px' } }>
            <button 
                onClick = { () => setShow(!show) }    
            > 
                Toggle 
            </button>
            
            { show && <Content6/> }

        </div>
    );
}
export default App;

