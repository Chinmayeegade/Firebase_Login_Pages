import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

 var firebaseConfig = {
   apiKey: "AIzaSyCYkBcoqmErWSuMnYNboF8r5_PcSESverE",
   authDomain: "fir-7b6ef.firebaseapp.com",
   projectId: "fir-7b6ef",
   storageBucket: "fir-7b6ef.appspot.com",
   messagingSenderId: "102846281637",
   appId: "1:102846281637:web:b444aa0aab4d2774de5a4c"
 };

 const fire = firebase.initializeApp(firebaseConfig);

 export default fire;