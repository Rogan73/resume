<template>

<div class="TitleBox">
    <div class="TitleText">Experience </div>
    <!-- ({{ store.userId }}) {{ store.SelectedLang }} -->
</div>

<div class="card_exp" v-for="(item,i) in profile?.experiense" :key="i">



    <div class="card_content" >

      
        <div class="rpic_exp" :style="{'background-color': item.iconColor}" >

       <span class="material-symbols-outlined">{{item.icon}} </span>

          </div>


            <div class="card_main_exp">
                
                <div class="">{{item.title}}</div>
                <div class="card_subsub">{{item.description}}</div>
                <div class="bold">My tasks:</div>
                <ul class="tasks">
                    <li class="task" v-for="(item2,j) in item.tasks" :key="j">
                    {{item2}}
                    </li>
                </ul>
            </div>
    </div>

    <div class="footer">
      <div class="location">
       <div class="i_sm">
        <!-- <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8 2.00002C6.76232 2.00002 5.57534 2.49169 4.70017 3.36686C3.825 4.24202 3.33333 5.42901 3.33333 6.66669C3.33333 8.40333 4.51365 10.2411 5.83161 11.7238C6.47495 12.4475 7.12036 13.0528 7.60567 13.4775C7.75412 13.6074 7.88715 13.72 8 13.8135C8.11285 13.72 8.24588 13.6074 8.39433 13.4775C8.87964 13.0528 9.52505 12.4475 10.1684 11.7238C11.4864 10.2411 12.6667 8.40333 12.6667 6.66669C12.6667 5.42901 12.175 4.24202 11.2998 3.36686C10.4247 2.49169 9.23768 2.00002 8 2.00002ZM8 14.6667C7.6 15.2 7.59985 15.1999 7.59969 15.1998L7.59925 15.1995L7.59802 15.1985L7.59411 15.1956L7.58061 15.1853C7.56912 15.1766 7.55272 15.164 7.53172 15.1477C7.48974 15.1152 7.42937 15.0678 7.35324 15.0067C7.20103 14.8844 6.98548 14.7065 6.72766 14.4809C6.21297 14.0306 5.52505 13.3858 4.83506 12.6096C3.48635 11.0923 2 8.93004 2 6.66669C2 5.07539 2.63214 3.54926 3.75736 2.42405C4.88258 1.29883 6.4087 0.666687 8 0.666687C9.5913 0.666687 11.1174 1.29883 12.2426 2.42405C13.3679 3.54926 14 5.07539 14 6.66669C14 8.93004 12.5136 11.0923 11.1649 12.6096C10.4749 13.3858 9.78703 14.0306 9.27234 14.4809C9.01452 14.7065 8.79897 14.8844 8.64676 15.0067C8.57063 15.0678 8.51026 15.1152 8.46828 15.1477C8.44728 15.164 8.43088 15.1766 8.41939 15.1853L8.40589 15.1956L8.40198 15.1985L8.40074 15.1995L8.40031 15.1998C8.40015 15.1999 8.4 15.2 8 14.6667ZM8 14.6667L8.4 15.2C8.16296 15.3778 7.83704 15.3778 7.6 15.2L8 14.6667Z" fill="#A1A1A9"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00004 5.33333C7.26366 5.33333 6.66671 5.93029 6.66671 6.66667C6.66671 7.40305 7.26366 8 8.00004 8C8.73642 8 9.33337 7.40305 9.33337 6.66667C9.33337 5.93029 8.73642 5.33333 8.00004 5.33333ZM5.33337 6.66667C5.33337 5.19391 6.52728 4 8.00004 4C9.4728 4 10.6667 5.19391 10.6667 6.66667C10.6667 8.13943 9.4728 9.33333 8.00004 9.33333C6.52728 9.33333 5.33337 8.13943 5.33337 6.66667Z" fill="#A1A1A9"/>
        </svg> -->
        <span class="material-symbols-outlined i_gray i_sm">location_on</span>
       </div>

       <div class="footer_text">
           {{ item.location }}
       </div>

    </div>

      <div class="footer_text">
        {{ item.period }}
      </div>     

    </div>

</div>


</template>

<script setup>
import { useProfileStore } from '../stores/profile'
import { storeToRefs } from "pinia"
const store = useProfileStore()
const { profile } = storeToRefs(store);
</script>