<template>
       <div class="card">
               <div class="flex_line">
                  <div class="">Languages</div>
                  <div class="btn add" @click="store.AddLang()">Add</div>  
               </div>  
               <template v-for=" (item,i) in store.profile?.langs" :key="i">
                 <div class="grup_row" v-if="item.name!=''">
                   <div class="grup">
                      <div class="card_subsub lbl">Name</div>
                      <input name="lang_name"   v-model="item.name"/>
                   </div>

                   <div class="grup">
                      <div class="card_subsub lbl">Level</div>
                      <input name="lang_level"   v-model="item.level"/>
                   </div>
                   <div class="grup_del">
                   <div 
                   class="btn_del"
                   @click = "store.DelLang(i)"
                   >
                     <span class="material-symbols-outlined">close</span></div>
                  </div>
                </div>
                  <div class="line"></div>

               </template>

        </div> 
</template>

<script setup>
 import { useProfileStore } from '@/stores/profile'
 //import { storeToRefs } from "pinia"
 const store = useProfileStore()
 //const { profile } = storeToRefs(store);
</script>