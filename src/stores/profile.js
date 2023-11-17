import {  ref  } from 'vue'
import { defineStore } from 'pinia'
import { t } from "vui18n"

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


  let projects = ref()
  let selectedProject = ref({})
  const selProject = (item)=>{
      selectedProject.value = {...item}
  }

  const langs = ref(["en", "es", "uk", "ru"]);

  const editList = [
    {
      name: t('Main'),
      link:'el_ed_main'
    },
    {
      name:t('Description'),
      link:'el_ed_descr'
    },
    {
      name:t('Contacts'),
      link:'el_ed_contacts'
    },
    {
      name:t('Portfolio'),
      link:'el_ed_portfolio'
    },
    {
      name: t('Skills'),
      link: 'el_ed_skills'
    },
    {
      name:t('Languages'),
      link:'el_ed_langs'
    },
    {
      name:t('Education'),
      link:'el_ed_education'
    },
    {
      name: t('Projects'),
      link: 'el_ed_editor'
    }


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
      let link2 =''
      let dir =''   
      if (AuthUserId.value!="") {
        dir = `/profiles/${AuthUserId.value}/${SelectedLang}`
        //link = `/profiles/${AuthUserId.value}/${SelectedLang}_profile.json`
        //link2 =`/profiles/${AuthUserId.value}/${SelectedLang}_projects.json`
      }else{
         if (userId!="") {
          dir = `/profiles/${userId}/${SelectedLang}`
          //link = `/profiles/${userId}/${SelectedLang}_profile.json`
          //link2 = `/profiles/${userId}/${SelectedLang}_projects.json`

         }else{
          return
         }
      }

      link =dir+'_profile.json'
      link2 =dir+'_projects.json'
      
      

      const response = await fetch(link);
      if (!response.ok) {
        throw new Error("Failed to load user profile");
      }
      profile.value = await response.json();


      const response2 = await fetch(link2);
      if (!response2.ok) {
        throw new Error('Failed to load user projects');
      }
      projects.value = await response2.json();

      if (projects.value.length > 0) {
        selectedProject.value = projects.value[0];
      }


      //console.log("profile", profile.value);
    } catch (error) {
      console.log('LoadProfileFromJSON',error);
    }
  };


const AddLang = () => {
  let ln= { name: 'en', level: 'A1'}
   profile.value.langs.push(ln);
}

const DelLang = (idx) => {
   profile.value.langs.splice(idx, 1);
}


const AddSkills = () => {
  let ln= { name: 'HTML', level: 'middle', years: "1"}
   profile.value.skills.push(ln);
}

const DelSkills = (idx) => {
   profile.value.skills.splice(idx, 1);
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
    editList,
    selectedProject,
    projects,
    selProject

  };
});
