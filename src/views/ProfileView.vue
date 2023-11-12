<template>

    <div class="container">
      <div class="content">
    
        <div class="leftSection">
          <Profile/>
        </div>
    
        <div class="rightSection">
          <Experience />
        </div>
    
    
      </div>
    </div>
    
    
      
    </template>
    
<script setup>
import { onMounted } from 'vue'
import Profile from '../components/Profile.vue'
import Experience from '../components/Experience.vue'
import { useProfileStore } from '../stores/profile'
const store = useProfileStore()

onMounted(() => {
  store.LoadProfileFromJSON()
})
    </script>
    