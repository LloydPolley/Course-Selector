import * as firebase from "firebase";


//Set - save data to specific area replacing any existing


var config = {
  apiKey: "AIzaSyD6IHYG7mVNUflT-XZHsR7FZ1I7mf9lD1w",
  authDomain: "course-selector-1e2f5.firebaseapp.com",
  databaseURL: "https://course-selector-1e2f5.firebaseio.com",
  projectId: "course-selector-1e2f5",
  storageBucket: "course-selector-1e2f5.appspot.com",
  messagingSenderId: "455070175641"
};


firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider  = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };





