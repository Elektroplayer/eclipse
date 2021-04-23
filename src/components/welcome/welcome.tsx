import React from 'react'
import Header from '../header/header'
import "./welcome.scss"
import arrow from './../../assets/arrow.svg'

const Welcome = () => {
    return(
        <div className="main_layout">
            <Header/>
            <div className="dsBackground">
                <div className="dsBg_text">
                    <p className="dsBg_text_welcome">Добро пожаловать на тёмную сторону</p>
                    <div className="dsBg_text_description">
                        Меня зовут <span style={{color: "#7762D2", fontWeight: 700}}>Eclipse!</span> Я создан для того, чтобы помочь вам в развитии вашего сервера
                    </div>
                    <button className="dsBg_text_btn">Добавить!</button>
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
