<template>
    <div class="card">
        <div class="card_content">
            
            <div class="card_main">
                {{store.profile.descr}}
            </div>
        </div>
    </div>
</template>
   
<script setup>
import { useProfileStore } from '../../stores/profile'
const store = useProfileStore()

</script>