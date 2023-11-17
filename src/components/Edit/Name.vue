<template>
    <div class="card">
        <div class="card_title">{{t('FIO')}}</div>
           <input name="name"   v-model="store.profile.MyName" />
           <div class="card_title">{{t('Professon')}}</div>
           <input name="prof"   v-model="store.profile.profession"/>

     </div> 
</template>

<script setup>
import { t } from "vui18n"
import { useProfileStore } from '@/stores/profile'
const store = useProfileStore()
</script>