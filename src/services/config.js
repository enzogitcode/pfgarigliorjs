import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY_FIREBASE_CONFIG,
  authDomain: "mirproyectocode.firebaseapp.com",
  projectId: "mirproyectocode",
  storageBucket: "mirproyectocode.appspot.com",
  messagingSenderId: "250468072450",
  appId: "1:250468072450:web:7196687f0c739b0ee2bb1b"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);