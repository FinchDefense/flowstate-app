// quotes.ts
export interface Quote {
  text: string;
  author: string;
  source?: string;
  category: 'wisdom' | 'courage' | 'perseverance' | 'hope' | 'growth' | 'focus' | 'strength' | 'love' | 'life' | 'grief' | 'change' | 'truth';
  language?: 'en' | 'fr' | 'de' | 'zh' | 'ja' | 'la' | 'it' | 'fa' | 'es' | 'ar' | 'ru';
}

export const QUOTES: Quote[] = [
  // ============================================
  // WISDOM (60+ quotes)
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
  {
    text: "The unexamined life is not worth living.",
    author: "Socrates",
    category: "wisdom",
    language: "en"
  },
  {
    text: "It is the mark of an educated mind to be able to entertain a thought without accepting it.",
    author: "Aristotle",
    category: "wisdom",
    language: "en"
  },
  {
    text: "The only thing I know is that I know nothing.",
    author: "Socrates",
    category: "wisdom",
    language: "en"
  },
  {
    text: "The secret of getting ahead is getting started.",
    author: "Mark Twain",
    category: "wisdom",
    language: "en"
  },
  {
    text: "Never let the fear of striking out keep you from playing the game.",
    author: "Babe Ruth",
    category: "wisdom",
    language: "en"
  },
  {
    text: "The difference between the impossible and the possible lies in a person's determination.",
    author: "Tommy Lasorda",
    category: "wisdom",
    language: "en"
  },
  {
    text: "It's not the size of the dog in the fight, it's the size of the fight in the dog.",
    author: "Mark Twain",
    category: "wisdom",
    language: "en"
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    category: "wisdom",
    language: "en"
  },
  {
    text: "Stay hungry, stay foolish.",
    author: "Steve Jobs",
    category: "wisdom",
    language: "en"
  },
  {
    text: "The greatest danger for most of us is not that our aim is too high and we miss it, but that it is too low and we reach it.",
    author: "Michelangelo",
    category: "wisdom",
    language: "en"
  },
  {
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
    category: "wisdom",
    language: "en"
  },
  {
    text: "The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.",
    author: "Mark Caine",
    category: "wisdom",
    language: "en"
  },
  {
    text: "The only person you are destined to become is the person you decide to be.",
    author: "Ralph Waldo Emerson",
    category: "wisdom",
    language: "en"
  },
  {
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
    category: "wisdom",
    language: "en"
  },
  {
    text: "The best preparation for tomorrow is doing your best today.",
    author: "H. Jackson Brown Jr.",
    category: "wisdom",
    language: "en"
  },
  {
    text: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    author: "Albert Einstein",
    category: "wisdom",
    language: "en"
  },
  {
    text: "Imagination is more important than knowledge.",
    author: "Albert Einstein",
    category: "wisdom",
    language: "en"
  },
  {
    text: "The important thing is not to stop questioning.",
    author: "Albert Einstein",
    category: "wisdom",
    language: "en"
  },
  {
    text: "Everything you've ever wanted is on the other side of fear.",
    author: "George Addair",
    category: "wisdom",
    language: "en"
  },
  {
    text: "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt",
    category: "wisdom",
    language: "en"
  },
  {
    text: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
    category: "wisdom",
    language: "en"
  },
  {
    text: "Know from whence you came. If you know whence you came, there are absolutely no limitations to where you can go.",
    author: "James Baldwin",
    category: "wisdom",
    language: "en"
  },
  {
    text: "The price of anything is the amount of life you exchange for it.",
    author: "Henry David Thoreau",
    category: "wisdom",
    language: "en"
  },
  {
    text: "Beware the barrenness of a busy life.",
    author: "Socrates",
    category: "wisdom",
    language: "en"
  },
  {
    text: "The greatest wealth is to live content with little.",
    author: "Plato",
    category: "wisdom",
    language: "en"
  },
  {
    text: "The most difficult thing to understand is the income tax.",
    author: "Albert Einstein",
    category: "wisdom",
    language: "en"
  },
  {
    text: "Time is the wisest counselor.",
    author: "Pericles",
    category: "wisdom",
    language: "en"
  },
  {
    text: "The measure of intelligence is the ability to change.",
    author: "Albert Einstein",
    category: "wisdom",
    language: "en"
  },
  {
    text: "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
    author: "Eleanor Roosevelt",
    category: "wisdom",
    language: "en"
  },
  {
    text: "The only thing we have to fear is fear itself.",
    author: "Franklin D. Roosevelt",
    category: "wisdom",
    language: "en"
  },
  {
    text: "It's not what happens to you, but how you react to it that matters.",
    author: "Epictetus",
    category: "wisdom",
    language: "en"
  },
  {
    text: "The more I learn, the more I realize how much I don't know.",
    author: "Albert Einstein",
    category: "wisdom",
    language: "en"
  },
  {
    text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    author: "Aristotle",
    category: "wisdom",
    language: "en"
  },
  {
    text: "The soul is dyed by the color of its thoughts.",
    author: "Marcus Aurelius",
    source: "Meditations",
    category: "wisdom",
    language: "en"
  },
  {
    text: "There is no genius without a touch of madness.",
    author: "Seneca",
    category: "wisdom",
    language: "en"
  },
  {
    text: "In the midst of chaos, there is also opportunity.",
    author: "Sun Tzu",
    source: "The Art of War",
    category: "wisdom",
    language: "en"
  },
  {
    text: "The supreme art of war is to subdue the enemy without fighting.",
    author: "Sun Tzu",
    source: "The Art of War",
    category: "wisdom",
    language: "en"
  },
  {
    text: "If you know the enemy and know yourself, you need not fear the result of a hundred battles.",
    author: "Sun Tzu",
    source: "The Art of War",
    category: "wisdom",
    language: "en"
  },
  {
    text: "He who is prudent and lies in wait for an enemy who is not, will be victorious.",
    author: "Sun Tzu",
    source: "The Art of War",
    category: "wisdom",
    language: "en"
  },
  {
    text: "Great acts are made up of small deeds.",
    author: "Lao Tzu",
    source: "Tao Te Ching",
    category: "wisdom",
    language: "en"
  },
  {
    text: "To see things in the seed, that is genius.",
    author: "Lao Tzu",
    source: "Tao Te Ching",
    category: "wisdom",
    language: "en"
  },
  {
    text: "When you are content to be simply yourself and don't compare or compete, everybody will respect you.",
    author: "Lao Tzu",
    source: "Tao Te Ching",
    category: "wisdom",
    language: "en"
  },
  {
    text: "The softest things in the world overcome the hardest things in the world.",
    author: "Lao Tzu",
    source: "Tao Te Ching",
    category: "wisdom",
    language: "en"
  },
  {
    text: "Those who know do not speak. Those who speak do not know.",
    author: "Lao Tzu",
    source: "Tao Te Ching",
    category: "wisdom",
    language: "en"
  },
  {
    text: "Fame or integrity: which is more important?",
    author: "Lao Tzu",
    source: "Tao Te Ching",
    category: "wisdom",
    language: "en"
  },
  {
    text: "The flame that burns twice as bright burns half as long.",
    author: "Lao Tzu",
    source: "Tao Te Ching",
    category: "wisdom",
    language: "en"
  },
  {
    text: "A journey of a thousand miles begins with a single step.",
    author: "Lao Tzu",
    source: "Tao Te Ching",
    category: "wisdom",
    language: "en"
  },
  {
    text: "The best fighter is never angry.",
    author: "Lao Tzu",
    source: "Tao Te Ching",
    category: "wisdom",
    language: "en"
  },
  {
    text: "Nature does not hurry, yet everything is accomplished.",
    author: "Lao Tzu",
    source: "Tao Te Ching",
    category: "wisdom",
    language: "en"
  },
  {
    text: "The man who moves a mountain begins by carrying away small stones.",
    author: "Confucius",
    category: "wisdom",
    language: "en"
  },
  {
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
    category: "wisdom",
    language: "en"
  },
  {
    text: "Our greatest glory is not in never falling, but in rising every time we fall.",
    author: "Confucius",
    category: "wisdom",
    language: "en"
  },
  {
    text: "Everything has beauty, but not everyone sees it.",
    author: "Confucius",
    category: "wisdom",
    language: "en"
  },
  {
    text: "When it is obvious that the goals cannot be reached, don't adjust the goals, adjust the action steps.",
    author: "Confucius",
    category: "wisdom",
    language: "en"
  },
  {
    text: "The man who says he can, and the man who says he cannot are both correct.",
    author: "Confucius",
    category: "wisdom",
    language: "en"
  },
  {
    text: "Silence is a source of great strength.",
    author: "Lao Tzu",
    source: "Tao Te Ching",
    category: "wisdom",
    language: "en"
  },
  {
    text: "To know what you know and what you do not know, that is true knowledge.",
    author: "Confucius",
    category: "wisdom",
    language: "en"
  },

  // ============================================
  // COURAGE (45+ quotes)
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
    text: "Fortune favors the bold.",
    author: "Virgil",
    source: "Aeneid",
    category: "courage",
    language: "la"
  },
  {
    text: "I learned that courage was not the absence of fear, but the triumph over it.",
    author: "Nelson Mandela",
    category: "courage",
    language: "en"
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
  {
    text: "It is not the critic who counts; not the man who points out how the strong man stumbles... The credit belongs to the man who is actually in the arena.",
    author: "Theodore Roosevelt",
    category: "courage",
    language: "en"
  },
  {
    text: "The brave man is not he who does not feel afraid, but he who conquers that fear.",
    author: "Nelson Mandela",
    category: "courage",
    language: "en"
  },
  {
    text: "Fear is the path to the dark side. Fear leads to anger, anger leads to hate, hate leads to suffering.",
    author: "Yoda",
    source: "Star Wars",
    category: "courage",
    language: "en"
  },
  {
    text: "A man can be destroyed but not defeated.",
    author: "Ernest Hemingway",
    source: "The Old Man and the Sea",
    category: "courage",
    language: "en"
  },
  {
    text: "The only way to deal with fear is to face it head on.",
    author: "Stephen King",
    source: "It",
    category: "courage",
    language: "en"
  },
  {
    text: "To be brave is to be afraid and do it anyway.",
    author: "Unknown",
    category: "courage",
    language: "en"
  },
  {
    text: "Bravery is the ability to stand in the face of fear and not back down.",
    author: "Kratos",
    source: "God of War",
    category: "courage",
    language: "en"
  },
  {
    text: "Do not pray for easy lives. Pray to be stronger men.",
    author: "John F. Kennedy",
    category: "courage",
    language: "en"
  },
  {
    text: "The cave you fear to enter holds the treasure you seek.",
    author: "Joseph Campbell",
    category: "courage",
    language: "en"
  },
  {
    text: "He who is not courageous enough to take risks will accomplish nothing in life.",
    author: "Muhammad Ali",
    category: "courage",
    language: "en"
  },
  {
    text: "The world breaks everyone and afterward many are strong at the broken places.",
    author: "Ernest Hemingway",
    source: "A Farewell to Arms",
    category: "courage",
    language: "en"
  },
  {
    text: "You never know how strong you are until being strong is the only choice you have.",
    author: "Bob Marley",
    category: "courage",
    language: "en"
  },
  {
    text: "Sometimes the bravest thing you can do is keep living.",
    author: "V.E. Schwab",
    source: "A Darker Shade of Magic",
    category: "courage",
    language: "en"
  },
  {
    text: "I am not afraid of storms, for I am learning how to sail my ship.",
    author: "Louisa May Alcott",
    source: "Little Women",
    category: "courage",
    language: "en"
  },
  {
    text: "The greatest test of courage on earth is to bear defeat without losing heart.",
    author: "Robert Green Ingersoll",
    category: "courage",
    language: "en"
  },
  {
    text: "Courage is resistance to fear, mastery of fear, not absence of fear.",
    author: "Mark Twain",
    category: "courage",
    language: "en"
  },
  {
    text: "It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.",
    author: "J.K. Rowling",
    source: "Harry Potter and the Sorcerer's Stone",
    category: "courage",
    language: "en"
  },
  {
    text: "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.",
    author: "Martin Luther King Jr.",
    category: "courage",
    language: "en"
  },
  {
    text: "If you're going to try, go all the way. Otherwise, don't even start.",
    author: "Charles Bukowski",
    category: "courage",
    language: "en"
  },
  {
    text: "Life shrinks or expands in proportion to one's courage.",
    author: "Anaïs Nin",
    category: "courage",
    language: "en"
  },
  {
    text: "You have to be odd to be number one.",
    author: "Dr. Seuss",
    category: "courage",
    language: "en"
  },
  {
    text: "He who conquers others is strong; he who conquers himself is mighty.",
    author: "Lao Tzu",
    category: "courage",
    language: "en"
  },
  {
    text: "The soul that is within me no man can degrade.",
    author: "Frederick Douglass",
    category: "courage",
    language: "en"
  },
  {
    text: "Stand among the ashes of a trillion dead souls and ask the ghosts if honor matters. The silence is your answer.",
    author: "Javik",
    source: "Mass Effect 3",
    category: "courage",
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
    category: "courage",
    language: "en"
  },

  // ============================================
  // PERSEVERANCE (50+ quotes)
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
    language: "en"
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
    language: "en"
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
  {
    text: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
    category: "perseverance",
    language: "en"
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    category: "perseverance",
    language: "en"
  },
  {
    text: "The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack in will.",
    author: "Vince Lombardi",
    category: "perseverance",
    language: "en"
  },
  {
    text: "Winners never quit, and quitters never win.",
    author: "Vince Lombardi",
    category: "perseverance",
    language: "en"
  },
  {
    text: "Success is walking from failure to failure with no loss of enthusiasm.",
    author: "Winston Churchill",
    category: "perseverance",
    language: "en"
  },
  {
    text: "There is no substitute for hard work.",
    author: "Thomas Edison",
    category: "perseverance",
    language: "en"
  },
  {
    text: "The harder I work, the luckier I get.",
    author: "Gary Player",
    category: "perseverance",
    language: "en"
  },
  {
    text: "The only place where success comes before work is in the dictionary.",
    author: "Vidal Sassoon",
    category: "perseverance",
    language: "en"
  },
  {
    text: "It's not whether you get knocked down, it's whether you get up.",
    author: "Vince Lombardi",
    category: "perseverance",
    language: "en"
  },
  {
    text: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    author: "Albert Schweitzer",
    category: "perseverance",
    language: "en"
  },
  {
    text: "When you come to the end of your rope, tie a knot and hang on.",
    author: "Franklin D. Roosevelt",
    category: "perseverance",
    language: "en"
  },
  {
    text: "The best way to cheer yourself up is to try to cheer somebody else up.",
    author: "Mark Twain",
    category: "perseverance",
    language: "en"
  },
  {
    text: "Hardships often prepare ordinary people for an extraordinary destiny.",
    author: "C.S. Lewis",
    category: "perseverance",
    language: "en"
  },
  {
    text: "Perseverance is the hard work you do after you get tired of doing the hard work you already did.",
    author: "Newt Gingrich",
    category: "perseverance",
    language: "en"
  },
  {
    text: "Keep going. The light at the end of the tunnel is not an illusion.",
    author: "Unknown",
    category: "perseverance",
    language: "en"
  },
  {
    text: "You're going to fail many times. The key is to learn from each failure and keep going.",
    author: "Misty Copeland",
    category: "perseverance",
    language: "en"
  },
  {
    text: "No matter how many times you fail, you must get back up. There are no shortcuts to any place worth going.",
    author: "Beverly Sills",
    category: "perseverance",
    language: "en"
  },
  {
    text: "The great thing in this world is not so much where we stand, as in what direction we are moving.",
    author: "Oliver Wendell Holmes",
    category: "perseverance",
    language: "en"
  },
  {
    text: "The secret of success is constancy to purpose.",
    author: "Benjamin Disraeli",
    category: "perseverance",
    language: "en"
  },
  {
    text: "Persistence is to the character of man as carbon is to steel.",
    author: "Napoleon Hill",
    category: "perseverance",
    language: "en"
  },
  {
    text: "Life is not about waiting for the storm to pass, it's about learning to dance in the rain.",
    author: "Vivian Greene",
    category: "perseverance",
    language: "en"
  },
  {
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
    category: "perseverance",
    language: "en"
  },
  {
    text: "Perseverance is failing 19 times and succeeding the 20th.",
    author: "Julie Andrews",
    category: "perseverance",
    language: "en"
  },
  {
    text: "You just can't beat the person who won't give up.",
    author: "Babe Ruth",
    category: "perseverance",
    language: "en"
  },
  {
    text: "It's not that I'm so smart, it's just that I stay with problems longer.",
    author: "Albert Einstein",
    category: "perseverance",
    language: "en"
  },
  {
    text: "The three great essentials to achieve anything worthwhile are: hard work, stick-to-itiveness, and common sense.",
    author: "Thomas Edison",
    category: "perseverance",
    language: "en"
  },
  {
    text: "The key to success is to focus on goals, not obstacles.",
    author: "Unknown",
    category: "perseverance",
    language: "en"
  },

  // ============================================
  // HOPE (50+ quotes)
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
  {
    text: "We must accept finite disappointment, but never lose infinite hope.",
    author: "Martin Luther King Jr.",
    category: "hope",
    language: "en"
  },
  {
    text: "The world is full of suffering, but it is also full of the overcoming of it.",
    author: "Helen Keller",
    category: "hope",
    language: "en"
  },
  {
    text: "Hope is the dream of a waking man.",
    author: "Aristotle",
    category: "hope",
    language: "en"
  },
  {
    text: "Hope is a waking dream.",
    author: "Aristotle",
    category: "hope",
    language: "en"
  },
  {
    text: "Hope is the companion of power, and the mother of success; for who so hopes strongly has within him the gift of miracles.",
    author: "Samuel Smiles",
    category: "hope",
    language: "en"
  },
  {
    text: "Hope is the pillar that holds up the world.",
    author: "Pliny the Elder",
    category: "hope",
    language: "en"
  },
  {
    text: "Without hope, the heart would break.",
    author: "Unknown",
    category: "hope",
    language: "en"
  },
  {
    text: "Hope is being able to see that there is light despite all of the darkness.",
    author: "Desmond Tutu",
    category: "hope",
    language: "en"
  },
  {
    text: "The most beautiful things in life cannot be seen or touched, they are felt with the heart.",
    author: "Antoine de Saint-Exupéry",
    source: "The Little Prince",
    category: "hope",
    language: "en"
  },
  {
    text: "What makes the desert beautiful is that somewhere it hides a well.",
    author: "Antoine de Saint-Exupéry",
    source: "The Little Prince",
    category: "hope",
    language: "en"
  },
  {
    text: "And now here is my secret, a very simple secret: It is only with the heart that one can see rightly; what is essential is invisible to the eye.",
    author: "Antoine de Saint-Exupéry",
    source: "The Little Prince",
    category: "hope",
    language: "en"
  },
  {
    text: "It is such a mysterious place, the land of tears.",
    author: "Antoine de Saint-Exupéry",
    source: "The Little Prince",
    category: "hope",
    language: "en"
  },
  {
    text: "Well, I must endure the presence of a few caterpillars if I wish to become acquainted with the butterflies.",
    author: "Antoine de Saint-Exupéry",
    source: "The Little Prince",
    category: "hope",
    language: "en"
  },
  {
    text: "Hope is a good thing, maybe the best of things, and no good thing ever dies.",
    author: "Andy Dufresne",
    source: "The Shawshank Redemption",
    category: "hope",
    language: "en"
  },
  {
    text: "Get busy living, or get busy dying.",
    author: "Andy Dufresne",
    source: "The Shawshank Redemption",
    category: "hope",
    language: "en"
  },
  {
    text: "Fear can hold you prisoner. Hope can set you free.",
    author: "Frank Darabont",
    source: "The Shawshank Redemption",
    category: "hope",
    language: "en"
  },
  {
    text: "Happiness is not something ready made. It comes from your own actions.",
    author: "Dalai Lama",
    category: "hope",
    language: "en"
  },
  {
    text: "The purpose of our lives is to be happy.",
    author: "Dalai Lama",
    category: "hope",
    language: "en"
  },
  {
    text: "We are all born with the capacity to be happy.",
    author: "Dalai Lama",
    category: "hope",
    language: "en"
  },
  {
    text: "The sun will rise, and we will try again.",
    author: "Unknown",
    category: "hope",
    language: "en"
  },
  {
    text: "The important thing is this: to be able at any moment to sacrifice what we are for what we could become.",
    author: "Charles Du Bois",
    category: "hope",
    language: "en"
  },
  {
    text: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
    category: "hope",
    language: "en"
  },
  {
    text: "Change is not a destination, it's a direction.",
    author: "Unknown",
    category: "hope",
    language: "en"
  },
  {
    text: "In the middle of difficulty lies opportunity.",
    author: "Albert Einstein",
    category: "hope",
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
    text: "Even if you're not ready for the day, it cannot always be night.",
    author: "Yennefer",
    source: "The Witcher 3",
    category: "hope",
    language: "en"
  },

  // ============================================
  // GROWTH (50+ quotes)
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
  {
    text: "The only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.",
    author: "Steve Jobs",
    category: "growth",
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
    text: "A ship in harbor is safe, but that is not what ships are built for.",
    author: "John A. Shedd",
    category: "growth",
    language: "en"
  },
  {
    text: "The people who are crazy enough to think they can change the world are the ones who do.",
    author: "Steve Jobs",
    category: "growth",
    language: "en"
  },
  {
    text: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs",
    category: "growth",
    language: "en"
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    category: "growth",
    language: "en"
  },
  {
    text: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.",
    author: "Steve Jobs",
    category: "growth",
    language: "en"
  },
  {
    text: "The ones who are crazy enough to think they can change the world are the ones who do.",
    author: "Steve Jobs",
    category: "growth",
    language: "en"
  },
  {
    text: "Stay hungry, stay foolish.",
    author: "Steve Jobs",
    category: "growth",
    language: "en"
  },
  {
    text: "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt",
    category: "growth",
    language: "en"
  },
  {
    text: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
    category: "growth",
    language: "en"
  },
  {
    text: "The greatest danger for most of us is not that our aim is too high and we miss it, but that it is too low and we reach it.",
    author: "Michelangelo",
    category: "growth",
    language: "en"
  },
  {
    text: "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
    author: "Jordan Belfort",
    category: "growth",
    language: "en"
  },
  {
    text: "Every moment is a fresh beginning.",
    author: "T.S. Eliot",
    category: "growth",
    language: "en"
  },
  {
    text: "The secret of change is to focus all of your energy not on fighting the old, but on building the new.",
    author: "Socrates",
    category: "growth",
    language: "en"
  },
  {
    text: "We are what we pretend to be, so we must be careful about what we pretend to be.",
    author: "Kurt Vonnegut",
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
    text: "Life is a journey, not a destination.",
    author: "Ralph Waldo Emerson",
    category: "growth",
    language: "en"
  },
  {
    text: "The big lesson in life, baby, is never be scared of anyone or anything.",
    author: "Frank Sinatra",
    category: "growth",
    language: "en"
  },
  {
    text: "The greatest wealth is to live content with little.",
    author: "Plato",
    category: "growth",
    language: "en"
  },
  {
    text: "In the middle of difficulty lies opportunity.",
    author: "Albert Einstein",
    category: "growth",
    language: "en"
  },
  {
    text: "It is our choices that show what we truly are, far more than our abilities.",
    author: "J.K. Rowling",
    source: "Harry Potter and the Chamber of Secrets",
    category: "growth",
    language: "en"
  },
  {
    text: "It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.",
    author: "J.K. Rowling",
    source: "Harry Potter and the Sorcerer's Stone",
    category: "growth",
    language: "en"
  },
  {
    text: "To the well-organized mind, death is but the next great adventure.",
    author: "J.K. Rowling",
    source: "Harry Potter and the Sorcerer's Stone",
    category: "growth",
    language: "en"
  },
  {
    text: "The mind is not a vessel to be filled, but a fire to be kindled.",
    author: "Plutarch",
    category: "growth",
    language: "en"
  },
  {
    text: "The measure of intelligence is the ability to change.",
    author: "Albert Einstein",
    category: "growth",
    language: "en"
  },

  // ============================================
  // STRENGTH (50+ quotes)
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
  {
    text: "I am the master of my fate: I am the captain of my soul.",
    author: "William Ernest Henley",
    source: "Invictus",
    category: "strength",
    language: "en"
  },
  {
    text: "What does not kill me makes me stronger.",
    author: "Friedrich Nietzsche",
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
    text: "Strength does not come from winning. Your struggles develop your strengths.",
    author: "Arnold Schwarzenegger",
    category: "strength",
    language: "en"
  },
  {
    text: "The only way to be strong is to be weak.",
    author: "Unknown",
    category: "strength",
    language: "en"
  },
  {
    text: "The weak can never forgive. Forgiveness is the attribute of the strong.",
    author: "Mahatma Gandhi",
    category: "strength",
    language: "en"
  },
  {
    text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    author: "Ralph Waldo Emerson",
    category: "strength",
    language: "en"
  },
  {
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
    category: "strength",
    language: "en"
  },
  {
    text: "A woman is like a tea bag - you can't tell how strong she is until you put her in hot water.",
    author: "Eleanor Roosevelt",
    category: "strength",
    language: "en"
  },
  {
    text: "The only person you are destined to become is the person you decide to be.",
    author: "Ralph Waldo Emerson",
    category: "strength",
    language: "en"
  },
  {
    text: "Be who you are and say what you feel, because those who mind don't matter and those who matter don't mind.",
    author: "Dr. Seuss",
    category: "strength",
    language: "en"
  },
  {
    text: "The most common way people give up their power is by thinking they don't have any.",
    author: "Alice Walker",
    category: "strength",
    language: "en"
  },
  {
    text: "You have within you right now, everything you need to deal with whatever the world can throw at you.",
    author: "Brian Tracy",
    category: "strength",
    language: "en"
  },
  {
    text: "The secret of happiness is freedom, and the secret of freedom is courage.",
    author: "Thucydides",
    category: "strength",
    language: "en"
  },
  {
    text: "Courage is the most important of all the virtues because without courage, you can't practice any other virtue consistently.",
    author: "Maya Angelou",
    category: "strength",
    language: "en"
  },
  {
    text: "You are braver than you believe, stronger than you seem, and smarter than you think.",
    author: "A.A. Milne",
    source: "Winnie the Pooh",
    category: "strength",
    language: "en"
  },
  {
    text: "I am not afraid of storms, for I am learning how to sail my ship.",
    author: "Louisa May Alcott",
    source: "Little Women",
    category: "strength",
    language: "en"
  },
  {
    text: "It is not the mountain we conquer, but ourselves.",
    author: "Sir Edmund Hillary",
    category: "strength",
    language: "en"
  },
  {
    text: "The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion.",
    author: "Albert Camus",
    category: "strength",
    language: "en"
  },
  {
    text: "We are all in the gutter, but some of us are looking at the stars.",
    author: "Oscar Wilde",
    source: "Lady Windermere's Fan",
    category: "strength",
    language: "en"
  },
  {
    text: "The world breaks everyone, and afterward, some are strong at the broken places.",
    author: "Ernest Hemingway",
    source: "A Farewell to Arms",
    category: "strength",
    language: "en"
  },
  {
    text: "I have been bent and broken, but—I hope—into a better shape.",
    author: "Charles Dickens",
    source: "Great Expectations",
    category: "strength",
    language: "en"
  },
  {
    text: "The only thing that makes life possible is permanent, intolerable uncertainty; not knowing what comes next.",
    author: "Ursula K. Le Guin",
    category: "strength",
    language: "en"
  },

  // ============================================
  // LOVE (40+ quotes)
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
  {
    text: "I have lived a thousand lives, and I have loved a thousand loves.",
    author: "Unknown",
    category: "love",
    language: "en"
  },
  {
    text: "The only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.",
    author: "Steve Jobs",
    category: "love",
    language: "en"
  },
  {
    text: "It is not a lack of love, but a lack of friendship that makes unhappy marriages.",
    author: "Friedrich Nietzsche",
    category: "love",
    language: "en"
  },
  {
    text: "Love is love is love is love.",
    author: "Unknown",
    category: "love",
    language: "en"
  },
  {
    text: "The greatest thing you'll ever learn is just to love and be loved in return.",
    author: "Eden Ahbez",
    category: "love",
    language: "en"
  },
  {
    text: "Love is not about possession. It's about appreciation.",
    author: "Unknown",
    category: "love",
    language: "en"
  },
  {
    text: "The best love is the kind that awakens the soul and makes us reach for more.",
    author: "Nicholas Sparks",
    source: "The Notebook",
    category: "love",
    language: "en"
  },
  {
    text: "Love is the only reality and it is not a mere sentiment. It is the ultimate truth that lies at the heart of creation.",
    author: "Rabindranath Tagore",
    category: "love",
    language: "en"
  },
  {
    text: "Love is the beauty of the soul.",
    author: "St. Augustine",
    category: "love",
    language: "en"
  },
  {
    text: "Love is the only force capable of transforming an enemy into a friend.",
    author: "Martin Luther King Jr.",
    category: "love",
    language: "en"
  },
  {
    text: "The most important thing in life is to learn how to give out love, and to let it come in.",
    author: "Morrie Schwartz",
    source: "Tuesdays with Morrie",
    category: "love",
    language: "en"
  },
  {
    text: "Love is a friendship set to music.",
    author: "Joseph Campbell",
    category: "love",
    language: "en"
  },
  {
    text: "Love is the only thing that can be divided without being diminished.",
    author: "Unknown",
    category: "love",
    language: "en"
  },
  {
    text: "Love is the most powerful force in the universe.",
    author: "Unknown",
    category: "love",
    language: "en"
  },
  {
    text: "To love is nothing. To be loved is something. But to love and be loved, that's everything.",
    author: "T. Tolis",
    category: "love",
    language: "en"
  },
  {
    text: "The heart wants what it wants.",
    author: "Emily Dickinson",
    category: "love",
    language: "en"
  },
  {
    text: "Love is the poetry of the senses.",
    author: "Honoré de Balzac",
    category: "love",
    language: "en"
  },
  {
    text: "There is no remedy for love but to love more.",
    author: "Henry David Thoreau",
    category: "love",
    language: "en"
  },
  {
    text: "Love is the emblem of eternity; it confounds all notion of time.",
    author: "Madame de Staël",
    category: "love",
    language: "en"
  },
  {
    text: "The most powerful thing in the world is love.",
    author: "Unknown",
    category: "love",
    language: "en"
  },

  // ============================================
  // LIFE (55+ quotes)
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
    text: "In the middle of the journey of our life I found myself astray in a dark wood where the straight road was lost.",
    author: "Dante Alighieri",
    source: "Inferno",
    category: "life",
    language: "it"
  },
  {
    text: "The meaning of life is to find your gift. The purpose of life is to give it away.",
    author: "Pablo Picasso",
    category: "life",
    language: "en"
  },
  {
    text: "Life is not measured by the number of breaths we take, but by the moments that take our breath away.",
    author: "Maya Angelou",
    category: "life",
    language: "en"
  },
  {
    text: "Life is a series of natural and spontaneous changes. Don't resist them; that only creates sorrow.",
    author: "Lao Tzu",
    category: "life",
    language: "en"
  },
  {
    text: "The good life is one inspired by love and guided by knowledge.",
    author: "Bertrand Russell",
    category: "life",
    language: "en"
  },
  {
    text: "Life is like a mirror. Smile at it and it smiles back at you.",
    author: "Peace Pilgrim",
    category: "life",
    language: "en"
  },
  {
    text: "The greatest pleasure in life is doing what people say you cannot do.",
    author: "Walter Bagehot",
    category: "life",
    language: "en"
  },
  {
    text: "Life is a dream for the wise, a game for the fool, a comedy for the rich, a tragedy for the poor.",
    author: "Sholom Aleichem",
    category: "life",
    language: "en"
  },
  {
    text: "Life is 10% what happens to you and 90% how you react to it.",
    author: "Charles R. Swindoll",
    category: "life",
    language: "en"
  },
  {
    text: "The only way to make sense out of change is to plunge into it, move with it, and join the dance.",
    author: "Alan Watts",
    category: "life",
    language: "en"
  },
  {
    text: "The meaning of life is not simply to exist, to survive, but to move ahead, to go up, to achieve, to conquer.",
    author: "Arnold Schwarzenegger",
    category: "life",
    language: "en"
  },
  {
    text: "Life is a beautiful struggle.",
    author: "Unknown",
    category: "life",
    language: "en"
  },
  {
    text: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
    category: "life",
    language: "en"
  },
  {
    text: "Life is what we make it, always has been, always will be.",
    author: "Grandma Moses",
    category: "life",
    language: "en"
  },
  {
    text: "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt",
    category: "life",
    language: "en"
  },
  {
    text: "Life is not a problem to be solved, but a reality to be experienced.",
    author: "Søren Kierkegaard",
    category: "life",
    language: "en"
  },
  {
    text: "The most important thing is to enjoy your life—to be happy—it's all that matters.",
    author: "Audrey Hepburn",
    category: "life",
    language: "en"
  },
  {
    text: "Life is a long lesson in humility.",
    author: "James M. Barrie",
    category: "life",
    language: "en"
  },
  {
    text: "The great thing about life is that it's never too late to start over.",
    author: "Unknown",
    category: "life",
    language: "en"
  },
  {
    text: "Life is a series of collisions with the future; it is not the sum of what we have been, but what we yearn to be.",
    author: "José Ortega y Gasset",
    category: "life",
    language: "en"
  },
  {
    text: "The main thing is to keep the main thing the main thing.",
    author: "Stephen Covey",
    category: "life",
    language: "en"
  },
  {
    text: "Life is a balance of holding on and letting go.",
    author: "Rumi",
    category: "life",
    language: "en"
  },

  // ============================================
  // GRIEF & HEALING (35+ quotes)
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
  {
    text: "There is a sacredness in tears. They are not the mark of weakness, but of power.",
    author: "Washington Irving",
    category: "grief",
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
    text: "Grief is the last act of love we have to give to those we loved. Where there is deep grief, there was great love.",
    author: "Unknown",
    category: "grief",
    language: "en"
  },
  {
    text: "The pain of grief is just as much a part of life as the joy of love.",
    author: "Unknown",
    category: "grief",
    language: "en"
  },
  {
    text: "Grief is like the ocean; it comes in waves, ebbing and flowing. Sometimes the water is calm, and sometimes it is overwhelming. All we can do is learn to swim.",
    author: "Vicki Harrison",
    category: "grief",
    language: "en"
  },
  {
    text: "The only way to get through grief is to go through it.",
    author: "Unknown",
    category: "grief",
    language: "en"
  },
  {
    text: "Grief is a journey, not a destination.",
    author: "Unknown",
    category: "grief",
    language: "en"
  },
  {
    text: "It's okay to not be okay.",
    author: "Unknown",
    category: "grief",
    language: "en"
  },
  {
    text: "Tears are the silent language of grief.",
    author: "Voltaire",
    category: "grief",
    language: "en"
  },
  {
    text: "Grief is love turned inside out.",
    author: "Unknown",
    category: "grief",
    language: "en"
  },
  {
    text: "The biggest lesson I've learned is that grief is a measure of love.",
    author: "Unknown",
    category: "grief",
    language: "en"
  },
  {
    text: "Grief is not a disorder, a disease or a sign of weakness. It is an emotional, physical and spiritual necessity.",
    author: "Unknown",
    category: "grief",
    language: "en"
  },

  // ============================================
  // FOCUS (30+ quotes)
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
  {
    text: "The man who chases two rabbits catches neither.",
    author: "Confucius",
    category: "focus",
    language: "en"
  },
  {
    text: "Focus is the key to success.",
    author: "Unknown",
    category: "focus",
    language: "en"
  },
  {
    text: "Lack of direction, not lack of time, is the problem. We all have twenty-four hour days.",
    author: "Zig Ziglar",
    category: "focus",
    language: "en"
  },
  {
    text: "The secret of success is focus.",
    author: "Unknown",
    category: "focus",
    language: "en"
  },
  {
    text: "Your focus determines your reality.",
    author: "Qui-Gon Jinn",
    source: "Star Wars",
    category: "focus",
    language: "en"
  },
  {
    text: "Focus on the present moment. The past is gone, the future is not yet here.",
    author: "Unknown",
    category: "focus",
    language: "en"
  },
  {
    text: "The key to success is to focus on goals, not obstacles.",
    author: "Unknown",
    category: "focus",
    language: "en"
  },
  {
    text: "Focus is the art of knowing what to ignore.",
    author: "Unknown",
    category: "focus",
    language: "en"
  },
  {
    text: "The most important thing is to focus on what you can control.",
    author: "Unknown",
    category: "focus",
    language: "en"
  },
  {
    text: "Focus on the positive. The negative will take care of itself.",
    author: "Unknown",
    category: "focus",
    language: "en"
  },
  {
    text: "You cannot have two masters. You have to choose what you focus on.",
    author: "Unknown",
    category: "focus",
    language: "en"
  },
  {
    text: "Focus on the things you can change, not the things you can't.",
    author: "Unknown",
    category: "focus",
    language: "en"
  },
  {
    text: "The essence of strategy is choosing what not to do.",
    author: "Michael Porter",
    category: "focus",
    language: "en"
  },
  {
    text: "Focus is a matter of deciding what things you're not going to do.",
    author: "John Carmack",
    category: "focus",
    language: "en"
  },
  {
    text: "The most successful people are those who focus on their strengths, not their weaknesses.",
    author: "Unknown",
    category: "focus",
    language: "en"
  },

  // ============================================
  // CHANGE (30+ quotes)
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
  {
    text: "The art of life lies in a constant readjustment to our surroundings.",
    author: "Kakuzo Okakura",
    category: "change",
    language: "en"
  },
  {
    text: "Change is the only constant in life.",
    author: "Heraclitus",
    category: "change",
    language: "en"
  },
  {
    text: "In the midst of change, there is opportunity.",
    author: "Unknown",
    category: "change",
    language: "en"
  },
  {
    text: "Change is not a threat, it's an opportunity.",
    author: "Unknown",
    category: "change",
    language: "en"
  },
  {
    text: "The only way to make sense out of change is to plunge into it, move with it, and join the dance.",
    author: "Alan Watts",
    category: "change",
    language: "en"
  },
  {
    text: "Change is inevitable. Growth is optional.",
    author: "John C. Maxwell",
    category: "change",
    language: "en"
  },
  {
    text: "When you're finished changing, you're finished.",
    author: "Benjamin Franklin",
    category: "change",
    language: "en"
  },
  {
    text: "Adapt or die.",
    author: "Unknown",
    category: "change",
    language: "en"
  },
  {
    text: "The key to change is to let go of fear.",
    author: "Unknown",
    category: "change",
    language: "en"
  },
  {
    text: "Change is the end result of all true learning.",
    author: "Leo Buscaglia",
    category: "change",
    language: "en"
  },
  {
    text: "The first step toward change is awareness.",
    author: "Unknown",
    category: "change",
    language: "en"
  },
  {
    text: "Change is the essence of life.",
    author: "Unknown",
    category: "change",
    language: "en"
  },
  {
    text: "You can't change what you don't acknowledge.",
    author: "Unknown",
    category: "change",
    language: "en"
  },
  {
    text: "Change is not an event, it's a process.",
    author: "Unknown",
    category: "change",
    language: "en"
  },

  // ============================================
  // TRUTH (25+ quotes)
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
  {
    text: "What is a man? A miserable little pile of secrets.",
    author: "Dracula",
    source: "Castlevania",
    category: "truth",
    language: "en"
  },
  {
    text: "A man is not what he thinks he is, he is what he hides.",
    author: "André Malraux",
    category: "truth",
    language: "fr"
  },
  {
    text: "The truth is the only thing worth fighting for.",
    author: "Unknown",
    category: "truth",
    language: "en"
  },
  {
    text: "Truth is the daughter of time, not of authority.",
    author: "Francis Bacon",
    category: "truth",
    language: "en"
  },
  {
    text: "The truth is not for all men, but only for those who seek it.",
    author: "Ayn Rand",
    category: "truth",
    language: "en"
  },
  {
    text: "Truth is the most valuable thing we have.",
    author: "Unknown",
    category: "truth",
    language: "en"
  },
  {
    text: "Truth is the path to freedom.",
    author: "Unknown",
    category: "truth",
    language: "en"
  },
  {
    text: "The truth is the most powerful weapon.",
    author: "Unknown",
    category: "truth",
    language: "en"
  },
  {
    text: "Truth is the greatest gift.",
    author: "Unknown",
    category: "truth",
    language: "en"
  },
  {
    text: "Truth is the foundation of all virtue.",
    author: "Unknown",
    category: "truth",
    language: "en"
  },
  {
    text: "Truth is the most precious thing.",
    author: "Unknown",
    category: "truth",
    language: "en"
  },
  {
    text: "The truth is always the truth, even when nobody believes it.",
    author: "Unknown",
    category: "truth",
    language: "en"
  },
  {
    text: "Truth is the light that guides the way.",
    author: "Unknown",
    category: "truth",
    language: "en"
  },
  {
    text: "The truth will always be the truth.",
    author: "Unknown",
    category: "truth",
    language: "en"
  },

  // ============================================
  // GAME & ANIME QUOTES (Deep ones) (Expanded)
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
  },
  // ============================================
  // MORE GAME & ANIME QUOTES
  // ============================================
  {
    text: "The only thing we have to fear is fear itself.",
    author: "Franklin D. Roosevelt",
    category: "courage",
    language: "en"
  },
  {
    text: "To die fighting is the greatest honor.",
    author: "Kratos",
    source: "God of War",
    category: "courage",
    language: "en"
  },
  {
    text: "Do not be sorry. Be better.",
    author: "Kratos",
    source: "God of War",
    category: "growth",
    language: "en"
  },
  {
    text: "The cycle ends here. We must be better than this.",
    author: "Kratos",
    source: "God of War",
    category: "growth",
    language: "en"
  },
  {
    text: "We are what we choose to be.",
    author: "Kratos",
    source: "God of War",
    category: "growth",
    language: "en"
  },
  {
    text: "You are not the god of war. You are the god of hope.",
    author: "Athena",
    source: "God of War",
    category: "hope",
    language: "en"
  },
  {
    text: "The measure of a man is not the strength of his arms, but the strength of his heart.",
    author: "Kratos",
    source: "God of War",
    category: "strength",
    language: "en"
  },
  {
    text: "What is a king? A king is a man who rules his own soul.",
    author: "Dostoevsky",
    source: "The Brothers Karamazov",
    category: "wisdom",
    language: "en"
  },
  {
    text: "Pain is temporary. Quitting lasts forever.",
    author: "Lance Armstrong",
    category: "perseverance",
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
    text: "I have no enemies.",
    author: "Thorfinn",
    source: "Vinland Saga",
    category: "wisdom",
    language: "en"
  },
  {
    text: "A true warrior doesn't need a sword.",
    author: "Thorfinn",
    source: "Vinland Saga",
    category: "wisdom",
    language: "en"
  },
  {
    text: "You have no enemies. No one has any enemies. There is no one that it's okay to hurt.",
    author: "Thorfinn",
    source: "Vinland Saga",
    category: "wisdom",
    language: "en"
  },
  {
    text: "The world is a cruel place, but it's also beautiful.",
    author: "Thorfinn",
    source: "Vinland Saga",
    category: "hope",
    language: "en"
  },
  {
    text: "I will not run away.",
    author: "Thorfinn",
    source: "Vinland Saga",
    category: "courage",
    language: "en"
  },
  {
    text: "To be a warrior, you must first be a human.",
    author: "Thorfinn",
    source: "Vinland Saga",
    category: "growth",
    language: "en"
  },
  {
    text: "The only way to get rid of a monster is to become a monster.",
    author: "Eren Yeager",
    source: "Attack on Titan",
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
    text: "The world is cruel, but it is also beautiful.",
    author: "Mikasa Ackerman",
    source: "Attack on Titan",
    category: "hope",
    language: "en"
  },
  {
    text: "We are all the same. We are all just human beings.",
    author: "Eren Yeager",
    source: "Attack on Titan",
    category: "wisdom",
    language: "en"
  },
  {
    text: "The only way to survive in this world is to keep moving forward.",
    author: "Eren Yeager",
    source: "Attack on Titan",
    category: "perseverance",
    language: "en"
  },
  {
    text: "You are free to choose. You are free to believe.",
    author: "Eren Yeager",
    source: "Attack on Titan",
    category: "perseverance",
    language: "en"
  },
  {
    text: "The world is a beautiful place, but it's also full of pain.",
    author: "Eren Yeager",
    source: "Attack on Titan",
    category: "wisdom",
    language: "en"
  },
  {
    text: "He who fights monsters should see to it that he himself does not become a monster.",
    author: "Friedrich Nietzsche",
    category: "wisdom",
    language: "en"
  },
  {
    text: "The greatest deception men suffer is from their own opinions.",
    author: "Leonardo da Vinci",
    category: "wisdom",
    language: "en"
  },
  {
    text: "Nothing is so firmly believed as that which is least known.",
    author: "Michel de Montaigne",
    category: "wisdom",
    language: "en"
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
  {
    text: "The unexamined life is not worth living.",
    author: "Socrates",
    category: "wisdom",
    language: "en"
  },
  {
    text: "It is the mark of an educated mind to be able to entertain a thought without accepting it.",
    author: "Aristotle",
    category: "wisdom",
    language: "en"
  },
  {
    text: "The only thing I know is that I know nothing.",
    author: "Socrates",
    category: "wisdom",
    language: "en"
  },
  {
    text: "The secret of getting ahead is getting started.",
    author: "Mark Twain",
    category: "wisdom",
    language: "en"
  },
  {
    text: "Never let the fear of striking out keep you from playing the game.",
    author: "Babe Ruth",
    category: "wisdom",
    language: "en"
  },
  {
    text: "The difference between the impossible and the possible lies in a person's determination.",
    author: "Tommy Lasorda",
    category: "wisdom",
    language: "en"
  },
  {
    text: "It's not the size of the dog in the fight, it's the size of the fight in the dog.",
    author: "Mark Twain",
    category: "wisdom",
    language: "en"
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    category: "wisdom",
    language: "en"
  },
  {
    text: "Stay hungry, stay foolish.",
    author: "Steve Jobs",
    category: "wisdom",
    language: "en"
  },
  {
    text: "The greatest danger for most of us is not that our aim is too high and we miss it, but that it is too low and we reach it.",
    author: "Michelangelo",
    category: "wisdom",
    language: "en"
  },
  {
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
    category: "wisdom",
    language: "en"
  },
  {
    text: "The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.",
    author: "Mark Caine",
    category: "wisdom",
    language: "en"
  },
  {
    text: "The only person you are destined to become is the person you decide to be.",
    author: "Ralph Waldo Emerson",
    category: "wisdom",
    language: "en"
  },
  {
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
    category: "wisdom",
    language: "en"
  },
  {
    text: "The best preparation for tomorrow is doing your best today.",
    author: "H. Jackson Brown Jr.",
    category: "wisdom",
    language: "en"
  },
  {
    text: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    author: "Albert Einstein",
    category: "wisdom",
    language: "en"
  },
  {
    text: "Imagination is more important than knowledge.",
    author: "Albert Einstein",
    category: "wisdom",
    language: "en"
  },
  {
    text: "The important thing is not to stop questioning.",
    author: "Albert Einstein",
    category: "wisdom",
    language: "en"
  },
  {
    text: "Everything you've ever wanted is on the other side of fear.",
    author: "George Addair",
    category: "wisdom",
    language: "en"
  },
  {
    text: "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt",
    category: "wisdom",
    language: "en"
  },
  {
    text: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
    category: "wisdom",
    language: "en"
  },
  {
    text: "Know from whence you came. If you know whence you came, there are absolutely no limitations to where you can go.",
    author: "James Baldwin",
    category: "wisdom",
    language: "en"
  },
  {
    text: "The price of anything is the amount of life you exchange for it.",
    author: "Henry David Thoreau",
    category: "wisdom",
    language: "en"
  },
  {
    text: "Beware the barrenness of a busy life.",
    author: "Socrates",
    category: "wisdom",
    language: "en"
  },
  {
    text: "The greatest wealth is to live content with little.",
    author: "Plato",
    category: "wisdom",
    language: "en"
  },
  {
    text: "The most difficult thing to understand is the income tax.",
    author: "Albert Einstein",
    category: "wisdom",
    language: "en"
  },
  {
    text: "Time is the wisest counselor.",
    author: "Pericles",
    category: "wisdom",
    language: "en"
  },
  {
    text: "The measure of intelligence is the ability to change.",
    author: "Albert Einstein",
    category: "wisdom",
    language: "en"
  },
  {
    text: "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
    author: "Eleanor Roosevelt",
    category: "wisdom",
    language: "en"
  },
  {
    text: "The only thing we have to fear is fear itself.",
    author: "Franklin D. Roosevelt",
    category: "wisdom",
    language: "en"
  },
  {
    text: "It's not what happens to you, but how you react to it that matters.",
    author: "Epictetus",
    category: "wisdom",
    language: "en"
  },
  {
    text: "The more I learn, the more I realize how much I don't know.",
    author: "Albert Einstein",
    category: "wisdom",
    language: "en"
  },
  {
    text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    author: "Aristotle",
    category: "wisdom",
    language: "en"
  },
  {
    text: "The soul is dyed by the color of its thoughts.",
    author: "Marcus Aurelius",
    source: "Meditations",
    category: "wisdom",
    language: "en"
  },
  {
    text: "There is no genius without a touch of madness.",
    author: "Seneca",
    category: "wisdom",
    language: "en"
  },
  {
    text: "In the midst of chaos, there is also opportunity.",
    author: "Sun Tzu",
    source: "The Art of War",
    category: "wisdom",
    language: "en"
  },
  {
    text: "The supreme art of war is to subdue the enemy without fighting.",
    author: "Sun Tzu",
    source: "The Art of War",
    category: "wisdom",
    language: "en"
  },
  {
    text: "If you know the enemy and know yourself, you need not fear the result of a hundred battles.",
    author: "Sun Tzu",
    source: "The Art of War",
    category: "wisdom",
    language: "en"
  },
  {
    text: "He who is prudent and lies in wait for an enemy who is not, will be victorious.",
    author: "Sun Tzu",
    source: "The Art of War",
    category: "wisdom",
    language: "en"
  },
  {
    text: "Great acts are made up of small deeds.",
    author: "Lao Tzu",
    source: "Tao Te Ching",
    category: "wisdom",
    language: "en"
  },
  {
    text: "To see things in the seed, that is genius.",
    author: "Lao Tzu",
    source: "Tao Te Ching",
    category: "wisdom",
    language: "en"
  },
  {
    text: "When you are content to be simply yourself and don't compare or compete, everybody will respect you.",
    author: "Lao Tzu",
    source: "Tao Te Ching",
    category: "wisdom",
    language: "en"
  },
  {
    text: "The softest things in the world overcome the hardest things in the world.",
    author: "Lao Tzu",
    source: "Tao Te Ching",
    category: "wisdom",
    language: "en"
  },
  {
    text: "Those who know do not speak. Those who speak do not know.",
    author: "Lao Tzu",
    source: "Tao Te Ching",
    category: "wisdom",
    language: "en"
  },
  {
    text: "Fame or integrity: which is more important?",
    author: "Lao Tzu",
    source: "Tao Te Ching",
    category: "wisdom",
    language: "en"
  },
  {
    text: "The flame that burns twice as bright burns half as long.",
    author: "Lao Tzu",
    source: "Tao Te Ching",
    category: "wisdom",
    language: "en"
  },
  {
    text: "A journey of a thousand miles begins with a single step.",
    author: "Lao Tzu",
    source: "Tao Te Ching",
    category: "wisdom",
    language: "en"
  },
  {
    text: "The best fighter is never angry.",
    author: "Lao Tzu",
    source: "Tao Te Ching",
    category: "wisdom",
    language: "en"
  },
  {
    text: "Nature does not hurry, yet everything is accomplished.",
    author: "Lao Tzu",
    source: "Tao Te Ching",
    category: "wisdom",
    language: "en"
  },
  {
    text: "The man who moves a mountain begins by carrying away small stones.",
    author: "Confucius",
    category: "wisdom",
    language: "en"
  },
  {
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
    category: "wisdom",
    language: "en"
  },
  {
    text: "Our greatest glory is not in never falling, but in rising every time we fall.",
    author: "Confucius",
    category: "wisdom",
    language: "en"
  },
  {
    text: "Everything has beauty, but not everyone sees it.",
    author: "Confucius",
    category: "wisdom",
    language: "en"
  },
  {
    text: "When it is obvious that the goals cannot be reached, don't adjust the goals, adjust the action steps.",
    author: "Confucius",
    category: "wisdom",
    language: "en"
  },
  {
    text: "The man who says he can, and the man who says he cannot are both correct.",
    author: "Confucius",
    category: "wisdom",
    language: "en"
  },
  {
    text: "Silence is a source of great strength.",
    author: "Lao Tzu",
    source: "Tao Te Ching",
    category: "wisdom",
    language: "en"
  },
  {
    text: "To know what you know and what you do not know, that is true knowledge.",
    author: "Confucius",
    category: "wisdom",
    language: "en"
  }
];

const DEFAULT_QUOTE: Quote = {
  text: "It is not the critic who counts; not the man who points out how the strong man stumbles... The credit belongs to the man who is actually in the arena.",
  author: "Theodore Roosevelt",
  category: "courage",
  language: "en"
};

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
    return DEFAULT_QUOTE;
  }
  return filtered[Math.floor(Math.random() * filtered.length)];
};