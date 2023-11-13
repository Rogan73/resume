<template>
  
    <div class="LeftSideEdit">
      <LeftSideEdit/>
    </div>

    <div class="columns">

    <div class="RightSideEdit">
      
        <div class="edit">

            <Name id="el_ed_main"/>
            <Descr id="el_ed_descr"/>
            <Contacts id="el_ed_contacts"/>
            <Portfolio id="el_ed_portfolio"/>
            <Langs id="el_ed_langs"/>
            <Education id="el_ed_education"/> 

        </div>

    </div>
  </div> 

  </template>
  
<script setup>
import LeftSideEdit from '@/components/Edit/LeftSideEdit.vue'
import Langs from '@/components/Edit/Langs.vue'
import Name from '@/components/Edit/Name.vue'
import Descr from '@/components/Edit/Descr.vue'
import Contacts from '@/components/Edit/Contacts.vue'
import Portfolio from '@/components/Edit/Portfolio.vue'
import Education from '@/components/Edit/Education.vue'


 import { useProfileStore } from '@/stores/profile'
 import { storeToRefs } from "pinia"

 const store = useProfileStore()
 const { profile } = storeToRefs(store);


</script>

<style scoped>



.line{
  width: 100%;
  display: block;
  height: 1px;
  background-color: var(--color-line);

}






</style>