// ----------------------------------------------------------------------------------------------------------------
// useEffect vs useLayoutEffect

// useEffect (hieu ung lag vi update Ui roi change state lai up UI)
// 1. update state
// 2. update DOM (mutated)
// 3. ```RENDER LAI UI```
// 4. call clean up neu deps change
// 5. call useEffect callback

// useLayoutEffect
// 1. update state
// 2. update DOM (mutated)
// 3. call clean up neu deps change (sync)
// 4. call useLayoutEffect callback (sync)
// 5. ```RENDER LAI UI```


import React, { useState, useEffect, useLayoutEffect } from 'react'

// function Content8() {   

//     const [ number, setNumber ] = useState(0);

//     useEffect(() => {

//         if (number > 3) {
//             setNumber(0)
//         }
            
//     }, [ number ] )

//     const handleRun = () => {
//         setNumber(number + 1)
//         console.log('run')
//     }

//     return (
//         <React.Fragment>
//             <div> This is Content component </div>

//             <h1> { number }  </h1> 
//             <button
//                 onClick={ handleRun }
//             > 
//                 RUN 
//             </button> 

//         </React.Fragment>
//     )
// }


function Content8() {   

    const [ number, setNumber ] = useState(0);

    useLayoutEffect(() => {

        if (number > 3) {
            setNumber(0)        // useLayoutEffect hy huu lam, chi co khi setNumber 2 cho tai 1 componet moi xay ra (UU TiEN DUNG useEffect)
        }
            
        // clean up

        return() => {
            // removeEventListener();
        }
    }, [ number ] )

    const handleRun = () => {
        setNumber(number + 1)
        console.log('run')
    }

    return (
        <>
            <div> This is Content component </div>

            <h1> { number }  </h1> 
            <button
                onClick={ handleRun }
            > 
                RUN 
            </button> 
        </>
    )
}

export default Content8;