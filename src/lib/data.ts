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
    title: 'Cape Coast Castle: A Walk Through History',
    description: 'Explore the haunting history of the trans-Atlantic slave trade.',
    longDescription: "A deeply immersive journey into the Cape Coast Castle, a pivotal site in the trans-Atlantic slave trade. This module allows students to virtually walk through the dungeons, courtyards, and the infamous 'Door of No Return,' providing a powerful, context-rich historical lesson.",
    image: 'https://picsum.photos/seed/picsum1/600/400',
    imageHint: 'castle history',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
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
    description: 'Experience the biodiversity of a Ghanaian rainforest.',
    longDescription: "Journey through the lush rainforest of Kakum National Park from a breathtaking perspective. This module features a virtual canopy walk, interactive identification of native flora and fauna, and lessons on the importance of biodiversity and conservation in Ghana.",
    image: 'https://picsum.photos/seed/picsum2/600/400',
    imageHint: 'nature forest',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    difficulty: 'Easy',
    learningObjectives: [
      'Identify 5 native plant species from the canopy.',
      'Describe the layers of a tropical rainforest.',
      'Understand the importance of Ghanaian conservation efforts.',
    ],
    content: [
      { type: 'simulation', title: 'Virtual Canopy Walk', duration: 20 },
      { type: 'quiz', title: 'Flora & Fauna ID', duration: 10 },
    ],
  },
  {
    id: '3',
    title: 'The Art of Kente Weaving',
    description: 'Learn the craft of traditional Ashanti Kente weaving.',
    longDescription: "Step into the vibrant world of Ashanti culture and learn the intricate art of Kente weaving. This hands-on simulation, co-created with artisans from Adanwomase, guides students through the patterns and symbolism of this iconic Ghanaian textile.",
    image: 'https://picsum.photos/seed/picsum3/600/400',
    imageHint: 'fabric textile',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
    difficulty: 'Medium',
    learningObjectives: [
      'Recognize different Kente patterns and their meanings.',
      'Understand the basic steps of the weaving process on a traditional loom.',
      'Appreciate the cultural significance of Kente cloth.',
    ],
     content: [
      { type: 'simulation', title: 'Virtual Weaving Loom', duration: 30 },
      { type: 'video', title: 'Symbolism in Kente', duration: 10 },
    ],
  },
  {
    id: '4',
    title: 'The Wisdom of Adinkra Symbols',
    description: 'Discover the philosophy behind traditional Adinkra symbols.',
    longDescription: "Explore the rich philosophical tradition of the Akan people through Adinkra symbols. This module allows students to interact with 3D models of the symbols, learn their meanings, and see how they are used in art, architecture, and fabric stamping.",
    image: 'https://picsum.photos/seed/picsum4/600/400',
    imageHint: 'symbol art',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    difficulty: 'Easy',
    learningObjectives: [
      'Identify 10 common Adinkra symbols and their meanings.',
      'Understand the historical origins of Adinkra printing.',
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
    title: 'The Making of Ghanaian Chocolate',
    description: 'From cocoa bean to chocolate bar.',
    longDescription: "Follow the journey of Ghana's most famous export. This module takes you to a cocoa farm to see how beans are harvested and fermented, then to a factory to witness the process of turning cocoa into delicious chocolate.",
    image: 'https://picsum.photos/seed/picsum5/600/400',
    imageHint: 'chocolate cocoa',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnAnAdventure.mp4',
    difficulty: 'Medium',
    learningObjectives: [
      'Describe the lifecycle of a cocoa pod.',
      'Understand the key stages of chocolate production.',
      'Appreciate the economic importance of cocoa for Ghana.',
    ],
    content: [
      { type: 'simulation', title: 'Cocoa Farm Visit', duration: 20 },
      { type: 'video', title: 'Chocolate Factory Tour', duration: 15 },
      { type: 'quiz', title: 'Bean-to-Bar Process', duration: 10 },
    ],
  },
  {
    id: '6',
    title: 'Akosombo Dam & Hydroelectric Power',
    description: 'Explore the engineering marvel of the Akosombo Dam.',
    longDescription: "Visit one of Africa's largest hydroelectric dams. This module explores the engineering behind the Akosombo Dam, its impact on creating Lake Volta (the world's largest artificial lake), and how it generates electricity for Ghana.",
    image: 'https://picsum.photos/seed/picsum6/600/400',
    imageHint: 'dam water',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4',
    difficulty: 'Hard',
    learningObjectives: [
      'Explain the basic principles of hydroelectric power.',
      'Describe the construction and scale of the Akosombo Dam.',
      'Understand the dam\'s social and economic impact on Ghana.',
    ],
    content: [
      { type: 'simulation', title: 'Dam & Turbine Explorer', duration: 25 },
      { type: 'video', title: 'History of the Volta River Project', duration: 15 },
    ],
  },
];

export const recentModules = modules.slice(0, 4);
