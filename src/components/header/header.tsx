import React from "react"
import "./header.scss"
import logo from "./../../assets/logoEclipse.svg"
import signIn from "./../../assets/signIn.svg"

const Header = () => {
    return(
        <div className="header_layout">
            <div className="logo">
                <img className="logo_img" src={logo} alt="logo"/>
                <p className="logo_title">Eclipse</p>
            </div>
            <div className="signIn">
                <img src={signIn} alt="signIn"/>
                <p className="signIn_title">Войти</p>
            </div>
        </div>
    )
}

export default Header
