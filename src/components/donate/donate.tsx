import React from 'react'
import './donate.scss'
import tick from './../../assets/tick.svg'

const Donate = () => {
    const donateBlock = (
        title: string,
        price: string,
        content: string[],
        color: string,
        profit: boolean,
        name?: string
    ) => {
        return(
            <div className="donate_block" style={{backgroundColor: color, border: `${profit && "3px solid #FFFFFF"}`}}>
            {name && <p className="donate_name">{name}</p>}
                {profit && 
                <p className="donate_profit">Выгодно</p>
                }
                <div className="donate_block_title">
                    <p>{title}</p>
                </div>
                <div className="donate_block_price">
                    <p>{price}</p>
                    <span>рублей</span>
                </div>
                <div className="donate_block_text">
                    {content.map((i) => {
                        return(
                        <div className="donate_block_text_tick">
                            <img src={tick} alt="tick"/>
                            <p>{i}</p>
                        </div>
                        )
                    })}
                </div>
                <button className="donate_block_btn" style={{backgroundColor: color}}>Купить</button>
            </div>
        )
    }
    return(
        <div className="donate_layout">
            <p className="donate_title">Получи больше возможностей с Premium!</p>
            <div className="donate_blocks">
                {donateBlock("Custom Mini", "50",["Добавление кастомной картинки в профиль", "Изменение цвета полоски рядом с профилем"], "#75D773", false )}
                {donateBlock("Custom Premium", "125",["Все возможности кастомизации профиля", "Выбор шаблонов из 5 доступных", "Кастомные команды"], "#D77373", false, "Кастомизация" )}
                {donateBlock("Custom Full", "85",["Все возможности кастомизации профиля", "Выбор шаблонов из 3 доступных"], "#D7C773", true )}
            </div>
            <div className="donate_blocks2">
                {donateBlock("Safety", "20", ["Автоматическая проверка всех EXE файлов на вирусы"], "#29B6F6", false, "Безопасность")}
                {donateBlock("Music", "150", ["Все возможности из категории музыки"], "#5C6BC0", false, "Музыка")}
            </div>
        </div>
    )
}

export default Donate
