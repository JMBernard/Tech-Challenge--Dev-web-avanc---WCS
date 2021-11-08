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
            <div className="argonautesList_content">
                <h2 className="argonautesList_title">Membres de l'équipe</h2>
                <div>
                   <p className="blabla">{argonautes.name}</p>
                </div>
            </div>
        </div>
    )
}

export default ArgonautesList
