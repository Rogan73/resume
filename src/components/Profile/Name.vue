<template>
    <div class="card">
        <div class="card_content">
            <img class="card_img" src="pics/profile.png" alt="">
            <div class="card_main">
                <div class="card_header">
                    {{ store.profile.MyName }}
                </div>
                <div class="card_subheader">
                    {{ store.profile.profession }}
                </div>
            </div>
        </div>
    </div>
</template>
   
<script setup>
import { useProfileStore } from '../../stores/profile'
const store = useProfileStore()

</script>