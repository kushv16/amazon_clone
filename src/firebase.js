import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBEwP67M9U0rMObsbuHWNQ3kqrzUd3KpT4",
  authDomain: "clone-e920f.firebaseapp.com",
  projectId: "clone-e920f",
  storageBucket: "clone-e920f.appspot.com",
  messagingSenderId: "552419663915",
  appId: "1:552419663915:web:4d809eddbfe772de93ca6e"
})

const auth = firebaseApp.auth();

export {auth}
