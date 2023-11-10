import { ref ,computed } from 'vue'
import { defineStore } from 'pinia'

export const useProfileStore = defineStore('ProfileStore', () => {

  let profile = ref()


  let userId = ref('')
  
  const langs = ref(['en','es','uk','ru'])
  let SelectedLang =ref('en')

  const  setParamsFromUrl =()=>{
    
    const urlParams = new URLSearchParams(window.location.search);
    userId= urlParams.get('id') || '';
    SelectedLang = urlParams.get('lng') || 'en';

 
    if (userId == '') {
      userId= localStorage.getItem('userId') || '';
    }
  }
 
  setParamsFromUrl()
  
 const LoadProfileFromJSON = async () => {
    if (userId == '') {
      return;
    }
   
    try {
      const response = await fetch(`/profiles/${userId}/${SelectedLang}.json`);
      if (!response.ok) {
        throw new Error('Failed to load profile');
      }
      profile.value = await response.json();

    } catch (error) {
      console.error(error);
    }
 }
  
  return { profile,langs,SelectedLang,userId,LoadProfileFromJSON }
})
