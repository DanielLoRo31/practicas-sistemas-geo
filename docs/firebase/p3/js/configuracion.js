var firebaseConfig = {
  apiKey: "AIzaSyB-8DTGEAnbBRmpfSgpctVUFj5dtqZbO4k",
  authDomain: "practicas-geo.firebaseapp.com",
  projectId: "practicas-geo",
  storageBucket: "practicas-geo.appspot.com",
  messagingSenderId: "29585756463",
  appId: "1:29585756463:web:9cda0b77738fdff11911da",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const db = firebase.firestore();