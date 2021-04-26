import React from "react"
import "./header.scss"
import logo from "./../../assets/header/logoEclipse.png"
import signIn from "./../../assets/header/signIn.png"

const Header = () => {
    return(
        <div className="header_layout">
            <div data-aos="fade-up" className="logo">
                <img className="logo_img" src={logo} alt="logo"/>
                <p className="logo_title">Eclipse</p>
            </div>
            <div data-aos="fade-up" className="signIn">
                <img src={signIn} alt="signIn"/>
                <p onClick={() => alert("Войти?")} className="signIn_title">Войти</p>
            </div>
        </div>
    )
}

export default Header
