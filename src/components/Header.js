import React from 'react'
import circle from './circle.png';
import './Header.css'

function Header() {
    return (
        <div>
            <h1>Employee Directory</h1>
            <img src={circle} className="directory-logo" alt="logo" />
        </div>
    )
}

export default Header