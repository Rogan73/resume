<template>
    <div class="card">


        <div class="">{{t('Portfolio')}}</div>
           <div class="grup">
               <div class="card_subsub lbl">{{t('Projects')}}</div> 
               <input name="email"   v-model="store.profile.portfolio" />
           </div>
        </div>




</template>

<script setup>
import { t } from "vui18n"
import { useProfileStore } from '@/stores/profile'
const store = useProfileStore()
</script>