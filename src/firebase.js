import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAsX3pT_CKDrocx3QGYqjOUnCdsfNb0C24",
  authDomain: "meeetsapp.firebaseapp.com",
  databaseURL: "https://meeetsapp.firebaseio.com",
  projectId: "meeetsapp",
  storageBucket: "meeetsapp.appspot.com",
  messagingSenderId: "972918966317",
  appId: "1:972918966317:web:dd870e83ce43ebb91b50a4",
  measurementId: "G-JGH96DLYH7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
