import React from 'react'
import "./footer.scss"
import logo from "./../../assets/logoEclipse.svg"
import email from './../../assets/email.svg'
import discord from './../../assets/discord.svg'

const Footer = () => {
    return(
        <div className="footer_layout">
            <div className="footer_main">
                <div className="footer_main_eclipse">
                    <div className="footer_main_eclipse_logo">
                        <img src={logo} alt="logo"/>
                        <p className="footer_main_title">Eclipse</p>
                    </div>
                    <div className="footer_main_eclipse_links">
                        <p>Кастомизация</p>
                        <p>Модерация</p>
                        <p>Туториал</p>
                        <p>Уровни</p>
                    </div>
                </div>
                <div className="footer_main_tech">
                    <p className="footer_main_tech_title">Технические вопросы</p>
                    <div className="footer_main_tech_links">
                        <p>Сервер поддержки</p>
                        <p>Условия использования</p>
                        <p>Политика конфиденциальности</p>
                    </div>
                </div>
                <div className="footer_main_cotacts">
                    <p className="footer_main_contacts_title">Связь с нами</p>
                    <div className="footer_main_contacts_icons">
                        <img src={email} alt="eamil"/>
                        <img src={discord} alt="discord"/>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="footer_add">
                <button>Добавь меня!</button>
            </div>
            <p className="footer_copyright">Copyright © 2021-2022 Night Devs</p>
        </div>
    )
}

export default Footer