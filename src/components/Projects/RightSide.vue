<template>
    <div class="card_proj_body">
        <div class="card_content">
            
           
                <div class="" >
                    {{store?.selectedProject?.name}}
                </div>

                <div class="" v-html="store?.selectedProject?.description?.full_html">
                    
                </div>




        </div>



    </div>
</template>
   
<script setup>

import { useProfileStore } from '../../stores/profile'
//import { storeToRefs } from "pinia"
const store = useProfileStore()
//const { projects } = storeToRefs(store);




</script>