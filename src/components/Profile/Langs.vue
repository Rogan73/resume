<template>
    <div class="card">
        <div class="card_subheader">
            Languages
        </div>


        <div class="card_content sp_ar">

            <div v-for="(item,i) in store.profile.langs" :key="i">

              <div class="card_main">
                <div class="">{{item.name}}</div>
                <div class="card_subheader">{{item.level}}</div>
               </div>
                <div class="line" ></div>
             </div>
        </div>
    </div>
</template>
   
<script setup>
import { useProfileStore } from '../../stores/profile'
const store = useProfileStore()

</script>