import {  ref  } from 'vue'
import { defineStore } from 'pinia'

export const useProfileStore = defineStore("ProfileStore", () => {
  let profile = ref();
  let userId = ref('');  //  убрать userID
  let AuthUserId = ref('');

  let authorization = ref(false);

   const SetAuth = (CurUserId) => {
    AuthUserId.value = CurUserId
    authorization.value = AuthUserId.value == "001" ? true : false;
    localStorage.setItem("userId", CurUserId);
  };

  const SetLogout = () => {
    localStorage.removeItem("userId");
    AuthUserId.value = ''
    userId =''
    location.reload();
  }


  const langs = ref(["en", "es", "uk", "ru"]);

  const editList = [
    {
      name:'Main',
      link:'el_ed_main'
    },
    {
      name:'Description',
      link:'el_ed_descr'
    },
    {
      name:'Contancts',
      link:'el_ed_contacts'
    },
    {
      name:'Portfolio',
      link:'el_ed_portfolio'
    },
    {
      name:'Languages',
      link:'el_ed_langs'
    },
    {
      name:'Education',
      link:'el_ed_education'
    },

]

  let SelectedLang = ref("en");

  const setParamsFromUrl = () => {
    //console.log('setParamsFromUrl');

    const urlParams = new URLSearchParams(window.location.search);
    userId = urlParams.get("id") || "";
    SelectedLang = urlParams.get("lng") || "en";

    if (userId == "") {
      userId = localStorage.getItem("userId") || "";
      
    }



//console.log('setParamsFromUrl userId',userId);
//console.log('setParamsFromUrl SelectedLang',SelectedLang);

  };

  setParamsFromUrl();

  const LoadProfileFromJSON = async () => {
    // if (AuthUserId.value == "") {
    //   return;
    // }
  
   //console.log('LoadProfileFromJSON');
   //console.log('AuthUserId.value',AuthUserId.value);
   //console.log('userId',userId);   

    try {

      let link =''
      if (AuthUserId.value!="") {
        link = `/profiles/${AuthUserId.value}/${SelectedLang}_profile.json`
      }else{
         if (userId!="") {
          link = `/profiles/${userId}/${SelectedLang}_profile.json`
         }else{
          return
         }
      }
      

      const response = await fetch(link);
      if (!response.ok) {
        throw new Error("Failed to load user profile");
      }
      profile.value = await response.json();

      //console.log("profile", profile.value);
    } catch (error) {
      console.error(error);
    }
  };


const AddLang = () => {
  let ln= { name: 'en', level: 'A1'}
   profile.value.langs.push(ln);
}

const DelLang = (idx) => {
   profile.value.langs.splice(idx, 1);
}


const AddEd = () => {
  let ln= { title: 'Academy', description: '', period: ''}
   profile.value.education.push(ln);
}

const DelEd = (idx) => {
   profile.value.education.splice(idx, 1);
}

  return {
    profile,
    langs,
    SelectedLang,
    userId,
    LoadProfileFromJSON,
    authorization,
    SetAuth,
    SetLogout,
    AuthUserId,
    AddLang,
    DelLang,
    AddEd,
    DelEd,
    editList
  };
});
