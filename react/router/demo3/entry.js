//npm install react-router
import React from 'react'
import {render} from 'react-dom'
import {Router,Route,hashHistory} from 'react-router'
import App from './modules/App'
import About from './modules/About'
import Repos from './modules/Repos'


//渲染路由
render((

<Router history={hashHistory}>
    <Route path="/" component = {App} />
    <Route path="/repos/:userName/:email" component = {Repos} />
    <Route path="/about" component = {About} />

</Router>

),document.getElementById('app'));