<template>
    <div class="card">
        <div class="card_content">
            <img class="card_img" :src="`profiles/${store.userId}/profile.png`" alt="">
            <div class="card_main">
                <div class="card_header">
                    {{ profile?.MyName }} 
                </div>
                <div class="card_subheader">
                    {{ profile?.profession }} 
                     
                </div>
            </div>
        </div>
    </div>
</template>
   
<script setup>

import { useProfileStore } from '../../stores/profile'
// import { storeToRefs } from "pinia";
// const store = useProfileStore()
// const { profile } = storeToRefs(store);

import { mxProfile } from '@/mixins/mxProfile';
const { profile } = mxProfile();
const store = useProfileStore();


</script>