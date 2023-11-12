import { ref  } from 'vue'
import { defineStore } from 'pinia'
import { useProfileStore } from './profile'

export const useProjectsStore = defineStore('ProjectsStore', () => {
    let profile = useProfileStore();
    let userId = profile.userId;
    let SelectedLang = profile.SelectedLang;

    let projects = ref([])
    let selectedProject = ref({})

    const selProject = (item)=>{
        selectedProject.value = item
    }

  
    const loadProjects = async () => {
        if (userId == '') {
          return;
        }
        try {

          const response = await fetch(`/profiles/${userId}/${SelectedLang}_projects.json`);
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
