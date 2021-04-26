import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.scss'
import Main from './pages/Main'

const App = () => {
  AOS.init()
  return (
    <div className="app">
      <Main/>
    </div>
  )
}

export default App;
