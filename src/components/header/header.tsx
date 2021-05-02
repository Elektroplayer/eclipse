import React from "react"
import "./header.scss"
import logo from "./../../assets/header/logoEclipse.png"
import signIn from "./../../assets/header/signIn.png"
import userAvatar from './../../assets/header/user-avatar.png'
import { Link } from "react-router-dom"

interface IHeaderProps{
    auth?: boolean
}

const Header: React.FC<IHeaderProps> = ({
    auth = false
}) => {
    return(
        <div className="header_layout">
            <div data-aos="fade-up" className="header_logo">
                <img className="header_logo_img" src={logo} alt="logo"/>
                <Link style={{textDecoration: 'none'}} to="/">
                    <p className="header_logo_title">Eclipse</p>
                </Link>
            </div>
            {auth ? (
            <div data-aos="fade-up" className="header_auth">
                <p>User Name#9999</p>
                <img src={userAvatar} alt="userAvatar"/>
            </div>
            ) : (
            <div data-aos="fade-up" className="header_signIn">
                <img src={signIn} alt="signIn"/>
                <p onClick={() => alert("Войти?")} className="header_signIn_title">Войти</p>
            </div>
            )}
        </div>
    )
}

export default Header
