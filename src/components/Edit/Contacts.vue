<template>
    <div class="card">


        <div class="card_title">{{t('Contacts')}}</div>
           <div class="grup">
            <div class="card_subsub lbl">Email</div> 
             <input name="email"   v-model="store.profile.email" />
           </div>

           <div class="grup">
             <div class="card_subsub lbl">Telegram</div>
             <input name="telegram"   v-model="store.profile.telegram"/>
           </div>

           <div class="grup">
             <div class="card_subsub lbl">{{t('Address')}}</div>
             <input name="telegram"   v-model="store.profile.address"/>
           </div>

           <div class="grup">
             <div class="card_subsub lbl">{{t('Phone')}}</div>
             <input name="telegram"   v-model="store.profile.tel"/>
           </div>   


    </div> 
</template>

<script setup>
import { t } from "vui18n"
import { useProfileStore } from '@/stores/profile'
const store = useProfileStore()
</script>