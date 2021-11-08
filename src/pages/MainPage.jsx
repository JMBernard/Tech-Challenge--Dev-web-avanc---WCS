import React, { useState, useEffect} from 'react';
// import axios from 'axios';
import Header from "../components/Header";
import Footer from "../components/Footer";
import PostInput from "../components/PostInput";
import ArgonautesList from '../components/ArgonautesList';

import './MainPage.css';

function MainPage() {
    // const [argonautes, setArgonautes] = useState([]);

    // useEffect(() => {
    //     axios  
    //     .get("http://localhost:8000/api/argonautes")
    //     .then((res) => res.data)
    //     .then((data) => setArgonautes(data))
    // }, [])

    return (
        <div className="MainPage">
            <Header />
            <PostInput />
            {/* <div className="argonaute_list">
            {argonautes
                .map((argonaute) =>
                <div key={argonaute.id}>
                    <ArgonautesList argonaute={argonaute}/>
                </div>
                )}
            </div> */}
            <ArgonautesList />
            <Footer />
        </div>
    )
}

export default MainPage
