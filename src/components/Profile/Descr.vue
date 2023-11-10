<template>
    <div class="card">
        <div class="card_content">
            
            <div class="card_main">
                {{profile?.descr}}
            </div>
        </div>
        <div class="quotes">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
            <path d="M15.2549 22.2119C12.1176 22.2119 10 20.0281 10 16.7928C10 13.881 12.4314 11.4545 15.7255 11.4545C19.3333 11.4545 22 14.3663 22 18.8148C22 28.9251 14.6275 32.9692 10 33.4545V29.006C13.1373 28.4398 16.6667 25.2854 16.8235 21.8075C16.6667 21.8884 16.0392 22.2119 15.2549 22.2119Z" fill="#A1A1A9"/>
            <path d="M31.2549 22.2119C28.1176 22.2119 26 20.0281 26 16.7928C26 13.881 28.4314 11.4545 31.7255 11.4545C35.3333 11.4545 38 14.3663 38 18.8148C38 28.9251 30.6275 32.9692 26 33.4545V29.006C29.1373 28.4398 32.6667 25.2854 32.8235 21.8075C32.6667 21.8884 32.0392 22.2119 31.2549 22.2119Z" fill="#A1A1A9"/>
            </svg>
        </div>
    </div>
</template>
   
<script setup>
import { useProfileStore } from '../../stores/profile'
import { storeToRefs } from "pinia"
const store = useProfileStore()
const { profile } = storeToRefs(store);
</script>