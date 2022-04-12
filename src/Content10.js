import { memo } from 'react'

function Content9( { onIncrease } ) {
    console.log('Rerender content9');
    return (
        <>
            <h2> This is Content 9 Component </h2>
            <button 
                onClick = { onIncrease }
            >
                Increase
            </button>
        </>
    )
}

export default memo(Content9);  
// khi 1 component co su dung nhieu props, anh huong render performance thi gan memo vao