import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAlHI96ta5e0pjoQ1_dI0EYfQhKvRzr3YI",
  authDomain: "m-city-77035.firebaseapp.com",
  databaseURL: "https://m-city-77035.firebaseio.com",
  projectId: "m-city-77035",
  storageBucket: "m-city-77035.appspot.com",
  messagingSenderId: "904520296080",
  appId: "1:904520296080:web:ed5c5483681673d74a1a15",
  measurementId: "G-NM8YBT74XE"
};

firebase.initializeApp(firebaseConfig);
const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref("matches");
const firebasePromotions = firebaseDB.ref("promotions");

export { firebase, firebaseMatches, firebasePromotions };
