const BIRTHDAY_DATA = {

  // ── BIRTHDAY GIRL ──────────────────────────────────────────
  name: "Yashika",
  age: 15,
  heroPhoto: "./images/1st bday.png",

  // ── ENVELOPE SCENE ────────────────────────────────────────
  envelope: {
    to: "Yashika",
    tagline: "Open when you're ready…",
    buttonLabel: "Open Your Memories ✉️",
  },

  // ── BIRTHDAY REVEAL ────────────────────────────────────────
  reveal: {
    subtitle: "15 looks pretty amazing on you.",
    subtext: "And this is just the beginning…",
    scrollPrompt: "There's something waiting for you…",
    scrollCTA: "Scroll to Begin",
  },

  // ── INTRO MESSAGE ─────────────────────────────────────────
  intro: {
    title: "A million memories.",
    text: [
      "Before you get to the cake and presents,",
      "we wanted to take you on a little trip down memory lane.",
      "Because every year you've been here, the world has gotten a little brighter.",
      "Here's your story so far…"
    ]
  },

  // ── TIMELINE: CHAPTERS OF HER LIFE ─────────────────────────
  chapters: [
    {
      year: "2011",
      age: "0",
      emoji: "🍼",
      accent: "#f48fb1",
      title: "The Beginning",
      photo: "./images/day1.jpg",
      story: "You arrived and instantly made the world softer. You were the most alert, curious baby, always watching everything around you."
    },
    {
      year: "2014",
      age: "3",
      emoji: "🧸",
      accent: "#ffcc80",
      title: "Tiny Human, Huge Personality",
      photo: "./images/2yr.png",
      story: "This was the era of your favorite stuffed bunny, refusing to wear shoes, and asking 'why?' about literally everything."
    },
    {
      year: "2015",
      age: "4",
      emoji: "🖍️",
      accent: "#80cbc4",
      title: "The Artist Emerges",
      photo: "./images/3yrs.jpg",
      story: "You discovered markers. Our walls were never the same. You were fearless, creative, and completely unapologetic."
    },
    {
      year: "2016",
      age: "5",
      emoji: "🎒",
      accent: "#ce93d8",
      title: "First Day of School",
      photo: "./images/5yrs.jpg",
      story: "You marched into kindergarten like you owned the place. We cried; you didn't even look back."
    },
    {
      year: "2017",
      age: "10",
      emoji: "🦋",
      accent: "#90caf9",
      title: "Growing Up Fast",
      photo: "./images/10th.png",
      story: "Missing teeth, scraped knees, and the loudest laugh in the world. You started becoming exactly who you are today."
    },
    {
      year: "2024",
      age: "13",
      emoji: "💫",
      accent: "#f48fb1",
      title: "The Teenage Years Begin",
      photo: "./images/13th.png",
      story: "Suddenly you were taller, smarter, and somehow even more beautiful. You handled the transition with so much grace."
    },
    {
      year: "2026",
      age: "15",
      emoji: "👑",
      accent: "#aed581",
      title: "Here We Are",
      photo: "./images/12th.png",
      story: "Fifteen years of you. We are so incredibly proud of the kind, smart, fierce young woman you are becoming."
    }
  ],

  // ── FAMILY MESSAGES ────────────────────────────────────────
  family: {
    title: "Family",
    subtitle: "A few words from the people who have been there since day one.",
    members: [
      {
        emoji: "❤️",
        name: "Mumma",
        photo: "./images/mom and yashi 1.png", // Add your Mom's photo file path here
        message: "You are the best thing that ever happened to us. Watching you grow has been the greatest honour of my life. Happy birthday, my love."
      },
      {
        emoji: "💙",
        name: "Papa",
        photo: "./images/papa.png", // Add your Dad's photo file path here
        message: "Fifteen years of making me the proudest dad alive. You're going to do incredible things. I believe in you more than words can say."
      },
      {
        emoji: "🦋",
        name: "Your Sister",
        photo: "./images/yuvi and yashi.png", // Add your Sister's photo file path here
        message: "You drive me crazy sometimes, but honestly? Life would be so boring without you. Love you forever, even when I don't say it."
      }
    ]
  },

  // ── FRIEND MESSAGES ────────────────────────────────────────
  friends: {
    title: "Besties",
    subtitle: "The ones who make life chaotic and wonderful.",
    messages: [
      {
        emoji: "🎀",
        name: "Ekleen",
        message: "yashikaaaa literally makes school 10x fun and better for meee I never thought we would become so close sooo fastt!!! time flies and genuinely cherish every single moment with you from random 2am video calls to our never ending laughing in class!"
      },
      {
        emoji: "✨",
        name: "Priya",
        message: "15 years of being on this planet and you're already this amazing?? Can't wait to see 16. Love you bestie!"
      },
      {
        emoji: "🌻",
        name: "Rhea",
        message: "From sitting together in math to surviving high school... you're the best friend anyone could ask for. Happy birthday!"
      },
      {
        emoji: "🌙",
        name: "Zoe",
        message: "I hope your birthday is as iconic as you are. We need to celebrate ASAP!!"
      }
    ]
  },

  // ── FUNNY QUOTES / MEMORIES ───────────────────────────────
  quotes: [
    {
      emoji: "💭",
      text: "Is water wet, or does it just make things wet?",
      source: "— You, at 2 AM"
    },
    {
      emoji: "🍕",
      text: "I'm not hungry, I just want a snack.",
      source: "— You, constantly"
    },
    {
      emoji: "📱",
      text: "My phone is at 1%, tell my family I love them.",
      source: "— You, being dramatic"
    },
    {
      emoji: "😴",
      text: "I'm going to sleep early tonight. (Proceeds to stay up till 3 AM)",
      source: "— You, every night"
    }
  ],

  // ── POLAROID PHOTOS ───────────────────────────────────────
  memories: {
    photos: [
      { src: "./images/day1.jpg", caption: "The day it all started", angle: -3 },
      { src: "./images/2 mnth.jpg", caption: "Always smiling", angle: 4 },
      { src: "./images/3 yr.jpg", caption: "Birthday #3", angle: -2 },
      { src: "./images/3yrs.jpg", caption: "That one family trip", angle: 5 },
      { src: "./images/4yrs.jpg", caption: "Besties since day 1", angle: -4 },
      { src: "./images/5yrs.jpg", caption: "Unstoppable", angle: 2 },
      { src: "./images/6yrs.jpg", caption: "15!", angle: -3 }
    ]
  },

  // ── 15 THINGS LIST ────────────────────────────────────────
  fifteenThings: {
    items: [
      "Your totally infectious, ridiculous laugh.",
      "The way you genuinely care about your friends.",
      "Your terrible, terrible taste in movies.",
      "How fiercely independent you are.",
      "Your absolutely chaotic Spotify playlists.",
      "The way you light up when you talk about things you love.",
      "Your random bursts of energy at 11 PM.",
      "How you always try to see the good in people.",
      "Your completely unhinged text messages.",
      "The way you're secretly really sentimental.",
      "Your ability to sleep through literally anything.",
      "How you stand up for what you believe in.",
      "Your style (even when you steal my clothes).",
      "The fact that you're not afraid to be yourself.",
      "Everything. Just everything about you."
    ]
  },

  // ── FINALE ────────────────────────────────────────────────
  finale: {
    title: "Happy 15th Birthday",
    message: "Fifteen is a beautiful age. Dream big, stay kind, and never lose your sparkle.",
    signoff: "We love you endlessly. 💗",
    smallText: "Now go eat some cake!"
  }

};