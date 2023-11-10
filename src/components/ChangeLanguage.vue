<template>
       <div class="custom-select">
        
          <select class="listItems" v-model="store.SelectedLang" name="listLang">
            <option v-for="(item,i) in store.langs" :key="i">{{ item }}</option>
          </select>

        </div>


</template>


<script setup>
import { useProfileStore } from '../stores/profile'
const store = useProfileStore()

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

