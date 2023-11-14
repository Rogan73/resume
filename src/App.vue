

<template>
  <div class="header">
    
      <div class="nav">
          
        <div class="items" >
          <RouterLink :to="`/`">{{t('Home')}}</RouterLink>
          <template v-if="store.AuthUserId!=''" >
            <RouterLink :to="`/profile?id=${store.AuthUserId}`" >{{t('Resume')}}</RouterLink>
            <RouterLink :to="`/projects?id=${store.AuthUserId}`">{{t('Projects')}}</RouterLink>
          </template>

          <template v-else >
            <template v-if="store.userId!=''">
              <RouterLink :to="`/profile?id=${store.userId}`" >{{t('Resume')}}</RouterLink>
              <RouterLink :to="`/projects?id=${store.userId}`">{{t('Projects')}}</RouterLink>
            </template>
          </template>



          <template v-if="store.authorization">
            <RouterLink :to="`/edit?id=${store.AuthUserId}`">{{t('Edit')}}</RouterLink>
          </template>
        </div>
               
         <div>{{ store.AuthUserId }}</div>

        <ChangeLanguage />
        
      </div>
   
  </div>

  <div class="pages">
     <RouterView  />
  </div>

</template>


<script setup>
import { t } from "vui18n"
import { RouterLink, RouterView } from 'vue-router'
import ChangeLanguage from './components/ChangeLanguage.vue'
import { useProfileStore } from './stores/profile'
import { onMounted } from 'vue'
const store = useProfileStore()



onMounted(() => {
  store.LoadProfileFromJSON()
})

</script>

<style lang="scss" scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}


nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
   & a:first-of-type {
      border: 0;
     }
   
   & a:first-of-type {
    border: 0;
    }

   & a{
     display: inline-block;
     padding: 0 1rem;
     border-left: 1px solid var(--color-border);
    }

   & a.router-link-exact-active{
     color: var(--color-text);
     
     &:hover{
      background-color: transparent;    
     }
   }  

}

/*nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}
*/

/*
nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}



nav a:first-of-type {
  border: 0;
}

*/

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
