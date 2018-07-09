import firebase from 'firebase/app'

// Initialize Firebase
const config = {
  apiKey: "YOUR API KEY",
  authDomain: "YOUR AUTH DOMAIN",
  databaseURL: "YOUR DATABASE URL",
  projectId: "YOUR PROJECT ID",
  storageBucket: "YOUR STORAGE BUCKET",
  messagingSenderId: "YOUR MESSAGING SENDER ID"
}

const app = firebase.initializeApp(config)

export const auth = firebase.auth()
export const googleProvider = firebase.auth.GoogleAuthProvider()

const db = app.database()
const base = Rebase.createClass(db)

export default base
