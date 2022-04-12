// ----------------------------------------------------------------------------------------------------------------
// useEffect

// useEffect(callback, [dependencies])      // ung dung call API
// (Call back luon dc goi sau khi component mounted)
// (clean up function truoc khi component unmounted)
// (clean up function truoc khi callback dc goi tru truong hop - mounted) / clean up chay truoc va clean up lan truoc no
// - CHI GOI KHI dependencies co su thay doi        // dung toan tu === so sanh 
// setInterval: call every x second
// setTimeout: call after x second

// hien thi avatar khi chon anh bat ky
import React, { useState, useEffect } from 'react'

function Content6() {   // Component viet chu cai dau tien IN HOA

    const [ avatar, setAvatar ] = useState() 

    // su dung cleanup cua useEffect
    useEffect(() => {

        // clean up for avoid memory leak
        return () => {
           avatar && URL.revokeObjectURL(avatar.preview)
        }
    }, [ avatar ])

    const handlePreviewAvatar = (e) => {
        // console.log(URL.createObjectURL(e.target.files[0]));    // URL.createObjectURL de hien thi anh khi chon file: URL.createObjectURL(e.target.files[0]) 

        const file = e.target.files[0]  // lay anh dau tien

        // vi file la object ta co the gan them props: preview (tuy y)
        file.preview = URL.createObjectURL(file)
        setAvatar(file);
    }
    
    return (
        <React.Fragment>
            <div> This is Content component </div>
            { console.log('1. Render ') }

            <input 
                type = 'file'
                onChange = { handlePreviewAvatar }
            />

            {
                avatar && (
                    <img src={ avatar.preview } alt={ avatar.preview } width='80%'/>
                )
            }

        </React.Fragment>
    )
}

export default Content6;