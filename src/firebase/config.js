import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFthBa1UHbbxXswYFhHoSBKI74niOIJZA",
  authDomain: "jersycamperos-react.firebaseapp.com",
  projectId: "jersycamperos-react",
  storageBucket: "jersycamperos-react.appspot.com",
  messagingSenderId: "924065217756",
  appId: "1:924065217756:web:cdba7b2f1c02ddca894819",
};

const app = firebase.initializeApp(firebaseConfig);

export const getFirestore = () => {
  return firebase.firestore(app);
};
