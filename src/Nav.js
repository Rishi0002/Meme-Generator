import React from "react";
import './nav.css';
import logo from './Troll Face.svg';

export default function Nav(){

    return (
        <div className="nav-all-wrap">
            <img src={logo} alt="troll-face" className="logo"/>
            <header>Meme-Generator</header>
            <footer>React Course Project 3</footer>
        </div>
    )
}