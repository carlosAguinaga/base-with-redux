import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Login from '../views/login/Login'
import Register from '../views/register/Register'
import Home from '../views/home/Home'


const AppRouter = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/register" component={Register}/>
        </Switch>
    )
}

export default AppRouter
