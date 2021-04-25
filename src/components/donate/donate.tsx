import React from 'react'
import './donate.scss'
import tick from './../../assets/donate/tick.svg'

const Donate = () => {
    let arrColors: string[] = [];

    const donateBlock = (
        id: number,
        title: string,
        price: string,
        content: string[],
        color: string,
        profit: boolean,
        name?: string
    ) => {
        arrColors.push(color)
        return(
            <>
            <div 
                className="donate_block" 
                style={{backgroundColor: color, border: `${profit && "3px solid #FFFFFF"}`}}>
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
                    {content.map((i, index) => {
                        return(
                        <div key={index} className="donate_block_text_tick">
                            <img src={tick} alt="tick"/>
                            <p>{i}</p>
                        </div>
                        )
                    })}
                </div>
                <div className="donate_block_buy">
                    <button className="donate_block_buy_btn">Купить</button>
                </div>
            </div>
            {/* <style>{`
                        .donate_block_buy_btn:hover:nth-child(${id}) {
                            color: ${color};
                            backGround: #fff;
                        }
                    `}
            </style> */}
            </>
        )
    }
    return(
        <div className="donate_layout">
            <p className="donate_title">Получи больше возможностей с Premium!</p>
            <div className="donate_blocks">
                <p className="donate_blocks_1">
                    {donateBlock(1, "Custom Mini", "50", ["Добавление кастомной картинки в профиль", "Изменение цвета полоски рядом с профилем"], "#75D773", false)}
                </p>
                <p className="donate_blocks_2">
                    {donateBlock(2, "Custom Premium", "125", ["Все возможности кастомизации профиля", "Выбор шаблонов из 5 доступных", "Кастомные команды"], "#D77373", false, "Кастомизация" )}
                </p>
                <p className="donate_blocks_3">
                    {donateBlock(3, "Custom Full", "85", ["Все возможности кастомизации профиля", "Выбор шаблонов из 3 доступных"], "#D7C773", true )}
                </p>
            </div>
            <div className="donate_blocks2">
                <p className="donate_blocks2_4">
                    {donateBlock(4, "Safety", "20", ["Автоматическая проверка всех EXE файлов на вирусы"], "#29B6F6", false, "Безопасность")}
                </p>
                <p className="donate_blocks2_5">
                    {donateBlock(5, "Music", "150", ["Все возможности из категории музыки"], "#5C6BC0", false, "Музыка")}
                </p>
            </div>
        </div>
    )
}
export default Donate
