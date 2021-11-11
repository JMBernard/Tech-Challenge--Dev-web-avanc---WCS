import React, { useState, useEffect} from 'react';
import axios from 'axios';
import './ArgonautesList.css'

function ArgonautesList() {
    const [argonautes, setArgonautes] = useState([]);
    useEffect(() => {
        axios  
        .get("http://localhost:8000/api/argonautes")
        .then((res) => res.data)
        .then((data) => setArgonautes(data))
    })

    return (
        <div className="ArgonautesList">
            <div className="list_title">
                <h2 >Membres de l'équipage</h2>
            </div>
            <div className="column_argonautes">
                {argonautes
                .map ((argonaute) =>
                <div className="names" key={argonaute.id}>
                    <div className="name">{argonaute.name} {argonaute.qualities}</div>
                </div>
                )}
            </div>
        </div>
    )
}

export default ArgonautesList
