<template>

    <h2>AUTH</h2>
    <input type="text" name="UserId" v-model="CurUserId">    
    <button class="btn" @click="SetAuth()">Login</button>

</template>

<script setup>
import { ref } from 'vue'
import { useProfileStore } from '../stores/profile'
const store = useProfileStore()
const CurUserId = ref('001')

const SetAuth = () => {
    store.SetAuth(CurUserId.value)
}

</script>