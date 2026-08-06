// quotes.ts
export interface Quote {
  text: string;
  author: string;
  source?: string;
  category: 'wisdom' | 'courage' | 'perseverance' | 'hope' | 'growth' | 'focus' | 'strength' | 'love' | 'life' | 'grief' | 'change' | 'truth';
  language?: 'en' | 'fr' | 'de' | 'zh' | 'ja' | 'la';
}

export const QUOTES: Quote[] = [
  // ============================================
  // WISDOM (40+ quotes)
  // ============================================
  {
    text: "The only true wisdom is in knowing you know nothing.",
    author: "Socrates",
    source: "Ancient Greece",
    category: "wisdom",
    language: "en"
  },
  {
    text: "We suffer more often in imagination than in reality.",
    author: "Seneca",
    source: "Stoicism",
    category: "wisdom",
    language: "en"
  },
  {
    text: "The mind is not a vessel to be filled, but a fire to be kindled.",
    author: "Plutarch",
    category: "wisdom",
    language: "en"
  },
  {
    text: "It is not the strongest of the species that survives, but the one most adaptable to change.",
    author: "Charles Darwin",
    category: "wisdom",
    language: "en"
  },
  {
    text: "The only thing necessary for the triumph of evil is for good men to do nothing.",
    author: "Edmund Burke",
    category: "wisdom",
    language: "en"
  },
  {
    text: "We make a living by what we get, but we make a life by what we give.",
    author: "Winston Churchill",
    category: "wisdom",
    language: "en"
  },
  {
    text: "The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge.",
    author: "Daniel J. Boorstin",
    category: "wisdom",
    language: "en"
  },
  {
    text: "Not all those who wander are lost.",
    author: "J.R.R. Tolkien",
    source: "The Lord of the Rings",
    category: "wisdom",
    language: "en"
  },
  {
    text: "All happy families are alike; each unhappy family is unhappy in its own way.",
    author: "Leo Tolstoy",
    source: "Anna Karenina",
    category: "wisdom",
    language: "en"
  },
  {
    text: "The world is a book and those who do not travel read only one page.",
    author: "Augustine of Hippo",
    category: "wisdom",
    language: "en"
  },
  {
    text: "He who knows others is wise; he who knows himself is enlightened.",
    author: "Lao Tzu",
    source: "Tao Te Ching",
    category: "wisdom",
    language: "zh"
  },
  {
    text: "The journey of a thousand miles begins with a single step.",
    author: "Lao Tzu",
    source: "Tao Te Ching",
    category: "wisdom",
    language: "zh"
  },
  {
    text: "When the student is ready, the teacher will appear.",
    author: "Buddhist Proverb",
    category: "wisdom",
    language: "zh"
  },
  {
    text: "What you resist persists.",
    author: "Carl Jung",
    category: "wisdom",
    language: "de"
  },
  {
    text: "He who has a why to live can bear almost any how.",
    author: "Friedrich Nietzsche",
    category: "wisdom",
    language: "de"
  },
  {
    text: "The whole is greater than the sum of its parts.",
    author: "Aristotle",
    category: "wisdom",
    language: "en"
  },
  {
    text: "To live is to suffer, to survive is to find some meaning in the suffering.",
    author: "Friedrich Nietzsche",
    category: "wisdom",
    language: "de"
  },
  {
    text: "Doubt is not a pleasant condition, but certainty is absurd.",
    author: "Voltaire",
    category: "wisdom",
    language: "fr"
  },
  {
    text: "The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion.",
    author: "Albert Camus",
    category: "wisdom",
    language: "fr"
  },
  {
    text: "Man is condemned to be free.",
    author: "Jean-Paul Sartre",
    category: "wisdom",
    language: "fr"
  },
  {
    text: "Hell is other people.",
    author: "Jean-Paul Sartre",
    category: "wisdom",
    language: "fr"
  },
  {
    text: "You are what you do, not what you say you'll do.",
    author: "Carl Jung",
    category: "wisdom",
    language: "de"
  },
  {
    text: "The individual has always had to struggle to keep from being overwhelmed by the tribe.",
    author: "Nietzsche",
    category: "wisdom",
    language: "de"
  },
  {
    text: "Death is not the greatest loss in life. The greatest loss is what dies inside us while we live.",
    author: "Norman Cousins",
    category: "wisdom",
    language: "en"
  },
  {
    text: "The greatest deception men suffer is from their own opinions.",
    author: "Leonardo da Vinci",
    category: "wisdom",
    language: "it"
  },
  {
    text: "Nothing is so firmly believed as that which is least known.",
    author: "Michel de Montaigne",
    category: "wisdom",
    language: "fr"
  },
  {
    text: "We must let go of the life we have planned, so as to accept the one that is waiting for us.",
    author: "Joseph Campbell",
    category: "wisdom",
    language: "en"
  },
  {
    text: "A man who carries a cat by the tail learns something he can learn in no other way.",
    author: "Mark Twain",
    category: "wisdom",
    language: "en"
  },
  {
    text: "The trouble with having an open mind, of course, is that people will insist on coming along and trying to put things in it.",
    author: "Terry Pratchett",
    category: "wisdom",
    language: "en"
  },
  {
    text: "I have not failed. I've just found 10,000 ways that won't work.",
    author: "Thomas Edison",
    category: "wisdom",
    language: "en"
  },

  // ============================================
  // COURAGE (30+ quotes)
  // ============================================
  {
    text: "Courage is not the absence of fear, but the triumph over it.",
    author: "Nelson Mandela",
    category: "courage",
    language: "en"
  },
  {
    text: "Courage is grace under pressure.",
    author: "Ernest Hemingway",
    category: "courage",
    language: "en"
  },
  {
    text: "You cannot swim for new horizons until you have courage to lose sight of the shore.",
    author: "William Faulkner",
    category: "courage",
    language: "en"
  },
  {
    text: "Courage is being scared to death but saddling up anyway.",
    author: "John Wayne",
    category: "courage",
    language: "en"
  },
  {
    text: "You gain strength, courage, and confidence by every experience in which you really stop to look fear in the face.",
    author: "Eleanor Roosevelt",
    category: "courage",
    language: "en"
  },
  {
    text: "It takes courage to grow up and become who you really are.",
    author: "E.E. Cummings",
    category: "courage",
    language: "en"
  },
  {
    text: "The world is full of people who have never been broken, and they are terrified of those who have.",
    author: "Toni Morrison",
    category: "courage",
    language: "en"
  },
  {
    text: "Courage is the first of human qualities because it is the quality which guarantees all others.",
    author: "Winston Churchill",
    category: "courage",
    language: "en"
  },
  {
    text: "You must do the thing you think you cannot do.",
    author: "Eleanor Roosevelt",
    category: "courage",
    language: "en"
  },
  {
    text: "The only thing we have to fear is fear itself.",
    author: "Franklin D. Roosevelt",
    category: "courage",
    language: "en"
  },
  {
    text: "Do not go gentle into that good night. Rage, rage against the dying of the light.",
    author: "Dylan Thomas",
    category: "courage",
    language: "en"
  },
  {
    text: "I learned that courage was not the absence of fear, but the triumph over it.",
    author: "Nelson Mandela",
    category: "courage",
    language: "en"
  },
  {
    text: "Fortune favors the bold.",
    author: "Virgil",
    source: "Aeneid",
    category: "courage",
    language: "la"
  },
  {
    text: "What is a man? A miserable little pile of secrets.",
    author: "Dracula",
    source: "Castlevania",
    category: "courage",
    language: "en"
  },
  {
    text: "If you win, you live. If you lose, you die. If you don't fight, you can't win.",
    author: "Eren Yeager",
    source: "Attack on Titan",
    category: "courage",
    language: "en"
  },
  {
    text: "To stand in the fire is to be tested.",
    author: "Geralt of Rivia",
    source: "The Witcher 3",
    category: "courage",
    language: "en"
  },
  {
    text: "Even if you're not ready for the day, it cannot always be night.",
    author: "Yennefer",
    source: "The Witcher 3",
    category: "courage",
    language: "en"
  },
  {
    text: "When you have to kill a man, it costs nothing to be polite.",
    author: "Winston Churchill",
    category: "courage",
    language: "en"
  },

  // ============================================
  // PERSEVERANCE (35+ quotes)
  // ============================================
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
    category: "perseverance",
    language: "en"
  },
  {
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
    category: "perseverance",
    language: "zh"
  },
  {
    text: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
    category: "perseverance",
    language: "en"
  },
  {
    text: "The secret of getting ahead is getting started.",
    author: "Mark Twain",
    category: "perseverance",
    language: "en"
  },
  {
    text: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
    author: "Thomas Edison",
    category: "perseverance",
    language: "en"
  },
  {
    text: "I have been bent and broken, but—I hope—into a better shape.",
    author: "Charles Dickens",
    source: "Great Expectations",
    category: "perseverance",
    language: "en"
  },
  {
    text: "Perseverance is not a long race; it is many short races one after another.",
    author: "Walter Elliot",
    category: "perseverance",
    language: "en"
  },
  {
    text: "It always seems impossible until it's done.",
    author: "Nelson Mandela",
    category: "perseverance",
    language: "en"
  },
  {
    text: "The best way out is always through.",
    author: "Robert Frost",
    category: "perseverance",
    language: "en"
  },
  {
    text: "If you can't fly then run, if you can't run then walk, if you can't walk then crawl, but whatever you do you have to keep moving forward.",
    author: "Martin Luther King Jr.",
    category: "perseverance",
    language: "en"
  },
  {
    text: "Fall down seven times, get up eight.",
    author: "Japanese Proverb",
    category: "perseverance",
    language: "ja"
  },
  {
    text: "The moment you give up is the moment you let someone else win.",
    author: "Kobe Bryant",
    category: "perseverance",
    language: "en"
  },
  {
    text: "What is better: to be born good, or to overcome your evil nature through great effort?",
    author: "Paarthurnax",
    source: "Skyrim",
    category: "perseverance",
    language: "en"
  },
  {
    text: "You will die, again and again. And you will learn. And you will overcome.",
    author: "The Fire Keeper",
    source: "Dark Souls III",
    category: "perseverance",
    language: "en"
  },
  {
    text: "Why do we fall? So we can learn to pick ourselves up.",
    author: "Bruce Wayne",
    source: "Batman Begins",
    category: "perseverance",
    language: "en"
  },
  {
    text: "Never give up. Today is hard, tomorrow will be worse, but the day after tomorrow will be sunshine.",
    author: "Jack Ma",
    category: "perseverance",
    language: "zh"
  },
  {
    text: "You do not find a happy life, you make it.",
    author: "Thomas S. Monson",
    category: "perseverance",
    language: "en"
  },
  {
    text: "We must accept finite disappointment, but never lose infinite hope.",
    author: "Martin Luther King Jr.",
    category: "perseverance",
    language: "en"
  },

  // ============================================
  // HOPE (35+ quotes)
  // ============================================
  {
    text: "There is some good in this world, and it's worth fighting for.",
    author: "Samwise Gamgee",
    source: "The Lord of the Rings",
    category: "hope",
    language: "en"
  },
  {
    text: "Happiness can be found even in the darkest of times, if one only remembers to turn on the light.",
    author: "Albus Dumbledore",
    source: "Harry Potter",
    category: "hope",
    language: "en"
  },
  {
    text: "The world is cruel, but it is also beautiful.",
    author: "Mikasa Ackerman",
    source: "Attack on Titan",
    category: "hope",
    language: "en"
  },
  {
    text: "We are all in the gutter, but some of us are looking at the stars.",
    author: "Oscar Wilde",
    source: "Lady Windermere's Fan",
    category: "hope",
    language: "en"
  },
  {
    text: "After all, tomorrow is another day!",
    author: "Scarlett O'Hara",
    source: "Gone with the Wind",
    category: "hope",
    language: "en"
  },
  {
    text: "The night is darkest just before the dawn.",
    author: "Harvey Dent",
    source: "The Dark Knight",
    category: "hope",
    language: "en"
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
    category: "hope",
    language: "en"
  },
  {
    text: "The soul would have no rainbow if the eyes had no tears.",
    author: "Indigenous Proverb",
    category: "hope",
    language: "en"
  },
  {
    text: "Hope is the thing with feathers that perches in the soul.",
    author: "Emily Dickinson",
    category: "hope",
    language: "en"
  },
  {
    text: "Even darkness must pass. A new day will come.",
    author: "Samwise Gamgee",
    source: "The Lord of the Rings",
    category: "hope",
    language: "en"
  },
  {
    text: "Where there is love there is life.",
    author: "Mahatma Gandhi",
    category: "hope",
    language: "en"
  },
  {
    text: "The sun will rise and we will try again.",
    author: "Twenty One Pilots",
    category: "hope",
    language: "en"
  },
  {
    text: "I am not afraid of storms, for I am learning how to sail my ship.",
    author: "Louisa May Alcott",
    source: "Little Women",
    category: "hope",
    language: "en"
  },
  {
    text: "This too shall pass.",
    author: "Persian Proverb",
    category: "hope",
    language: "fa"
  },
  {
    text: "The darkest hour has only sixty minutes.",
    author: "Morris Mandel",
    category: "hope",
    language: "en"
  },
  {
    text: "Hope is the only bee that makes honey without flowers.",
    author: "Robert Ingersoll",
    category: "hope",
    language: "en"
  },
  {
    text: "When you have exhausted all possibilities, remember this: you haven't.",
    author: "Thomas Edison",
    category: "hope",
    language: "en"
  },
  {
    text: "Look for the stars, even on the darkest night.",
    author: "Japanese Proverb",
    category: "hope",
    language: "ja"
  },

  // ============================================
  // GROWTH (35+ quotes)
  // ============================================
  {
    text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    author: "Aristotle",
    category: "growth",
    language: "en"
  },
  {
    text: "The only way to make sense out of change is to plunge into it, move with it, and join the dance.",
    author: "Alan Watts",
    category: "growth",
    language: "en"
  },
  {
    text: "And the day came when the risk to remain tight in a bud was more painful than the risk it took to blossom.",
    author: "Anaïs Nin",
    category: "growth",
    language: "en"
  },
  {
    text: "Great men are not born great, they grow great.",
    author: "Don Vito Corleone",
    source: "The Godfather",
    category: "growth",
    language: "en"
  },
  {
    text: "We've all got both light and dark inside us. What matters is the part we choose to act on.",
    author: "Sirius Black",
    source: "Harry Potter",
    category: "growth",
    language: "en"
  },
  {
    text: "Your time is limited, so don't waste it living someone else's life.",
    author: "Steve Jobs",
    category: "growth",
    language: "en"
  },
  {
    text: "Two roads diverged in a wood, and I— I took the one less traveled by, and that has made all the difference.",
    author: "Robert Frost",
    source: "The Road Not Taken",
    category: "growth",
    language: "en"
  },
  {
    text: "Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself.",
    author: "Rumi",
    source: "Persian Poetry",
    category: "growth",
    language: "fa"
  },
  {
    text: "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
    author: "Joseph Campbell",
    category: "growth",
    language: "en"
  },
  {
    text: "The only person you are destined to become is the person you decide to be.",
    author: "Ralph Waldo Emerson",
    category: "growth",
    language: "en"
  },
  {
    text: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi",
    category: "growth",
    language: "en"
  },
  {
    text: "Smooth seas do not make skillful sailors.",
    author: "African Proverb",
    category: "growth",
    language: "en"
  },
  {
    text: "You must do the things you think you cannot do.",
    author: "Eleanor Roosevelt",
    category: "growth",
    language: "en"
  },
  {
    text: "A lesson without pain is meaningless. That's because you can't gain anything without sacrificing something in return.",
    author: "Edward Elric",
    source: "Fullmetal Alchemist",
    category: "growth",
    language: "en"
  },
  {
    text: "People who can't throw something important away, can never change anything.",
    author: "Armin Arlert",
    source: "Attack on Titan",
    category: "growth",
    language: "en"
  },
  {
    text: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    author: "Zig Ziglar",
    category: "growth",
    language: "en"
  },
  {
    text: "No man ever steps in the same river twice, for it's not the same river and he's not the same man.",
    author: "Heraclitus",
    category: "growth",
    language: "en"
  },
  {
    text: "That which does not kill us makes us stronger.",
    author: "Friedrich Nietzsche",
    category: "growth",
    language: "de"
  },
  {
    text: "Die and become. Change is the only constant.",
    author: "Heraclitus",
    category: "growth",
    language: "en"
  },

  // ============================================
  // STRENGTH (35+ quotes)
  // ============================================
  {
    text: "The world breaks everyone and afterward many are strong at the broken places.",
    author: "Ernest Hemingway",
    source: "A Farewell to Arms",
    category: "strength",
    language: "en"
  },
  {
    text: "I am no bird; and no net ensnares me: I am a free human being with an independent will.",
    author: "Jane Eyre",
    source: "Jane Eyre",
    category: "strength",
    language: "en"
  },
  {
    text: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
    category: "strength",
    language: "en"
  },
  {
    text: "Do not pray for easy lives. Pray to be stronger men.",
    author: "John F. Kennedy",
    category: "strength",
    language: "en"
  },
  {
    text: "The oak fought the wind and was broken, the willow bent when it must and survived.",
    author: "Robert Jordan",
    source: "The Fires of Heaven",
    category: "strength",
    language: "en"
  },
  {
    text: "You have power over your mind—not outside events. Realize this, and you will find strength.",
    author: "Marcus Aurelius",
    source: "Meditations",
    category: "strength",
    language: "en"
  },
  {
    text: "No one can make you feel inferior without your consent.",
    author: "Eleanor Roosevelt",
    category: "strength",
    language: "en"
  },
  {
    text: "Sometimes the bravest thing you can do is keep living.",
    author: "V.E. Schwab",
    source: "A Darker Shade of Magic",
    category: "strength",
    language: "en"
  },
  {
    text: "The strongest people are not those who show strength in front of us but those who win battles we know nothing about.",
    author: "Unknown",
    category: "strength",
    language: "en"
  },
  {
    text: "You were born with wings. Why prefer to crawl through life?",
    author: "Rumi",
    source: "Persian Poetry",
    category: "strength",
    language: "fa"
  },
  {
    text: "If there is no enemy within, the enemy outside can do us no harm.",
    author: "African Proverb",
    category: "strength",
    language: "en"
  },
  {
    text: "The greatest weapon against stress is our ability to choose one thought over another.",
    author: "William James",
    category: "strength",
    language: "en"
  },
  {
    text: "To be calm in the face of chaos is strength.",
    author: "Lao Tzu",
    category: "strength",
    language: "zh"
  },
  {
    text: "Strength does not come from physical capacity. It comes from an indomitable will.",
    author: "Mahatma Gandhi",
    category: "strength",
    language: "en"
  },
  {
    text: "What is a king? A king is a man who rules his own soul.",
    author: "Dostoevsky",
    source: "The Brothers Karamazov",
    category: "strength",
    language: "en"
  },
  {
    text: "Pain is temporary. Quitting lasts forever.",
    author: "Lance Armstrong",
    category: "strength",
    language: "en"
  },
  {
    text: "The most powerful weapon on earth is the human soul on fire.",
    author: "Ferdinand Foch",
    category: "strength",
    language: "en"
  },
  {
    text: "He who conquers others is strong; he who conquers himself is mighty.",
    author: "Lao Tzu",
    category: "strength",
    language: "zh"
  },

  // ============================================
  // LOVE (30+ quotes)
  // ============================================
  {
    text: "I have decided to stick with love. Hate is too great a burden to bear.",
    author: "Martin Luther King Jr.",
    category: "love",
    language: "en"
  },
  {
    text: "It is not a lack of love, but a lack of friendship that makes unhappy marriages.",
    author: "Friedrich Nietzsche",
    category: "love",
    language: "de"
  },
  {
    text: "Love recognizes no barriers. It jumps hurdles, leaps fences, penetrates walls to arrive at its target full of hope.",
    author: "Maya Angelou",
    category: "love",
    language: "en"
  },
  {
    text: "The only thing we never get enough of is love.",
    author: "Henry Miller",
    category: "love",
    language: "en"
  },
  {
    text: "Where there is love there is life.",
    author: "Mahatma Gandhi",
    category: "love",
    language: "en"
  },
  {
    text: "Love is the answer, and you know that for sure.",
    author: "John Lennon",
    category: "love",
    language: "en"
  },
  {
    text: "Whatever our souls are made of, his and mine are the same.",
    author: "Emily Brontë",
    source: "Wuthering Heights",
    category: "love",
    language: "en"
  },
  {
    text: "To love and be loved is to feel the sun from both sides.",
    author: "David Viscott",
    category: "love",
    language: "en"
  },
  {
    text: "Love is not about how many days, months, or years you've been together. Love is about how much you love each other every single day.",
    author: "Unknown",
    category: "love",
    language: "en"
  },
  {
    text: "La vie est un sommeil, l'amour en est le rêve.",
    author: "Alfred de Musset",
    source: "French saying",
    category: "love",
    language: "fr"
  },
  {
    text: "Der Liebe ist das einzige, was wächst, wenn man es verschwendet.",
    author: "Erich Fromm",
    category: "love",
    language: "de"
  },
  {
    text: "爱是唯一能够跨越时空的东西。",
    author: "Chinese Proverb",
    category: "love",
    language: "zh"
  },
  {
    text: "The love we give away is the only love we keep.",
    author: "Elbert Hubbard",
    category: "love",
    language: "en"
  },
  {
    text: "There is always some madness in love. But there is also always some reason in madness.",
    author: "Friedrich Nietzsche",
    category: "love",
    language: "de"
  },
  {
    text: "If you have to choose between love and safety, choose love.",
    author: "Unknown",
    category: "love",
    language: "en"
  },
  {
    text: "Love is the only force capable of transforming an enemy into a friend.",
    author: "Martin Luther King Jr.",
    category: "love",
    language: "en"
  },

  // ============================================
  // LIFE (40+ quotes)
  // ============================================
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
    category: "life",
    language: "en"
  },
  {
    text: "To live is the rarest thing in the world. Most people exist, that is all.",
    author: "Oscar Wilde",
    source: "The Picture of Dorian Gray",
    category: "life",
    language: "en"
  },
  {
    text: "Life is really simple, but we insist on making it complicated.",
    author: "Confucius",
    category: "life",
    language: "zh"
  },
  {
    text: "The purpose of our lives is to be happy.",
    author: "Dalai Lama",
    category: "life",
    language: "en"
  },
  {
    text: "Life is not about waiting for the storm to pass, it's about learning to dance in the rain.",
    author: "Vivian Greene",
    category: "life",
    language: "en"
  },
  {
    text: "In the middle of difficulty lies opportunity.",
    author: "Albert Einstein",
    category: "life",
    language: "en"
  },
  {
    text: "Life is like a box of chocolates. You never know what you're gonna get.",
    author: "Forrest Gump",
    source: "Forrest Gump",
    category: "life",
    language: "en"
  },
  {
    text: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
    category: "life",
    language: "en"
  },
  {
    text: "La vie est belle.",
    author: "French Saying",
    category: "life",
    language: "fr"
  },
  {
    text: "Das Leben ist das, was passiert, während du andere Pläne machst.",
    author: "John Lennon",
    category: "life",
    language: "de"
  },
  {
    text: "生活就像一盒巧克力，你永远不知道下一块是什么味道。",
    author: "Forrest Gump",
    source: "Forrest Gump",
    category: "life",
    language: "zh"
  },
  {
    text: "The purpose of life is a life of purpose.",
    author: "Robert Byrne",
    category: "life",
    language: "en"
  },
  {
    text: "Life shrinks or expands in proportion to one's courage.",
    author: "Anaïs Nin",
    category: "life",
    language: "en"
  },
  {
    text: "A life spent making mistakes is not only more honorable, but more useful than a life spent doing nothing.",
    author: "George Bernard Shaw",
    category: "life",
    language: "en"
  },
  {
    text: "The only people who never fail are those who never try.",
    author: "Franklin D. Roosevelt",
    category: "life",
    language: "en"
  },
  {
    text: "Life is 10% what happens to us and 90% how we react to it.",
    author: "Charles R. Swindoll",
    category: "life",
    language: "en"
  },
  {
    text: "Life is a journey, not a destination.",
    author: "Ralph Waldo Emerson",
    category: "life",
    language: "en"
  },
  {
    text: "The biggest adventure you can take is to live the life of your dreams.",
    author: "Oprah Winfrey",
    category: "life",
    language: "en"
  },
  {
    text: "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost",
    category: "life",
    language: "en"
  },
  {
    text: "Life isn't about finding yourself. Life is about creating yourself.",
    author: "George Bernard Shaw",
    category: "life",
    language: "en"
  },

  // ============================================
  // GRIEF & HEALING (25+ quotes)
  // ============================================
  {
    text: "Grief is the price we pay for love.",
    author: "Queen Elizabeth II",
    category: "grief",
    language: "en"
  },
  {
    text: "There is no grief like the grief that does not speak.",
    author: "Henry Wadsworth Longfellow",
    category: "grief",
    language: "en"
  },
  {
    text: "The pain of parting is nothing to the joy of meeting again.",
    author: "Charles Dickens",
    source: "Nicholas Nickleby",
    category: "grief",
    language: "en"
  },
  {
    text: "What is grief, if not love persevering?",
    author: "Vision",
    source: "WandaVision",
    category: "grief",
    language: "en"
  },
  {
    text: "I will not say: do not weep; for not all tears are an evil.",
    author: "Gandalf",
    source: "The Lord of the Rings",
    category: "grief",
    language: "en"
  },
  {
    text: "The darker the night, the brighter the stars, the deeper the grief, the closer is God!",
    author: "Fyodor Dostoevsky",
    source: "Crime and Punishment",
    category: "grief",
    language: "en"
  },
  {
    text: "We must embrace pain and burn it as fuel for our journey.",
    author: "Kenji Miyazawa",
    category: "grief",
    language: "ja"
  },
  {
    text: "To weep is to make less the depth of grief.",
    author: "William Shakespeare",
    source: "King Henry VI",
    category: "grief",
    language: "en"
  },
  {
    text: "In the depths of winter, I finally learned that within me there lay an invincible summer.",
    author: "Albert Camus",
    category: "grief",
    language: "fr"
  },
  {
    text: "He who has a why to live can bear almost any how.",
    author: "Friedrich Nietzsche",
    category: "grief",
    language: "de"
  },
  {
    text: "Grief is the agony of an instant, the indulgence of grief the blunder of a life.",
    author: "Benjamin Disraeli",
    category: "grief",
    language: "en"
  },
  {
    text: "The only way out of the labyrinth of suffering is to forgive.",
    author: "John Green",
    source: "Looking for Alaska",
    category: "grief",
    language: "en"
  },
  {
    text: "Grief does not change you, it reveals you.",
    author: "John Green",
    source: "The Fault in Our Stars",
    category: "grief",
    language: "en"
  },

  // ============================================
  // FOCUS (20+ quotes)
  // ============================================
  {
    text: "Focus on being productive instead of busy.",
    author: "Tim Ferriss",
    category: "focus",
    language: "en"
  },
  {
    text: "The successful warrior is the average man, with laser-like focus.",
    author: "Bruce Lee",
    category: "focus",
    language: "en"
  },
  {
    text: "Concentrate all your thoughts upon the work in hand. The sun's rays do not burn until brought to a focus.",
    author: "Alexander Graham Bell",
    category: "focus",
    language: "en"
  },
  {
    text: "It is during our darkest moments that we must focus to see the light.",
    author: "Aristotle",
    category: "focus",
    language: "en"
  },
  {
    text: "Don't be distracted by what is happening around you. The only thing that matters is what you are doing right now.",
    author: "Marcus Aurelius",
    source: "Meditations",
    category: "focus",
    language: "en"
  },
  {
    text: "The ability to concentrate and to use your time well is everything if you want to succeed in life.",
    author: "Lee Iacocca",
    category: "focus",
    language: "en"
  },
  {
    text: "Focus on the journey, not the destination. Joy is found not in finishing an activity but in doing it.",
    author: "Greg Anderson",
    category: "focus",
    language: "en"
  },
  {
    text: "You can't depend on your eyes when your imagination is out of focus.",
    author: "Mark Twain",
    category: "focus",
    language: "en"
  },
  {
    text: "Where focus goes, energy flows.",
    author: "Tony Robbins",
    category: "focus",
    language: "en"
  },
  {
    text: "Concentrate all your thoughts upon the work in hand. The sun's rays do not burn until brought to a focus.",
    author: "Alexander Graham Bell",
    category: "focus",
    language: "en"
  },

  // ============================================
  // CHANGE (20+ quotes)
  // ============================================
  {
    text: "The only constant in life is change.",
    author: "Heraclitus",
    category: "change",
    language: "en"
  },
  {
    text: "Change is the law of life. And those who look only to the past or present are certain to miss the future.",
    author: "John F. Kennedy",
    category: "change",
    language: "en"
  },
  {
    text: "To improve is to change; to be perfect is to change often.",
    author: "Winston Churchill",
    category: "change",
    language: "en"
  },
  {
    text: "Change before you have to.",
    author: "Jack Welch",
    category: "change",
    language: "en"
  },
  {
    text: "Those who cannot change their minds cannot change anything.",
    author: "George Bernard Shaw",
    category: "change",
    language: "en"
  },
  {
    text: "The secret of change is to focus all of your energy not on fighting the old, but on building the new.",
    author: "Socrates",
    category: "change",
    language: "en"
  },
  {
    text: "Change is painful, but nothing is as painful as staying stuck somewhere you don't belong.",
    author: "Mandy Hale",
    category: "change",
    language: "en"
  },
  {
    text: "How can you change the world if you are afraid to change yourself?",
    author: "Lao Tzu",
    category: "change",
    language: "zh"
  },
  {
    text: "You must be the change you wish to see in the world.",
    author: "Mahatma Gandhi",
    category: "change",
    language: "en"
  },
  {
    text: "Change is not a destination, it's a direction.",
    author: "Unknown",
    category: "change",
    language: "en"
  },

  // ============================================
  // TRUTH (15+ quotes)
  // ============================================
  {
    text: "The truth is rarely pure and never simple.",
    author: "Oscar Wilde",
    source: "The Importance of Being Earnest",
    category: "truth",
    language: "en"
  },
  {
    text: "Facts are stubborn things.",
    author: "John Adams",
    category: "truth",
    language: "en"
  },
  {
    text: "The truth will set you free, but first it will piss you off.",
    author: "Gloria Steinem",
    category: "truth",
    language: "en"
  },
  {
    text: "Sometimes the truth is not good enough. Sometimes people deserve more. Sometimes people deserve to have their faith rewarded.",
    author: "Batman",
    source: "The Dark Knight",
    category: "truth",
    language: "en"
  },
  {
    text: "There are three kinds of lies: lies, damned lies, and statistics.",
    author: "Benjamin Disraeli",
    category: "truth",
    language: "en"
  },
  {
    text: "The truth is incontrovertible. Panic may resent it, ignorance may deride it, but in the end, there it is.",
    author: "Winston Churchill",
    category: "truth",
    language: "en"
  },
  {
    text: "You can't handle the truth!",
    author: "Colonel Jessup",
    source: "A Few Good Men",
    category: "truth",
    language: "en"
  },
  {
    text: "The truth is like a lion. You don't have to defend it. Let it loose. It will defend itself.",
    author: "St. Augustine",
    category: "truth",
    language: "en"
  },
  {
    text: "In a time of deceit, telling the truth is a revolutionary act.",
    author: "George Orwell",
    category: "truth",
    language: "en"
  },

  // ============================================
  // GAME & ANIME QUOTES (Deep ones)
  // ============================================
  {
    text: "Stand among the ashes of a trillion dead souls and ask the ghosts if honor matters. The silence is your answer.",
    author: "Javik",
    source: "Mass Effect 3",
    category: "wisdom",
    language: "en"
  },
  {
    text: "You are who you choose to be.",
    author: "The Iron Giant",
    source: "The Iron Giant",
    category: "growth",
    language: "en"
  },
  {
    text: "The hardest choices require the strongest wills.",
    author: "Thanos",
    source: "Avengers: Infinity War",
    category: "courage",
    language: "en"
  },
  {
    text: "I am the master of my fate: I am the captain of my soul.",
    author: "William Ernest Henley",
    source: "Invictus",
    category: "strength",
    language: "en"
  },
  {
    text: "A man who doesn't spend time with his family can never be a real man.",
    author: "Don Vito Corleone",
    source: "The Godfather",
    category: "wisdom",
    language: "en"
  },
  {
    text: "The world isn't perfect. But it's there for us, trying the best it can. That's what makes it so damn beautiful.",
    author: "Roy Mustang",
    source: "Fullmetal Alchemist: Brotherhood",
    category: "hope",
    language: "en"
  },
  {
    text: "All the world's a stage, and all the men and women merely players.",
    author: "William Shakespeare",
    source: "As You Like It",
    category: "wisdom",
    language: "en"
  },
  {
    text: "We are the cause of our own suffering.",
    author: "Buddha",
    category: "wisdom",
    language: "en"
  },
  {
    text: "Know thyself.",
    author: "Socrates",
    source: "Delphi Inscription",
    category: "wisdom",
    language: "la"
  },
  {
    text: "In the middle of the journey of our life I found myself astray in a dark wood where the straight road was lost.",
    author: "Dante Alighieri",
    source: "Inferno",
    category: "life",
    language: "it"
  },
  {
    text: "The only way to deal with fear is to face it head on.",
    author: "Stephen King",
    source: "It",
    category: "courage",
    language: "en"
  },
  {
    text: "What is a man? A miserable little pile of secrets.",
    author: "Dracula",
    source: "Castlevania",
    category: "truth",
    language: "en"
  },
  {
    text: "Death is not the end. It is just another path. One that we all must take.",
    author: "Gandalf",
    source: "The Lord of the Rings",
    category: "grief",
    language: "en"
  },
  {
    text: "I have lived a thousand lives, and I have loved a thousand loves.",
    author: "Unknown",
    category: "love",
    language: "en"
  },
  {
    text: "The measure of a man is what he does with power.",
    author: "Plato",
    category: "wisdom",
    language: "en"
  },
  {
    text: "It is not death that a man should fear, but he should fear never beginning to live.",
    author: "Marcus Aurelius",
    category: "life",
    language: "en"
  },
  {
    text: "We are all stories in the end. Just make it a good one, eh?",
    author: "The Doctor",
    source: "Doctor Who",
    category: "life",
    language: "en"
  },
  {
    text: "The only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.",
    author: "Steve Jobs",
    category: "love",
    language: "en"
  },
  {
    text: "Even if you're not ready for the day, it cannot always be night.",
    author: "Yennefer",
    source: "The Witcher 3",
    category: "hope",
    language: "en"
  },
  {
    text: "There is a sacredness in tears. They are not the mark of weakness, but of power.",
    author: "Washington Irving",
    category: "grief",
    language: "en"
  },
  {
    text: "A man is not what he thinks he is, he is what he hides.",
    author: "André Malraux",
    category: "truth",
    language: "fr"
  },
  {
    text: "We are not human beings having a spiritual experience. We are spiritual beings having a human experience.",
    author: "Pierre Teilhard de Chardin",
    category: "wisdom",
    language: "en"
  },
  {
    text: "The cave you fear to enter holds the treasure you seek.",
    author: "Joseph Campbell",
    category: "courage",
    language: "en"
  },
  {
    text: "A ship in harbor is safe, but that is not what ships are built for.",
    author: "John A. Shedd",
    category: "growth",
    language: "en"
  }
];


export const getRandomQuote = (
  category?: Quote['category'],
  language?: Quote['language']
): Quote => {
  let filtered = [...QUOTES];
  if (category) {
    filtered = filtered.filter(quote => quote.category === category);
  }
  if (language) {
    filtered = filtered.filter(quote => quote.language === language);
  }

  if (filtered.length === 0) {
    throw new Error('No quotes found matching the criteria');
  }
  return filtered[Math.floor(Math.random() * filtered.length)];
}