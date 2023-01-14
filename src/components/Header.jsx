/* eslint-disable jsx-a11y/alt-text */
import React from "react";

function Header() {
    return (
        <header>
            <div className="logoMenuContainer">
                <div className="logoContainer">
                    <img className="logo" src={require('../assets/logo/image 25.png')} />
                </div>
                <div className="menuContainer">
                    <button className="headerButton">Home</button>
                    <button className="headerButton">Products <img src={require('../assets/chevron-down/chevron-down.png')} /></button>
                    <button className="headerButton">Resources <img src={require('../assets/chevron-down/chevron-down.png')} /></button>
                    <button className="headerButton">Pricing</button>
                </div>
            </div>
            
            <div className="logContainer">
                <button className="headerButton">Log in</button>
                <button className="headerButton" id="signUpButton">Sign up</button>
            </div>
        </header>
    );
}

export default Header;
