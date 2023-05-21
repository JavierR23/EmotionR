var firebase = require('firebase')
// datos de firebase
var config = {

  apiKey: "AIzaSyBp08mOsTclTedUb1fC_EUoIQzvPF24_ek",
  authDomain: "emotionr-8ec41.firebaseapp.com",
  projectId: "emotionr-8ec41",
  storageBucket: "emotionr-8ec41.appspot.com",
  messagingSenderId: "700411728008",
  appId: "1:700411728008:web:f58ca1c26fc03a10700f3d",
  measurementId: "G-LNT1ETWSBZ"
};

const fire = firebase.initializeApp(config);
module.exports = fire;