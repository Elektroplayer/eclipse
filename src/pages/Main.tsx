import React from 'react'
import Welcome from './../components/welcome/welcome'
import WhoIsI from './../components/whoIsI/whoIsI'
import Donate from './../components/donate/donate'
import Footer from './../components/footer/footer'

const Main = () => {
    return(
        <div className="main">
            <Welcome/>
            <WhoIsI/>
            <Donate/>
            <Footer/>
        </div>
    )
}

export default Main
