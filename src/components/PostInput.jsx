import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios';

import './PostInput.css';

function PostInput() {
    // const { register, handleSubmit } = useForm();
    const url = "http://localhost:8000/api/agronautes"

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
    )
}

export default PostInput
