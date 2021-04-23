import React from 'react'
import './whoIsI.scss'
import privateRooms from './../../assets/PrivateRooms.svg'
import privateCard from './../../assets/privateCard.svg'
import newLevel from './../../assets/newLevel.svg'
import virusChecked from './../../assets/VirusChecker.svg'
import autoModer from './../../assets/autoModer.svg'

const WhoIsI = () => {
    const blockRoom = (
        flexDirectionValue: any,
        img: string,
        title: string,
        text: string
    ) => {
        return(
        <div className="privateRooms" style={{flexDirection: flexDirectionValue}}>
            <img src={img} alt={`${img}`} style={{maxWidth: "30%"}}/>
            <div className="privateRooms_content">
                <p className="privateRooms_content_title">{title}</p>
                <p className="privateRooms_content_text">
                   {text}
                </p>
            </div>
        </div>
        )
    }
    return(
        <div className="whoIsI_layout">
            <p id="section2" className="whoIsI_header">Что я умею?</p>
            {blockRoom("row", privateRooms, "Приватные каналы", "Участникам больше не придётся просить админов чтобы создать их личный голосовой канал, а админам не нужно будет искать дополнительных ботов, а у создателя будет полная власть над своим каналом")}
            {blockRoom("row-reverse", privateCard, "Ваша личная карточка", "Ваша карточка - это отражение вашей сущности, не стоит безответсвенно относиться к ее оформлению")}
            {blockRoom("row", newLevel, "Я оповещу вас о новом уровне", "Если вы получили новый уровень, я незамедлительно сообщю вам об этом")}
            {blockRoom("row-reverse", virusChecked, "Обеспечьте безопастность участникам", "Боитесь любых файлов отправленных от участников? Не беда! Eclipse проверит файли даст вам убедится что он безопасен")}
            {blockRoom("reverse", autoModer, "Авто-модерация", `Облегчите жизнь админам благодаря Eclipse! Анти-капс, анти-флуд, фильтр запрещённых слов. Наведите порядок в чате!`)}
            <p className="whoIsI_header">И многое другое!</p>
        </div>
    )
}

export default WhoIsI