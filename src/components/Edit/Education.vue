<template>
    <div class="card">


        <div class="flex_line">
                  <div class="">Education</div>
                  <div class="btn add" @click="store.AddEd()">Add</div>  
         </div>  

            <template v-for=" (item,i) in store.profile?.education" :key="i">
            <div class="grup_row_ed"  v-if="item.name!=''">

                <div class="grup">
                    <div class="card_subsub lbl">Title</div>
                    <input name="ed_title"   v-model="item.title"/>
                </div>

                <div class="grup">
                    <div class="card_subsub lbl">Description</div>
                    <textarea name="ed_descr"   v-model="item.description"></textarea> 
                </div>

            <div class="flex_line">
                <div class="grup">
                    <div class="card_subsub lbl">Period</div>
                    <input name="ed_period"   v-model="item.period"/>
                </div>

                <div class="ed_del">
                  <div 
                   class="btn_del"
                   @click = "store.DelEd(i)"
                   >
                   <span class="material-symbols-outlined">close</span></div>
               </div>

            </div>

            </div>
            <div class="line"></div>

            </template>

    </div> 
</template>

<script setup>
import { useProfileStore } from '@/stores/profile'
const store = useProfileStore()
</script>