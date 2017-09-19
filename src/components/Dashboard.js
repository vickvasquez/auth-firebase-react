import React, { Component } from 'react'
import firebase from '../firebase'

export default class extends Component {

	state = {
		user:[],
		isOpened:false,
	}

	toggleMenu() {

		this.setState({isOpened:!this.state.isOpened})

	}

	logout() {

		const user = firebase.auth().currentUser;

		user.delete()
	}

	componentWillMount() {

		firebase.auth().onAuthStateChanged(user => {

			if(!user)
				this.props.history.push('/login')
			else {

				const userCurrent = user.providerData[0]

				this.setState({user:userCurrent})

				console.log(userCurrent)

				document.title = `Bienvenido ${userCurrent.displayName}`
			}

		})

	}

	render() {
		return (
			<div className="App-header">
				<div className="App-logo">
					<img src="" alt="Logo"/>
				</div>
				<div className="App-menu-user">
					<img src={this.state.user.photoURL} alt={this.state.user.displayName} onClick={this.toggleMenu.bind(this)}/>
					<ul className={this.state.isOpened ? "App-dropdwon-menu":"hide" }>
						<li>
							<span> {this.state.user.displayName} </span>
						</li>
						<li>
							<span> {this.state.user.email} </span>
						</li>
						<li>
							<a onClick={this.logout.bind(this)}>Cerrar sesion</a>
						</li>
					</ul>
				</div>
			</div>
		)
	}
}