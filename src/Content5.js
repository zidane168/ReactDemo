// ----------------------------------------------------------------------------------------------------------------
// useEffect

// useEffect(callback, [dependencies])      // ung dung call API
// (Call back luon dc goi sau khi component mounted)
// (clean up function truoc khi component unmounted)
// - CHI GOI KHI dependencies co su thay doi        // dung toan tu === so sanh 
// setInterval: call every x second
// setTimeout: call after x second

import React, { useState, useEffect } from 'react'

function Content5() {   // Component viet chu cai dau tien IN HOA

    const [ countdown, setCountdown ] = useState(280);     

    // useEffect(() => {
    //     setInterval(() => {
    //         setCountdown(countdown - 1)     // closure, bien countdown trong pham vi ko tham chieu ra ngoai nen luon luon la 279 
    //         console.log(countdown)
    //     }, 1000)
    // }, [])

    // fix => setInterval (call every x second)
    // useEffect(() => {
    //     const TimeId = setInterval(() => {
    //         setCountdown(prevState => prevState - 1)  
           
    //     }, 1000)

    //     return () => {
    //         clearInterval(TimeId);
    //     }

    // }, [])

    // fix => setTimeout (call after x second)
    useEffect(() => {
        const TimeId = setTimeout(() => {
            setCountdown(prevState => prevState - 1)
        }, 1000)

        return (() => {
            clearTimeout(TimeId)
        })
    }, [ countdown ])

    
    return (
        <React.Fragment>
            <div> This is Content component </div>
            { console.log('1. Render ') }

            <h1> { countdown } </h1> 

        </React.Fragment>
    )
}

export default Content5;