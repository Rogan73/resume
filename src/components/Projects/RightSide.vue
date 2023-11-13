<template>
    <div class="card_proj_body">
        <div class="card_content">
            
           
                <div class="" >
                    {{store?.selectedProject?.name}}
                </div>

                <div class="" >
                    {{store?.selectedProject?.description?.full_html}}
                </div>
                


        </div>

    </div>
</template>
   
<script setup>
import { useProjectsStore } from '../../stores/projects'
import { storeToRefs } from "pinia"
const store = useProjectsStore()
const { projects } = storeToRefs(store);

</script>