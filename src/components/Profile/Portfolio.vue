<template>
    <div class="card">
        <div class="card_subheader">
                    Portfolio
        </div>


        <div class="card_content">
            <div class="pic">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="50px" height="50px"><g fill="gray" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M38,3h-26c-4.963,0 -9,4.037 -9,9v26c0,4.963 4.037,9 9,9h26c4.963,0 9,-4.037 9,-9v-26c0,-4.963 -4.037,-9 -9,-9zM24.407,10.16c0.183,-0.107 0.388,-0.16 0.593,-0.16c0.205,0 0.41,0.053 0.593,0.16l12.465,6.608l-13.057,6.932l-13.044,-6.94zM11.548,32.613c-0.341,-0.211 -0.548,-0.581 -0.548,-0.978v-13.119l13,6.916v14.178zM38.452,32.613l-12.452,6.997v-14.177l13,-6.901v13.102c0,0.398 -0.207,0.768 -0.548,0.979z"></path></g></g></svg>
            </div>

            <div class="card_main">
                <div class="card_subsub">Projects</div>
                <RouterLink to="/projects">{{profile?.portfolio}}</RouterLink>
                
            </div>
        </div>
    </div>
</template>
   
<script setup>
import { useProfileStore } from '../../stores/profile'
import { storeToRefs } from "pinia"
const store = useProfileStore()
const { profile } = storeToRefs(store);
</script>