<template>
    <!-- <h1>This is EDIT page: {{ profile?.MyName }}</h1> -->
    <div class="edit">
      

         <div class="card">
           <div class="card_title">Name</div>
           <input name="name"   v-model="profile.MyName" />
           <div class="card_title">Professon</div>
           <input name="prof"   v-model="profile.profession"/>
        </div>


        <div class="card">
           <div class="card_title">Description</div>
           <textarea name="descr"   v-model="profile.descr"></textarea>
        </div>


        <div class="card">
           <div class="card_title">Contacts</div>
           <div class="grup">
            <div class="card_subsub lbl">Email</div> 
             <input name="email"   v-model="profile.email" />
           </div>

           <div class="grup">
             <div class="card_subsub lbl">Telegram</div>
             <input name="telegram"   v-model="profile.telegram"/>
           </div>

           <div class="grup">
             <div class="card_subsub lbl">Address</div>
             <input name="telegram"   v-model="profile.address"/>
           </div>

           <div class="grup">
             <div class="card_subsub lbl">Phone</div>
             <input name="telegram"   v-model="profile.tel"/>
           </div>           


        </div>        
        
    </div>
  </template>
  
<script setup>
 import { useProfileStore } from '@/stores/profile'
 import { storeToRefs } from "pinia"

 const store = useProfileStore()
 const { profile } = storeToRefs(store);


</script>

<style scoped>

.grup{
    width: 100%;
}
    .edit {
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 16px;
    }
</style>