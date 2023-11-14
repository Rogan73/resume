//import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { initLanguage } from "vui18n"
import en from "./languages/en.json";
import uk from "./languages/uk.json";


import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'



initLanguage({
    persistLocalstorage: true,
    setLanguage: "en",
    defaultLanguage: "en",
    defaultTranslation: "-",
    languages: [
      {
        code: "en",
        file: en,
      },
    //   {
    //     code: "ru",
    //     file: "/languages/ru.json", Lazy не проходит
    //   },
      {
        code: "uk",
        file: uk,
      },



    ],
  })



const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('QuillEditor', QuillEditor)

app.mount('#app')
