import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.scss'
import Main from './pages/Main'
import DashBoard from './pages/DashBoard'
import { Switch, Route, Redirect } from "react-router-dom";

const App = () => {
  AOS.init()
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/dashboard" component={DashBoard}/>
        <Redirect to="/"/>
      </Switch>
    </div>
  )
}

export default App;
