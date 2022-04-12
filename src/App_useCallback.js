import { useCallback, useState } from 'react'
import Content10 from './Content10.js'

function App() {

  const [ count, setCount ] = useState(0)

//   const onIncrease = () => {
//     setCount(count + 1)
//   }

    const onIncrease = useCallback(() => {  // co function useCallback thi ko bi render lai nua
        setCount(prevCount => prevCount + 1)
    }, [] )

  return (
    <div className="App">
      <h1> { count } </h1>

      <Content10 
        onIncrease = { onIncrease }
      />

    </div>
  );
}

export default App;
