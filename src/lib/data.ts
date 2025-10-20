import type { Module } from "@/types";

export const user = {
    name: 'Kofi Anan',
    email: 'kofi.anan@eduimmerse.gh',
    avatar: 'https://picsum.photos/id/237/100/100',
    fallback: 'KA',
};

export const modules: Module[] = [
  {
    id: '1',
    title: 'Cape Coast Castle Tour',
    description: 'Explore the historic Cape Coast Castle.',
    longDescription: "A deeply immersive journey into the Cape Coast Castle, a pivotal site in the trans-Atlantic slave trade. This module allows students to virtually walk through the dungeons, courtyards, and the infamous 'Door of No Return,' providing a powerful, context-rich historical lesson.",
    image: 'https://picsum.photos/seed/picsum1/600/400',
    imageHint: 'castle history',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    difficulty: 'Medium',
    learningObjectives: [
      'Understand the historical context of the slave trade in Ghana.',
      'Identify key areas within the Cape Coast Castle.',
      'Reflect on the human impact of the slave trade.',
    ],
    content: [
      { type: 'simulation', title: 'Castle Walkthrough', duration: 25 },
      { type: 'video', title: 'Historical Overview', duration: 10 },
      { type: 'quiz', title: 'Knowledge Check', duration: 5 },
    ],
  },
  {
    id: '2',
    title: 'Kakum National Park Canopy Walk',
    description: 'A virtual tour of Kakum National Park.',
    longDescription: "Journey through the lush rainforest of Kakum National Park. This module features a virtual canopy walk, interactive identification of native flora and fauna, and lessons on the importance of biodiversity and conservation in Ghana.",
    image: 'https://picsum.photos/seed/picsum2/600/400',
    imageHint: 'nature forest',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    difficulty: 'Easy',
    learningObjectives: [
      'Identify 5 native plant species.',
      'Describe the layers of a tropical rainforest.',
      'Understand the importance of conservation efforts.',
    ],
    content: [
      { type: 'simulation', title: 'Canopy Walk', duration: 20 },
      { type: 'quiz', title: 'Flora & Fauna ID', duration: 10 },
    ],
  },
  {
    id: '3',
    title: 'The Art of Kente Weaving',
    description: 'Learn the art of traditional Kente weaving.',
    longDescription: "Step into the vibrant world of Ashanti culture and learn the intricate art of Kente weaving. This hands-on simulation, co-created with artisans from Kumasi, guides students through the patterns and symbolism of this iconic Ghanaian textile.",
    image: 'https://picsum.photos/seed/picsum3/600/400',
    imageHint: 'fabric textile',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
    difficulty: 'Medium',
    learningObjectives: [
      'Recognize different Kente patterns and their meanings.',
      'Understand the basic steps of the weaving process.',
      'Appreciate the cultural significance of Kente cloth.',
    ],
     content: [
      { type: 'simulation', title: 'Virtual Weaving Loom', duration: 30 },
      { type: 'video', title: 'Symbolism in Kente', duration: 10 },
    ],
  },
  {
    id: '4',
    title: 'Adinkra: Wisdom in Symbols',
    description: 'Discover the wisdom in Adinkra symbols.',
    longDescription: "Explore the rich philosophical tradition of the Akan people through Adinkra symbols. This module allows students to interact with 3D models of the symbols, learn their meanings, and see how they are used in art and architecture.",
    image: 'https://picsum.photos/seed/picsum4/600/400',
    imageHint: 'symbol art',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    difficulty: 'Easy',
    learningObjectives: [
      'Identify 10 common Adinkra symbols and their meanings.',
      'Understand the historical origins of Adinkra.',
      'Create a virtual artifact using Adinkra symbols.',
    ],
    content: [
      { type: 'simulation', title: 'Symbol Gallery', duration: 15 },
      { type: 'quiz', title: 'Symbol Matching', duration: 5 },
      { type: 'simulation', title: 'Virtual Stamping', duration: 15 },
    ],
  },
    {
    id: '5',
    title: 'Makola Market Economics',
    description: 'Explore the bustling hub of commerce in Accra.',
    longDescription: "Dive into the vibrant atmosphere of Makola Market, one of West Africa's most famous commercial hubs. This module explores principles of microeconomics, supply and demand, and the cultural significance of market trading in Ghana.",
    image: 'https://picsum.photos/seed/picsum5/600/400',
    imageHint: 'market city',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    difficulty: 'Hard',
    learningObjectives: [
      'Analyze supply and demand in a real-world market.',
      'Understand the role of informal economies.',
      'Identify key goods and services traded in Makola Market.',
    ],
    content: [
      { type: 'simulation', title: 'Virtual Market Stall', duration: 30 },
      { type: 'video', title: 'A Day at Makola', duration: 15 },
      { type: 'quiz', title: 'Economic Principles', duration: 10 },
    ],
  },
  {
    id: '6',
    title: 'Aboakyer Festival of the Effutu',
    description: 'Witness the traditional deer hunting festival.',
    longDescription: "Experience the Aboakyer festival, an ancient and vibrant tradition of the Effutu people in Winneba. This module explores the history, rituals, and communal aspects of the festival, including the dramatic deer hunt competition between two warrior groups.",
    image: 'https://picsum.photos/seed/picsum6/600/400',
    imageHint: 'festival culture',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4',
    difficulty: 'Medium',
    learningObjectives: [
      'Understand the historical origins of the Aboakyer festival.',
      'Describe the key events and rituals of the festival.',
      'Appreciate the role of tradition in modern Ghanaian society.',
    ],
    content: [
      { type: 'simulation', title: 'Festival Grounds Exploration', duration: 25 },
      { type: 'video', title: 'The Deer Hunt', duration: 10 },
      { type: 'quiz', title: 'Festival Facts', duration: 10 },
    ],
  },
];

export const recentModules = modules.slice(0, 4);
