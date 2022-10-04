// Import the functions you need from the SDKs you need
import firebase from 'firebase/app'
import 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyB0GBUW7UinTt6RRfmv-SI5dGZiFAchBQc',
	authDomain: 'netto-4cff2.firebaseapp.com',
	projectId: 'netto-4cff2',
	storageBucket: 'netto-4cff2.appspot.com',
	messagingSenderId: '883831304702',
	appId: '1:883831304702:web:ddf713bc81133d877510af',
	measurementId: 'G-LW26X242V6',
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default firebase
