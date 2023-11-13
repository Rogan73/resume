<template>
    <div class="card_proj">
        <div class="list_items">
            
            <template v-for="(item,i) in store.projects" :key="i">
                <div class="item_default"  
                :class="{'item_active': store?.selectedProject?.id == item.id}"
                @click="store.selProject(item)">
                       
                <div class="rpic_exp" :style="{'background-color': item.icon.color}" >
                    <span class="material-symbols-outlined">{{item.icon.name}} </span> 
                </div>
                
                <div class="card_main_exp">
                    <div class="">{{item.name}}</div>
                    <div class="card_subsub">{{item.description.short}}</div>
                </div>    


                </div>
            </template>
        </div>

    </div>
</template>
   
<script setup>
import { useProjectsStore } from '../../stores/projects'
//import { storeToRefs } from "pinia"
const store = useProjectsStore()
//const { projects } = storeToRefs(store);



</script>

<style scoped>


</style>