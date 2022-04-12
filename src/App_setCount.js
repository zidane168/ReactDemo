import { useState, useRef, useEffect } from 'react'           // useEffect vs useLayoutEffect

function App() {

    const [ count, setCount ] = useState(60)

    const timerId = useRef();
    console.log(timerId);   // la 1 object
    const prevCount = useRef();

    useEffect(() => {
        prevCount.current = count
    }, [ count ])

    const handleStart = () => {
        timerId.current = setInterval(() => {
            setCount(prevState => prevState + 1)
        }, 1000);

        //console.log(timerId)
    }

    const handleStop = () => {
       clearInterval(timerId.current);
      // console.log(timerId)
    }

    // get current, prev start
    console.log(count, prevCount.current)

    return (
        <div className="App" style={ { padding: '20px' } }>
            <h1> useRef </h1>

            <h1> { count } </h1>
            <button onClick = { handleStart } > Start </button>
            <button onClick = { handleStop } > Stop </button>
        </div>
    );

    // giai thich
    // step 1 : useState = 60 -> count = 60,    (UI render lai vi state thay doi)
    // => console.log(count, prevCount.current) => 60, undefined
    // => render UI
    // => chay cleanup useEffect (ko co)
    // => chay call back useEffect -> prevCount.current = 60

    // step 2 :  useState = 61 -> count = 61,  (UI render lai vi state thay doi)
    // => console.log(count, prevCount.current) => 61, 60
    // => render UI 
    // => chay cleanup useEffect (ko co)
    // => chay call back useEffect -> prevCount.current = 61
}

export default App;

