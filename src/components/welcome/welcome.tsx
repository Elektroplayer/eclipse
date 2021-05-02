import React from 'react'
import Header from '../header/header'
import "./welcome.scss"
import arrow from './../../assets/welcome/arrow.png'
import { Link } from 'react-router-dom'

const Welcome = () => {
    return(
        <div className="main_layout">
            <Header/>
            <div data-aos="fade-up" className="dsBackground">
                <div className="dsBg_text">
                    <p className="dsBg_text_welcome">Добро пожаловать на тёмную сторону</p>
                    <div className="dsBg_text_description">
                        Меня зовут <span>Eclipse!</span> Я создан для того, чтобы помочь вам в развитии вашего сервера
                    </div>
                    <Link to="/dashboard">
                        <button className="dsBg_text_btn">Добавить!</button>
                    </Link>
                    <p className="dsBg_text_pss">Псс....чтобы узнать больше информации обо мне, листай вниз)</p>
                </div>
            </div>
            <div className="main_arrow">
                <a href="#section2">
                    <img className="main_arrow_img" src={arrow} alt="arrow"/>
                </a>
            </div>
        </div>
    )
}

export default Welcome
