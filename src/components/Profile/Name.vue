<template>
    <div class="card">
        <div class="card_content">
            <img class="card_img" src="pics/profile.png" alt="">
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
import { ref, onMounted,computed} from 'vue'
import { useProfileStore } from '../../stores/profile'
import { storeToRefs } from "pinia";
const store = useProfileStore()
const { profile } = storeToRefs(store);





</script>