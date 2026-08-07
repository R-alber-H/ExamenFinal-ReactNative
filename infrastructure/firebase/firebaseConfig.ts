import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCNpxeAkguhkmjcGZ25QZIp7WxwkJMES3E",
  authDomain: "funkoverse-f31cd.firebaseapp.com",
  projectId: "funkoverse-f31cd",
  storageBucket: "funkoverse-f31cd.firebasestorage.app",
  messagingSenderId: "29367276551",
  appId: "1:29367276551:web:991ec33d9f784715b906a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// Initialize get
export const auth = getAuth(app);