import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDTUOg6OWdVQTTrc5HnWnQsFE9CF7UqVrk",
    authDomain: "slack-clone-d4013.firebaseapp.com",
    databaseURL: "https://slack-clone-d4013.firebaseio.com",
    projectId: "slack-clone-d4013",
    storageBucket: "slack-clone-d4013.appspot.com",
    messagingSenderId: "314904869198",
    appId: "1:314904869198:web:8815ba95a8c47fb235861f",
    measurementId: "G-FNE7XQM8NY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebaseApp.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db