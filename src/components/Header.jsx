import React from 'react'
import logoWild from './assets/logoWild.png'

import 'Header.css'
function Header() {
    return (
        <div className="Header">
            <img src={logoWild} />
            <p className="pageTitle">Les Argonautes</p>
        </div>
    )
}

export default Header
