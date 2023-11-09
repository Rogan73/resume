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
      portfolio:"RikoSoft",
      langs: [
        {
          name: 'Ukranian',
          level: 'Native'
        },
        {
          name: 'Russian',
          level: 'Native'
        },
        {
          name: 'Spainsh',
          level: 'B2'
        },

        {
          name: 'English',
          level: 'Read docs'
        },

      ],
      education: [
        {
         title: 'Academy',
         description: 'Advertising and public relations specialist'
        },
        {
          title: 'Academy2',
          description: 'Advertising and public relations specialist'
         },
         {
          title: 'Academy3',
          description: 'Advertising and public relations specialist'
         },
  
      ],
      experiense: [
        {
          pic: '',
          title: 'Senior Product Designer',
          description: 'NDA - (cryptocurrency betting, gambling)',
          tasks: [
            'I am responsible for the entire product design',
            'Designing cross-platform interfaces',
            'Interaction with productologists and managers',
            'Creating a design system from scratch',
            'Building a workflow through Agile and SCRUM methodologies',
            'Demo, revue, retro'
          ],
          location: 'Kiev',
          period: 'January 2023 - present'
        },

        {
          pic: '',
          title: 'Senior Product Designer',
          description: 'NDA - (cryptocurrency betting, gambling)',
          tasks: [
            'I am responsible for the entire product design',
            'Designing cross-platform interfaces',
            'Interaction with productologists and managers',
            'Creating a design system from scratch',
            'Building a workflow through Agile and SCRUM methodologies',
            'Demo, revue, retro'
          ],
          location: 'Kiev',
          period: 'January 2023 - present'
        },
        
        {
          pic: '',
          title: 'Senior Product Designer',
          description: 'NDA - (cryptocurrency betting, gambling)',
          tasks: [
            'I am responsible for the entire product design',
            'Designing cross-platform interfaces',
            'Interaction with productologists and managers',
            'Creating a design system from scratch',
            'Building a workflow through Agile and SCRUM methodologies',
            'Demo, revue, retro'
          ],
          location: 'Kiev',
          period: 'January 2023 - present'
        },
        
        {
          pic: '',
          title: 'Senior Product Designer',
          description: 'NDA - (cryptocurrency betting, gambling)',
          tasks: [
            'I am responsible for the entire product design',
            'Designing cross-platform interfaces',
            'Interaction with productologists and managers',
            'Creating a design system from scratch',
            'Building a workflow through Agile and SCRUM methodologies',
            'Demo, revue, retro'
          ],
          location: 'Kiev',
          period: 'January 2023 - present'
        },        
      ]


    }
  )

  
  return { profile }
})
