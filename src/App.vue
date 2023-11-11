

<template>
  <div class="header">
    
      <div class="nav">


        <div class="items" >
          <RouterLink :to=" `/?id=${store.userId}`">Resume</RouterLink>
          <RouterLink :to="`/projects?id=${store.userId}`">Projects</RouterLink>
          <RouterLink :to="`/edit?id=${store.userId}`">Edit</RouterLink>
        </div>

        <ChangeLanguage />
        
      </div>
   
  </div>

  <div class="pages">
     <RouterView  />
  </div>

</template>


<script setup>

import { RouterLink, RouterView } from 'vue-router'
import ChangeLanguage from './components/ChangeLanguage.vue'
import {onMounted} from 'vue'

 import { useProfileStore } from './stores/profile'
// import { storeToRefs } from "pinia";
 const store = useProfileStore()

// const { profile } = storeToRefs(store);




onMounted(() => {
  store.LoadProfileFromJSON()
})


</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}


nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
