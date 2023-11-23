import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBJIjWqZjAjxzvT_8Q_0d6nzvUsD6qRQ8Y",
    authDomain: "vuecrm-f7dbb.firebaseapp.com",
    projectId: "vuecrm-f7dbb",
    storageBucket: "vuecrm-f7dbb.appspot.com",
    messagingSenderId: "1023503642872",
    appId: "1:1023503642872:web:801bc9d5da8d7cf9a04b0d",
    databaseURL: "https://vuecrm-f7dbb-default-rtdb.europe-west1.firebasedatabase.app/"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const database = getDatabase(app);

export { auth, database }