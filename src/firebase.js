import firebase from "firebase"

var firebaseConfig = {
  apiKey: "AIzaSyC-5dRM5IaN45NexeSg8OqNYtEG1NM3MtQ",
  authDomain: "netflix-clone-fc047.firebaseapp.com",
  projectId: "netflix-clone-fc047",
  storageBucket: "netflix-clone-fc047.appspot.com",
  messagingSenderId: "819483931461",
  appId: "1:819483931461:web:9b4152e11961add5f1842c",
  measurementId: "G-14PZQHTYFN"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);
export const db=firebase.firestore();
let auth = firebase.auth();

//there is many explicite export 
export  default auth
//but only one default export
// export default db;

