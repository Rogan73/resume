<template>
    <div class="card">
        <div class="card_content">
            
           
                <div class="" >
                    {{projects?.title}}
                </div>

                <div class="" >
                    {{projects?.subtitle}}
                </div>
                
                <div class="" >
                    {{projects?.body}}
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