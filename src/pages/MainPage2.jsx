import React, {useState, useEffect} from 'react';
import axios from 'axios';
import logoWild from '../components/assets/logoWild.png'
import './MainPage2.css'

function MainPage2() {
    const url = "http://localhost:8000/api/agronautes"
    const [argonautes, setArgonautes] = useState([]);

    useEffect(() => {
        axios  
        .get("http://localhost:8000/api/argonautes")
        .then((res) => res.data)
        .then((data) => setArgonautes(data))
    })

    const [ agronaute, setAgronaute ] = useState({
        name : "",
        qualities : ""
    })

    const addAgronautes = e => {
        axios.post(url, {
            name: agronaute.name,
            qualities: agronaute.qualities
        })
    }

    function handleInputChange (e) {
        const newAgronaute = {...agronaute}
        newAgronaute[e.target.id] = e.target.value 
        setAgronaute(newAgronaute)
    }

    return (
        <div className="MainPage2">
            <div className="Header">
                <div className="header_content">
                    <img src={logoWild} alt="logoWild"/>
                    <p className="pageTitle">Les Argonautes</p>
                </div>
            </div>
            <div className="PostInput">
                <div className="input_content">
                    <h2 className="input_title">Ajouter un(e) Argonaute</h2>
                    <label className="input_label">Nom de l'argonaute</label>
                    <form onSubmit={addAgronautes} className="input_field">
                        <input 
                            type="text" /*{...register("name")}*/
                            id="name"
                            placeholder="Charalampos"
                            onChange ={(e) => handleInputChange(e)}
                            value={agronaute.name}/>
                        <input type="submit" /*onSubmit={addAgronautes}*//>
                    </form>
                </div>
            </div>
            <div className="argonautes_list">
                {argonautes
                .map ((argonaute) =>
                <div key={argonaute.id}>
                    {argonaute.name}
                </div>
                )}
            </div>
            <div className="Footer">
                <div className="footer_content">
                    <p className="footer_txt">Réalisé par Jason en Anthestérion de l'an 515 avant JC</p>
                </div>
            </div>
        </div>
    )
}

export default MainPage2
