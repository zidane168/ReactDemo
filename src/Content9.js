import { memo } from 'react'

function Content9( { count } ) {
    console.log('Rerender content9');
    return (
        <>
            <h2> This is Content 9 Component ({ count }) </h2>
        </>
    )
}

export default memo(Content9);  
// khi 1 component co su dung nhieu props, anh huong render performance thi gan memo vao