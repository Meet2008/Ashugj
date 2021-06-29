import * as firebase from 'firebase' 
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyDuvicknH3Y_X3Oqq_L-jPNiVXOPWpRz4U",
    authDomain: "story-hub-188b5.firebaseapp.com",
    databaseURL: "https://story-hub-188b5-default-rtdb.firebaseio.com",
    projectId: "story-hub-188b5",
    storageBucket: "story-hub-188b5.appspot.com",
    messagingSenderId: "785627745271",
    appId: "1:785627745271:web:45b8520d30adafb8e6bcf2"
  };

firebase.initializeApp(firebaseConfig);
export default firebase.firestore();