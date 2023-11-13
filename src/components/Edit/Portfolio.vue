<template>
    <div class="card">


        <div class="">Portfolio</div>
           <div class="grup">
               <div class="card_subsub lbl">Projects</div> 
               <input name="email"   v-model="store.profile.portfolio" />
           </div>
        </div>




</template>

<script setup>
import { useProfileStore } from '@/stores/profile'
const store = useProfileStore()
</script>