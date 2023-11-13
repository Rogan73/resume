<template>
   <div class="au">
    <h2>AUTH</h2>
    <input type="text" name="UserId" v-model="CurUserId">    
    <div class="flex_end">
      <button class="btn" @click="SetAuth()">Login</button>
      <button class="btn" @click="SetLogout()">Logout</button>
    </div>
  </div>

</template>

<script setup>
import { ref } from 'vue'
import { useProfileStore } from '../stores/profile'
const store = useProfileStore()
const CurUserId = ref('001')

const SetAuth = () => {
    store.SetAuth(CurUserId.value)
}

const SetLogout = () => {
    store.SetLogout()
}

</script>

<style>
.au{
    width: 300px;
}

.flex_end{
    display: flex;
    justify-content: space-between;
}

</style>