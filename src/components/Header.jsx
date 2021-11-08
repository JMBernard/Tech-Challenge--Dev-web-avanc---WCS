import React from 'react'
import logoWild from './assets/logoWild.png'

import './Header.css'
function Header() {
    return (
        <div className="Header">
            <div className="header_content">
                <img src={logoWild} alt="logoWild"/>
                <p className="pageTitle">Les Argonautes</p>
            </div>
        </div>
    )
}

export default Header
