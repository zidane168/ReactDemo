import { useState } from 'react'
import Content9 from './Content9.js'

function App() {

  const [ count, setCount ] = useState(0)

  return (
    <div className="App">
      <h1> { count } </h1>
      <button 
        onClick = { () => setCount(count + 1) }
      > 
        Click
      </button>

      <Content9  />

    </div>
  );
}

export default App;
