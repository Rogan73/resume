<template>
    <div class="card">
        <div class="card_subheader">
            {{t('Skills')}}
        </div>

       
  <div class="card_subsub text_center">Name / Level / Years</div>

        <div class="w100">

            <div v-for="(item,i) in profile?.skills" :key="i">

               <div class="card_main_line">
                     <div class="col1">
                       <div class="col ">{{item.name}}</div>
                     </div>
                    <div class="col card_subheader">{{item.level}}</div>
                    <div class="col card_subheader">{{item.years}}</div>
               </div>
                <div class="line" ></div>
             </div>
        </div>
    </div>
</template>
   
<script setup>
import { t } from "vui18n"
import { useProfileStore } from '../../stores/profile'
import { storeToRefs } from "pinia"
const store = useProfileStore()
const { profile } = storeToRefs(store);
</script>