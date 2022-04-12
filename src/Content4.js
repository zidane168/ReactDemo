// ----------------------------------------------------------------------------------------------------------------
// useEffect

// useEffect(callback, [dependencies])      // ung dung call API
// (Call back luon dc goi sau khi component mounted)
// (clean up function truoc khi component unmounted)
// - CHI GOI KHI dependencies co su thay doi        // dung toan tu === so sanh 
// - add button scroll, add function scroll (NOT CALLBACK) - scrollToTop


import React, { useState, useEffect } from 'react'

function Content4() {   // Component viet chu cai dau tien IN HOA

    const tabs = ['posts', 'comments', 'albums'];
  
    const [ posts, setPosts ]   = useState([]); 
    const [ type, setType ]     = useState('posts')
    const [ showButtonScroll, setShowButtonScroll ] = useState(false);
    const [ width, setWidth ] = useState(window.innerWidth);

    useEffect(() => {
        console.log('2. Mounted')

        fetch(`https://jsonplaceholder.typicode.com/${type}`) // comments, albums
            .then(res => res.json())
            .then(posts => {
                setPosts(posts)
            })
    }, [ type ])

     // scroll event
    useEffect(() => {

        const handleScroll = () => {
            if (window.scrollY > 200) {
                setShowButtonScroll(true)   // state ko doi se ko render lai 
            } else {
                setShowButtonScroll(false)
            }

            // setShowButtonScroll(window.scrollY > 200)
        }

        window.addEventListener('scroll', handleScroll)
        console.log('Mounted')

        return () => {  // clean up
            window.removeEventListener('scroll', handleScroll)
            console.log('Unmounted')
        }
    }, [])

    // scroll to Top event
    const scrollToTop = () => {
        console.log('scrollToTop')
        window.scrollTo({
            top: 0,
            behavior: 'smooth'

        })
    }

    // resize event
    useEffect(() => {

        const handleResize = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)

        return () => {      // clean up
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    
    return (
        <React.Fragment>
            <div> This is Content component </div>
            { console.log('1. Render ') }

            <div style={ 
                { 
                    color: 'blue',
                    fontWeight: 'bold'
                } 
            }> Current Width: { width } </div>

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

            {
                showButtonScroll && (
                    <button
                        onClick = { scrollToTop }
                        style = { 
                            {
                                position: 'fixed',
                                right: 20,
                                bottom: 20
                            }
                        }
                    >
                        Scroll to Top
                    </button>
                )
            }
           
        </React.Fragment>
    )
}

export default Content4;