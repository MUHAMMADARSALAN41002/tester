import { initializeApp } from 'firebase/app';
import { getAuth} from "firebase/auth";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDiyg5o3MVvVHwhpcZG4TNCzvlOf6NQUCs",
    authDomain: "hackathon-9fa10.firebaseapp.com",
    projectId: "hackathon-9fa10",
    storageBucket: "hackathon-9fa10.appspot.com",
    messagingSenderId: "950543816906",
    appId: "1:950543816906:web:54792887c685a8f9b83c33",
    measurementId: "G-X65S7JEX0W"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db }