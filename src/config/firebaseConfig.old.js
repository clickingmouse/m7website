import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_API,
  authDomain: "m7website-f5c2a.firebaseapp.com",
  databaseURL: "https://m7website-f5c2a.firebaseio.com",
  projectId: "m7website-f5c2a",
  storageBucket: "",
  messagingSenderId: "667223289264",
  appId: process.env.REACT_APP_FB_APPID
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({
  timestampsInSnapshots: true
});

export default firebase;
