
import * as firebase from 'firebase'

// Initialize Firebase
var config = {
	apiKey: "AIzaSyDXxYUdl473QGtca688arE1TQeyTVJI2vM",
	authDomain: "login-auth-social.firebaseapp.com",
	databaseURL: "https://login-auth-social.firebaseio.com",
	projectId: "login-auth-social",
	storageBucket: "login-auth-social.appspot.com",
	messagingSenderId: "99573341989"
};

firebase.initializeApp(config);

export default firebase