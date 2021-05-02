import React from 'react'
import Footer from '../footer/footer'
import Header from '../header/header'
import './selectServers.scss'
import cat from '../../assets/select-servers/cat.png'
import nature from '../../assets/select-servers/nature.png'
import noName from '../../assets/select-servers/no-name.png'

const SelectServers = () => {
    return(
        <div className="main_layout">
            <Header auth={true}/>
            <div data-aos="fade-up" className="select_servers">
                <p className="select_servers_text">Пожалуйста, выберите сервер</p>
                <div className="select_servers_list">

                <div onClick={() => alert("Колтейка")} className="select_servers_list_server" style={{backgroundImage: `url(${cat})`}}>
                    <p className="select_servers_list_server_title">Котейка</p>
                    <p className="select_servers_list_server_participants">Участников: 4</p>
                    <div className="select_servers_list_server_shadow"></div>
                </div>

                <div onClick={() => alert("VeniBot Com...")} className="select_servers_list_server" style={{backgroundImage: `url(${nature})`}}>
                    <p className="select_servers_list_server_title">VeniBot Com...</p>
                    <p className="select_servers_list_server_participants">Участников: 54</p>
                    <div className="select_servers_list_server_shadow"></div>
                </div>

                <div onClick={() => alert("ProjectX")} className="select_servers_list_server" style={{backgroundImage: `url(${noName})`}}>
                    <p className="select_servers_list_server_title">ProjectX</p>
                    <p className="select_servers_list_server_participants">Участников: 6</p>
                    <div className="select_servers_list_server_shadow"></div>
                </div>

                </div>
                <div className="select_servers_add">
                    <button>Добавь меня!</button>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default SelectServers