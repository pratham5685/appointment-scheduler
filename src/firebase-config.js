
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB_zqZtegiDfq_L0orfZZeCutwjcTBTMSY",
  authDomain: "fir-crud-5b4b0.firebaseapp.com",
  projectId: "fir-crud-5b4b0",
  storageBucket: "fir-crud-5b4b0.appspot.com",
  messagingSenderId: "642876513816",
  appId: "1:642876513816:web:fd45855c4f36e04e672d6d"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
