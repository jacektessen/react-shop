import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDPCqyEa-NawOIyt40SjVkvw_c1jaAV63g",
  authDomain: "react-shop-4dfbc.firebaseapp.com",
  databaseURL: "https://react-shop-4dfbc.firebaseio.com",
  projectId: "react-shop-4dfbc",
  storageBucket: "react-shop-4dfbc.appspot.com",
  messagingSenderId: "45682341975",
  appId: "1:45682341975:web:088e7dcfa2d7af13e90b12",
  measurementId: "G-KGTTRQ18YK"
};
firebase.initializeApp(firebaseConfig);

export default firebase;
