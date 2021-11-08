import React from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios';

import './PostInput.css';

function PostInput() {
    const { register, handleSubmit } = useForm();
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
                <form className="input_field">
                    <input type="text" placeholder="Charalampos"></input>
                    <button>Envoyer</button>
                </form>
            </div>
        </div>
    )
}

export default PostInput
