import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_API,
  authDomain: "m7website-d2a30.firebaseapp.com",
  databaseURL: "https://m7website-d2a30.firebaseio.com",
  projectId: "m7website-d2a30",
  storageBucket: "m7website-d2a30.appspot.com",
  messagingSenderId: "1004664957177",
  appId: process.env.REACT_APP_FB_APPID
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({
  timestampsInSnapshots: true
});

export default firebase;
