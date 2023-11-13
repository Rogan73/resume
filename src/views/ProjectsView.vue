<template>
  <div class="projects">
    
    <div class="LeftSideProjects">
      <LeftSideProjects/>
    </div>

    <div class="RightSideProjects">
      <RightSideProjects/>
    </div>


  </div>
</template>

<script setup>
import  LeftSideProjects from '../components/Projects/LeftSide.vue'
import  RightSideProjects from '../components/Projects/RightSide.vue'
import {onMounted} from 'vue'
import { useProjectsStore } from '../stores/projects'

const store = useProjectsStore()

onMounted(() => {
  store.loadProjects()
})

</script>

<style>

</style>

