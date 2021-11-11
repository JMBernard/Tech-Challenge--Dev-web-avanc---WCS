import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import PostInput from "../components/PostInput";
import ArgonautesList from '../components/ArgonautesList';

import './MainPage.css';

function MainPage() {
    return (
        <div className="MainPage">
            <Header />
            <PostInput />
            <ArgonautesList />
            <Footer />
        </div>
    )
}

export default MainPage
