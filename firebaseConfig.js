import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDYThos-ZmmSapiZ9-jZrWMfigh8FpIYys",
  authDomain: "tidygo-8feb0.firebaseapp.com",
  databaseURL:
    "https://tidygo-8feb0-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "tidygo-8feb0",
  storageBucket: "tidygo-8feb0.appspot.com",
  messagingSenderId: "542362966641",
  appId: "1:542362966641:web:4e476fd07aadc097ffd9d0",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const database = getDatabase(app);

export { auth, firestore, app, database };
