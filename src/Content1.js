
// ----------------------------------------------------------------------------------------------------------------
// useEffect

// useEffect(callback)
// (Call back luon dc goi sau khi component mounted)
// (clean up function truoc khi component unmounted)
// - Goi callback moi khi component re-render
// - Goi callback sau khi component them element vao DOM

import React, { useState, useEffect } from 'react'

function Content1() {       // Component viet chu cai dau tien IN HOA

    const [ title, setTitle ] = useState(''); 

    useEffect(() => {
        console.log('2. Mounted')
        document.title = title;
    })
    
    return (
        <React.Fragment>
            <div> This is Content component </div>
            <input 
                value = { title }
                onChange = { (e) => setTitle(e.target.value) } 
            />

            { console.log('1. Render ')}
        </React.Fragment>
    )
}

export default Content1;