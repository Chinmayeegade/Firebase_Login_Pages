import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

 var firebaseConfig = {
    apiKey: "*******************************",
    authDomain: "********************",
    projectId: "***************",
    storageBucket: "**********",
    messagingSenderId: "********",
    appId: "**********************"
 };

 const fire = firebase.initializeApp(firebaseConfig);

 export default fire;