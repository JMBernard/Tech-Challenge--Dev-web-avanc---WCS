import React, { useState, useEffect} from 'react';
import Argonautes from './Argonautes';
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
            {argonautes
            .map ((argonaute) =>
            <div key={argonaute.id}>
                <Argonautes argonaute={argonaute}/>
            </div>
            )}
        </div>
    )
}

export default ArgonautesList
