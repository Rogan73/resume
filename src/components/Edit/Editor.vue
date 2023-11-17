<template>
    
    <div class="card">
        <div class="card_title">{{t('Editor')}}</div>
        <QuillEditor theme="snow"   v-model:content="editor"/>
        <!-- :modules="modules" -->


       <div class="">
       {{ editor }}
       </div>

    </div>



</template>

<script setup>
import { t } from "vui18n"
import {ref} from 'vue'
import { useProfileStore } from '@/stores/profile'

import { QuillEditor as QuillEditor2 } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'

 //import { storeToRefs } from "pinia"
 // const { selectedProject } = storeToRefs(store);


const store = useProfileStore()

const modules=[
    {
        name:'quill-better-table',
        module: 'quill-better-table'
    },
    {
        name:'quill-html-edit-button',
        module: 'quill-html-edit-button'
    },
]




const editor =ref()


</script>

<style>

.ql-container, .ql-toolbar{
    width: 100%;
    border: 1px solid var(--color-line) !important;
}

</style>