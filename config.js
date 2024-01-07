import firebase from 'firebase';

//initialize your database
var firebaseConfig = {
  apiKey: "AIzaSyCZ-fkWW9lNfxnSBNVq_Yj06BE3Jok-PFY",
  authDomain: "school-attendance-app-d7a36.firebaseapp.com",
  projectId: "school-attendance-app-d7a36",
  storageBucket: "school-attendance-app-d7a36.appspot.com",
  messagingSenderId: "136921339092",
  appId: "1:136921339092:web:e274bbc95cf26396a71741"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database()
 