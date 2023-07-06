import React from 'react'
import './style.modules.css'
function ServerError() {
    return (
        <div className='body'><h1 className='h1'><a className='a' href="#">500</a></h1>
            <p className='p'>Server Error
            </p>
            <div className="travolta server"></div>
        </div>
    )
}

export default ServerError