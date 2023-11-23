import {  ref  } from 'vue'
import { defineStore } from 'pinia'
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";



export const useDBStore = defineStore("DBStore", () => {

    const user = ref() 


    const firebaseConfig = {
        apiKey: "AIzaSyAWZNEM2GhdT15GPsjSbrxXpTa2W-3YcYw",
        authDomain: "resume-5dc07.firebaseapp.com",
        projectId: "resume-5dc07",
        storageBucket: "resume-5dc07.appspot.com",
        messagingSenderId: "805967530485",
        appId: "1:805967530485:web:c251270d0fa7ae04b4b8bc"
      };

        console.log('initialize Firebase');
        const fb = initializeApp(firebaseConfig);
        //user.value = fb.auth().currentUser;
        const auth = getAuth(fb)
        const database = getDatabase(fb);
        user.value = auth.currentUser
        console.log('user.value',user.value);



    const a_login = async(obj) => {
        try {
            await signInWithEmailAndPassword(auth, obj.email, obj.password);

            //user.value = fb.auth().currentUser;

            const data = await getUserData('/profile');
            //console.log('after getUserData', data);
            //store.setUser(data);


            return data;
        } catch (error) {
            console.log(error.message);
            //store.setError(messages[error.code] || messages['errorAuth']);
            throw err;
        }

    };


    const a_logout = async() => {
        await signOut();
        
        //store.setClearUser();
    };


     const addToDB = (path, obj) => {
        try {
            set(ref(database, path), obj); // insert / update
        } catch (error) {
            //store.setError(messages[error.code] || messages['erroraddToDB']);
            throw error;
        }

    }


    const saveUserData = (data) => {

        if (!user.value) {
            throw new Error('User not authenticated');
          }

          const uid = user.value.uid ? user.value.uid : null;
          //const db = import('firebase/firestore').then((firebase) => firebase.firestore());
          
          addToDB(`users/${uid}/profile`, data)


    
          
    }




   return {fb,user,saveUserData}


})  // export const useProfileStore 