// ----------------------------------------------------------------------------------------------------------------
// useEffect

// fake comment
import React, { useState, useEffect } from 'react'

function Content7() {   // Component viet chu cai dau tien IN HOA

    const [ lessonId, setLessonId ] = useState(1) 

    useEffect(() => {

        const handleComment = (e) => {
            console.log(e.detail);
        }
        window.addEventListener(`lesson-${lessonId}`, handleComment)

        // clean up
        return () => {
            window.removeEventListener(`lesson-${lessonId}`, handleComment);
            console.log('removeEventListener')
        }

    }, [ lessonId ] )

    const lists = [
        {id: 1, name: 'Learn PHP'},
        {id: 2, name: 'Learn Javascript'},
        {id: 3, name: 'Learn CSS'}
    ];


    return (
        <React.Fragment>
            <div> This is Content component </div>

            <ul>
                {
                    lists.map((list) => (
                        <li 
                            onClick = { () => setLessonId(list.id) }

                            // cach 1
                            // style = { 
                            //     lessonId == list.id ? {  color: 'blue', fontWeight: 'bold' } : {} 
                            // }

                            // cach 2
                            style = { {
                                color: lessonId == list.id ? 'blue' : '',
                                fontWeight: lessonId == list.id ? 'bold' : ''
                            } }
                            key = { list.id }
                        > 
                            { list.name } 
                        </li> 
                    ))
                }

            </ul>


        </React.Fragment>
    )
}

export default Content7;