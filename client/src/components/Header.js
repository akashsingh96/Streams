import React from 'react'
import {Link} from 'react-router-dom'

import GoogleAuth from './GoogleAuth'

const Header=()=>{
    return(
        <div className='ui secondary pointing menu'>
            <div className='item'>
                <Link to='/' className='item'>Streamer</Link>
            </div>
            <div className='right menu'>
                <Link to='/' className='item'>All streams</Link>
                <GoogleAuth/>
            </div>
        </div>
    )
}

export default Header