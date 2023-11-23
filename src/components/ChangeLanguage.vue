<template>
       <div class="custom-select">
        
          <select class="listItems" v-model="store.SelectedLang" name="listLang" @change="store.ChangeLang()" >
            <option v-for="(item,i) in langs" :key="i"
            >{{ item.code }}</option>
          </select>

        </div>


</template>


<script setup>
import { ref,onMounted } from "vue";
import {getSelectedLanguage,getLanguages} from "vui18n"
import { useProfileStore } from '../stores/profile'
const store = useProfileStore()
let langs = ref(getLanguages())
 

onMounted(() => {
  let {code}=getSelectedLanguage()
  store.SelectedLang = code
})

</script>

<style scoped>



.listItems{
    background: var(--surface-bg-secondary, #27272A);
    color: var(--text-text-secondary, #A1A1A9);
    padding: 6px;
    border-radius: 8px;
    margin-right: 10px;
    border: 0;

}

.listItems:active, .listItems:focus-visible{
    outline: 0;
}





</style>

