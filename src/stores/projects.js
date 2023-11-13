import { ref  } from 'vue'
import { defineStore } from 'pinia'
import { useProfileStore } from './profile'

export const useProjectsStore = defineStore('ProjectsStore', () => {
    let profile = useProfileStore();
    let AuthUserId = profile.AuthUserId
    let userId = profile.userId;
    let SelectedLang = profile.SelectedLang;

    let projects = ref([])
    let selectedProject = ref({})

    const selProject = (item)=>{
      //console.log('selProject',{...item});
        selectedProject.value = {...item}
    }

  
    const loadProjects = async () => {

      //console.log('loadProjects: AuthUserId:',AuthUserId);
      //console.log('loadProjects: userId:',userId);


        // if (AuthUserId == '') {
        //   return;
        // }
        try {

          let link =''
          if (AuthUserId!="") {
            link = `/profiles/${AuthUserId}/${SelectedLang}_projects.json`
          }else{
             if (userId!="") {
              link = `/profiles/${userId}/${SelectedLang}_projects.json`
             }else{
              return
             }
          }



          const response = await fetch(link);
          if (!response.ok) {
            throw new Error('Failed to load user projects');
          }
          projects.value = await response.json();
    
          if (projects.value.length > 0) {
            selectedProject.value = projects.value[0];
          }


        } catch (error) {
          console.error(error);
        }
     }



    return { projects,selectedProject,loadProjects,selProject }
})
