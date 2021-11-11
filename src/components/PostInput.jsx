import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios';

import './PostInput.css';

function PostInput() {
    const { register, handleSubmit } = useForm();
    const url = "http://localhost:8000/api/argonautes"

    const [ argonaute, setArgonaute ] = useState({
        name : "",
        qualities : ""
    })

    const addArgonautes = e => {
        axios.post(url, {
            name: argonaute.name,
            qualities: argonaute.qualities
        })
        alert('Un(e) nouvel(le) argonaute a bien été enregistré !')
    }

    function handleInputChange (e) {
        const newArgonaute = {...argonaute}
        newArgonaute[e.target.id] = e.target.value 
        setArgonaute(newArgonaute)
    }

    return (
        <div className="PostInput">
            <div className="input_content">
                <h2 className="input_title">Ajouter un(e) Argonaute</h2>
                <form onSubmit={handleSubmit(addArgonautes)} >
                    <div className="input_fields">
                        <div className="name_inputs">
                            <label className="input_label">Nom de l'argonaute*</label>
                            <input 
                                type="text" 
                                {...register("name")}
                                id="name"
                                placeholder="Charalampos"
                                onChange ={(e) => handleInputChange(e)}
                                value={argonaute.name}
                                required/>
                        </div>
                        <div className="qualities_inputs">
                            <label className="input_label">Détail de l'argonaute</label>
                            <input 
                                type="text" 
                                {...register("qualities")}
                                id="qualities"
                                placeholder="Details"
                                onChange ={(e) => handleInputChange(e)}
                                value={argonaute.qualities}/>
                            </div>
                        </div>
                        <input type="submit" className="submit_button"/>
                </form>
            </div>
        </div>
    )
}

export default PostInput
