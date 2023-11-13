<template>
    <div class="card">
        <div class="card_title">Name</div>
           <input name="name"   v-model="store.profile.MyName" />
           <div class="card_title">Professon</div>
           <input name="prof"   v-model="store.profile.profession"/>

     </div> 
</template>

<script setup>
import { useProfileStore } from '@/stores/profile'
const store = useProfileStore()
</script>