import React from 'react'

import { Switch, Route } from 'react-router-dom'

import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Home from './components/Home'

const Routers = () => (
	<Switch>
		<Route exact path='/' component={Home} />
		<Route path='/login' component={Login}/>
		<Route path="/dashboard" component={Dashboard} />
	</Switch>
)


export default Routers