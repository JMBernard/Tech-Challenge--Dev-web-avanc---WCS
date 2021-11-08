import React, { useState, useEffect} from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import PostInput from "../components/PostInput";
import ArgonautesList from "../components/ArgonautesList"

import axios from 'axios';

import './MainPage.css';

function MainPage() {
    const [argonautes, setArgonautes] = useState([]);

    useEffect(() => {
        axios  
        .get("http://localhost:8000/api/argonautes")
        .then((res) => res.data)
        .then((data) => setArgonautes(data))
    }, [])
    return (
        <div className="MainPage">
            <Header />
            <PostInput />
            {argonautes
            .map ((argonaute) =>
            <div>
                <ArgonautesList argonaute={argonaute}/>
            </div>
            )}
            <Footer />
        </div>
    )
}

export default MainPage
