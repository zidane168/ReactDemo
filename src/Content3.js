// ----------------------------------------------------------------------------------------------------------------
// useEffect

// useEffect(callback, [dependencies])      // ung dung call API
// (Call back luon dc goi sau khi component mounted)
// (clean up function truoc khi component unmounted)
// - CHI GOI KHI dependencies co su thay doi        // dung toan tu === so sanh 

import React, { useState, useEffect } from 'react'

function Content3() {   // Component viet chu cai dau tien IN HOA

    const tabs = ['posts', 'comments', 'albums'];
  
    const [ posts, setPosts ]   = useState([]); 
    const [ type, setType ]     = useState('posts')

    useEffect(() => {
        console.log('2. Mounted')

        fetch(`https://jsonplaceholder.typicode.com/${type}`) // comments, albums
            .then(res => res.json())
            .then(posts => {
                setPosts(posts)
            })
    }, [ type ])
    
    return (
        <React.Fragment>
            <div> This is Content component </div>
            { console.log('1. Render ') }

            {
                tabs.map( (tab, index) => (
                    <button
                        key = { index }
                        style = { type === tab ? {      // lay setType so sanh voi current tab name
                            color: 'white',
                            backgroundColor: 'blue'
                        } : {}} 
                        onClick = { () => setType(tab) }
                    >
                        { tab }
                    </button>
                ))
            }

            <ul>
                {
                    posts.map( (post) => (
                        <li key = { post.id }> { post.title || post.name } </li> // ko co title lay name, vi comment api ko co title
                    )) 
                }

            </ul>
        </React.Fragment>
    )
}

export default Content3;