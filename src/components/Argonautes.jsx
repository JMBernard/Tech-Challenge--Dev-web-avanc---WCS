import React from 'react'

import "./Argonautes.css"

function Argonautes( {argonaute} ) {
    return (
        <div className="Argonautes">
            <h1>Membres de l'équipage</h1>
            <p>{argonaute.name}</p>
        </div>
    )
}

export default Argonautes
