import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProfileStore = defineStore('profile', () => {
  const profile = ref(
    {
      MyName: 'Oleksandr Rohan',
      profession: 'Software Developer',
      dateOfBirth: '1973-04-11',
      address: 'Spain, Valencia',
      email: "rogan73@ukr.net",
      telegram: 't.me/OlexandrRohan',
      descr: "Adept at design thinking, I love studying and analyzing applications. I believe that design is the ability to fit into the user's shoes",
    }
  )

  
  return { profile }
})
