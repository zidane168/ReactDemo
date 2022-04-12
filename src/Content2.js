// ----------------------------------------------------------------------------------------------------------------
// useEffect

// useEffect(callback, [])      // call API
// (Call back luon dc goi sau khi component mounted)
// (clean up function truoc khi component unmounted)
// - CHI GOI 1 lan duy nhat sau khi component MOUNTED


import React, { useState, useEffect } from 'react'

function Content2() {   // Component viet chu cai dau tien IN HOA

    const [ posts, setPosts ] = useState([]); 

    useEffect(() => {
        console.log('2. Mounted')

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(posts => {
                setPosts(posts)
            })
    }, [])
    
    return (
        <React.Fragment>
            <div> This is Content component </div>
            { console.log('1. Render ')}

            <ul>
                {
                    posts.map( (post) => (
                        <li key = { post.id }> { post.title } </li>
                    )) 
                }

            </ul>
        </React.Fragment>
    )
}

export default Content2;