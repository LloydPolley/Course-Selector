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


function addSchool(schoolName) {
  database.ref(`schools/`).push(schoolName);
}
database.ref().on('value', function(snapshot){
  console.log(snapshot.val());
})
addSchool('London');
addSchool('la');

export { database, firebase };


