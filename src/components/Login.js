
import React, { Component } from 'react'

import firebase from '../firebase'
import '../button.css'


export default class extends Component {

	componentWillMount() {

		firebase.auth().onAuthStateChanged(user => {

			if(user)
				this.props.history.push('/dashboard')
		})

	}

	login(e) {

		const typeProvider = e.target.dataset.provider

		let provider = null

		if(typeProvider === 'facebook')
			provider = new firebase.auth.FacebookAuthProvider()
		else
			provider = new firebase.auth.TwitterAuthProvider()


		firebase.auth().signInWithPopup(provider)
			.then(user => {

				this.props.history.push('/dashboard')

			})
	}

	render() {

		return (
			<div>
				<div className="App-header">
					<div className="App-logo">
						<img src="" alt="Logo"/>
					</div>
				</div>
				<div className="container-login">
					<a onClick={this.login.bind(this)} className='button facebook' data-provider="facebook" >Inicia sesion con facebook</a>
					<a onClick={this.login.bind(this)} className='button twitter' data-provider="twitter" >Inicia sesion con Twitter</a>
				</div>
			</div>
		)

	}

}