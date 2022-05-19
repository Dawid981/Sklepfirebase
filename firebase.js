import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB_DsyAFIZWkj_Nt-TgYArobo2k3RXw-lA",
    authDomain: "sklepfirebase-e0598.firebaseapp.com",
    projectId: "sklepfirebase-e0598",
    storageBucket: "sklepfirebase-e0598.appspot.com",
    messagingSenderId: "39297827778",
    appId: "1:39297827778:web:575d97452f2809998d0c5b"
  };

  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();
