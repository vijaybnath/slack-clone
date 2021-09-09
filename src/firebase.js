import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyC3QOY_klWoc6YlCwKnwjYcrKlmJdP_Cx4",
    authDomain: "slack-cloen.firebaseapp.com",
    projectId: "slack-cloen",
    storageBucket: "slack-cloen.appspot.com",
    messagingSenderId: "658001224809",
    appId: "1:658001224809:web:b84eeccd08ccf564f6eef8",
    measurementId: "G-RLMXQBD7PT"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
