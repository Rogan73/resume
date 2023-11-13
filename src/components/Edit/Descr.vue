<template>
    <div class="card">
        <div class="card_title">Description</div>
           <textarea name="descr"   v-model="store.profile.descr"></textarea>
    </div> 
</template>

<script setup>
import { useProfileStore } from '@/stores/profile'
const store = useProfileStore()
</script>