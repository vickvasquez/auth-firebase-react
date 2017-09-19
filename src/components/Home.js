import React, { Component } from 'react'
import firebase from '../firebase'

class Home extends Component {

	componentWillMount() {

		firebase.auth().onAuthStateChanged(user => {
			if(user)
				this.props.history.push('/dashboard')
		})

	}

	render() {

		return(
			<div className="App-header">
				<div className="App-logo">
					<img src="" alt="Logo"/>
				</div>
				<div className="App-name">
					<h1>
						Authentication Firebase
					</h1>
				</div>
				<div className="menu">
					<a className="button-cta" href="/login-fb">Iniciar sesión</a>
				</div>
			</div>
		)
	}
}

export default Home