<template>


<div class="list_items">
            
            <template v-for="(item,i) in store.editList" :key="i">
                <div class="item_default"  
                
                >
                <div class="card_main_exp">
                    <div class=""
                    @click="scrollToElement(item.link)"
                    >{{item.name}}</div>
                </div>    
                </div>
            </template>
        </div>

</template>

<script setup>
import { useProfileStore } from '@/stores/profile'
const store = useProfileStore()


const scrollToElement = (link) => {
  let offset=10
  const element = document.getElementById(link);
  window.scrollTo({
    behavior: 'smooth',
    top: element.getBoundingClientRect().top - document.body.getBoundingClientRect().top - offset
  });
}


</script>