import React from 'react'

import './PostInput.css';

function PostInput() {
    return (
        <div className="PostInput">
            <div className="input_content">
                <h2 className="input_title">Ajouter un(e) Argonaute</h2>
                <label className="input_label">Nom de l'argonaute</label>
                <div className="input_field">
                    <input type="text" placeholder="Charalampos"></input>
                    <button>Envoyer</button>
                </div>
            </div>
        </div>
    )
}

export default PostInput
