const textData = [
  {
    content:
      "If they can get you asking the wrong questions, they don't have to worry about answers.",
    description: "Thomas Pynchon, Gravity's Rainbow",
    userId: 1,
    tags: ["quote"],
  },
  {
    content: "We judge others by their actions and ourselves by our intentions",
    description: "Stephen Covey",
    userId: 1,
    tags: ["quote"],
  },
  {
    content:
      "Sometimes you never realize the value of a moment until it becomes a memory",
    description: "Dr. Seuss",
    userId: 1,
    tags: ["quote", "sad"],
  },
  {
    content: "Ad Hoc",
    description: "For this purpose",
    userId: 1,
    tags: ["latin", "project names"],
  },
  {
    content: "Acta no verba",
    description: "Deeds not words",
    userId: 1,
    tags: ["latin"],
  },
  {
    content: "Et cetera",
    description: "And others, and the rest",
    userId: 1,
    tags: ["latin"],
  },
  {
    content:
      "We are what we repeatedly do. Excellence, then, is not an act, but a habit",
    description: "Aristotle",
    userId: 1,
    tags: ["quote", "inspire"],
  },
  {
    content: "Hiraeth",
    description: "A spiritual longing for a home, which maybe never was",
    userId: 1,
    tags: ["project names", "welsh"],
  },
  {
    content: "Fall down seven times, stand up eight",
    description: "Japanese Proverb",
    userId: 1,
    tags: ["quote", "inspire"],
  },
  {
    content: "Ziggurat",
    description: "",
    userId: 1,
    tags: ["project names"],
  },
  {
    content:
      "All we have to decide is what to do with the time that is given to us",
    description: "Tolkien",
    userId: 1,
    tags: ["quote", "inspire"],
  },
  {
    content: "Choose risk over regret, always.",
    description: "Unknown",
    userId: 1,
    tags: ["quote", "risk"],
  },
  {
    content: "office",
    userId: 1,
    tags: ["suffixes"],
  },
  {
    content: "studio",
    userId: 1,
    tags: ["suffixes"],
  },
  {
    content: "archive",
    userId: 1,
    tags: ["suffixes"],
  },
  {
    content: "room",
    userId: 1,
    tags: ["suffixes"],
  },
  {
    content: "Fiat Lux",
    description: "Let there be light",
    userId: 1,
    tags: ["latin", "berkeley"],
  },
  {
    content: "Carpe Diem",
    description: "Seize the day",
    userId: 1,
    tags: ["latin", "motivation"],
  },
  {
    content: "Memento Mori",
    description: "Remember that you will die",
    userId: 1,
    tags: ["latin", "philosophy"],
  },
  {
    content:
      "Resilience is not what happens to you, but how you react to, respond to, and recover from what happens to you.",
    description: "Jeffrey Gitomer",
    userId: 1,
    tags: ["quote", "resilience"],
  },
  {
    content: "Per aspera ad astra",
    description: "Through hardships to the stars",
    userId: 1,
    tags: ["latin", "inspire"],
  },
  {
    content: "Lorem Ipsum",
    description: "Standard placeholder text",
    userId: 1,
    tags: ["placeholder"],
  },
  {
    content: "Tempus fugit",
    description: "Time flies",
    userId: 1,
    tags: ["latin", "time"],
  },
  {
    content: "Cogito, ergo sum",
    description: "I think, therefore I am",
    userId: 1,
    tags: ["latin", "philosophy"],
  },
  {
    content: "In vino veritas",
    description: "In wine, truth",
    userId: 1,
    tags: ["latin", "truth"],
  },
  {
    content: "veni, vidi, vici",
    description: "I came, I saw, I conquered",
    userId: 1,
    tags: ["latin", "victory"],
  },
  {
    content: "Veritas",
    description: "Truth",
    userId: 1,
    tags: ["latin"],
  },
  {
    content: "Nemo me impune lacessit",
    description: "No one provokes me with impunity",
    userId: 1,
    tags: ["latin", "motto"],
  },
  {
    content: "Amor fati",
    description: "Love of fate",
    userId: 1,
    tags: ["latin", "philosophy"],
  },
  {
    content: "Sapere aude",
    description: "Dare to know",
    userId: 1,
    tags: ["latin", "philosophy"],
  },
  {
    content: "Alea iacta est",
    description: "The die is cast",
    userId: 1,
    tags: ["latin", "historical"],
  },
  {
    content: "Knowledge is power",
    description: "Sir Francis Bacon",
    userId: 1,
    tags: ["quote", "knowledge"],
  },
  {
    content: "Ignorance is bliss",
    description: "Unknown",
    userId: 1,
    tags: ["quote", "ignorance"],
  },
  {
    content: "1234567890",
    description: "Sequence of numbers",
    userId: 1,
    tags: ["numbers"],
  },
  {
    content: "9876543210",
    description: "Reverse sequence of numbers",
    userId: 1,
    tags: ["numbers"],
  },
  {
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    description: "Lorem Ipsum example",
    userId: 1,
    tags: ["lorem ipsum", "latin"],
  },
  {
    content: "Dolor sit amet, lorem ipsum.",
    description: "Lorem Ipsum variation",
    userId: 1,
    tags: ["lorem ipsum"],
  },
  {
    content: "The quick brown fox jumps over the lazy dog.",
    description: "Pangram",
    userId: 1,
    tags: ["pangram"],
  },
  {
    content: "Pack my box with five dozen liquor jugs.",
    description: "Pangram",
    userId: 1,
    tags: ["pangram"],
  },
  {
    content: "Nike",
    description: "Brand name",
    userId: 1,
    tags: ["brand names"],
  },
  {
    content: "Apple",
    description: "Brand name",
    userId: 1,
    tags: ["brand names"],
  },
  {
    content: "Google",
    description: "Brand name",
    userId: 1,
    tags: ["brand names"],
  },
  {
    content: "Microsoft",
    description: "Brand name",
    userId: 1,
    tags: ["brand names"],
  },
  {
    content: "Amazon",
    description: "Brand name",
    userId: 1,
    tags: ["brand names"],
  },
  {
    content: "Blue sky, green grass.",
    description: "Simple description",
    userId: 1,
    tags: ["simple"],
  },
  {
    content: "Red apple, green apple.",
    description: "Simple description",
    userId: 1,
    tags: ["simple"],
  },
  {
    content: "Hello World!",
    description: "Classic programming output",
    userId: 1,
    tags: ["programming", "classic"],
  },
  {
    content: "console.log('Hello, World!');",
    description: "JavaScript example",
    userId: 1,
    tags: ["programming", "javascript"],
  },
  {
    content: "def hello_world(): print('Hello, World!')",
    description: "Python example",
    userId: 1,
    tags: ["programming", "python"],
  },
  {
    content: "System.out.println('Hello, World!');",
    description: "Java example",
    userId: 1,
    tags: ["programming", "java"],
  },
  {
    content:
      "public static void main(String[] args) { System.out.println('Hello, World!'); }",
    description: "Java example",
    userId: 1,
    tags: ["programming", "java"],
  },
  {
    content: "print('Hello, World!')",
    description: "Python example",
    userId: 1,
    tags: ["programming", "python"],
  },
  {
    content: "Arial",
    description: "Font name",
    userId: 1,
    tags: ["fonts", "typography"],
  },
  {
    content: "Times New Roman",
    description: "Font name",
    userId: 1,
    tags: ["fonts", "typography"],
  },
  {
    content: "Courier New",
    description: "Font name",
    userId: 1,
    tags: ["fonts", "typography"],
  },
  {
    content: "Comic Sans MS",
    description: "Font name",
    userId: 1,
    tags: ["fonts", "typography"],
  },
  {
    content: "Quick brown fox",
    description: "Pangram fragment",
    userId: 1,
    tags: ["pangram"],
  },
  {
    content: "Lazy dog",
    description: "Pangram fragment",
    userId: 1,
    tags: ["pangram"],
  },
  {
    content: "45.67",
    description: "Floating point number",
    userId: 1,
    tags: ["numbers", "math"],
  },
  {
    content: "3.14159",
    description: "Pi approximation",
    userId: 1,
    tags: ["numbers", "math"],
  },
  {
    content: "1.61803",
    description: "Golden ratio approximation",
    userId: 1,
    tags: ["numbers", "math"],
  },
  {
    content: "42",
    description: "The answer to life, the universe, and everything",
    userId: 1,
    tags: ["numbers", "humor"],
  },
  {
    content: "99 bottles of beer on the wall",
    description: "Song lyric",
    userId: 1,
    tags: ["lyrics", "song"],
  },
  {
    content: "Twinkle, twinkle, little star",
    description: "Nursery rhyme",
    userId: 1,
    tags: ["lyrics", "nursery rhyme"],
  },
  {
    content: "Jack and Jill went up the hill",
    description: "Nursery rhyme",
    userId: 1,
    tags: ["lyrics", "nursery rhyme"],
  },
  {
    content: "Lorem ipsum dolor sit amet",
    description: "Lorem Ipsum",
    userId: 1,
    tags: ["lorem ipsum"],
  },
  {
    content: "consectetur adipiscing elit",
    description: "Lorem Ipsum",
    userId: 1,
    tags: ["lorem ipsum"],
  },
  {
    content:
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    description: "Lorem Ipsum",
    userId: 1,
    tags: ["lorem ipsum"],
  },
  {
    content: "Ut enim ad minim veniam",
    description: "Lorem Ipsum",
    userId: 1,
    tags: ["lorem ipsum"],
  },
  {
    content:
      "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    description: "Lorem Ipsum",
    userId: 1,
    tags: ["lorem ipsum"],
  },
  {
    content:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    description: "Lorem Ipsum",
    userId: 1,
    tags: ["lorem ipsum"],
  },
  {
    content: "Excepteur sint occaecat cupidatat non proident",
    description: "Lorem Ipsum",
    userId: 1,
    tags: ["lorem ipsum"],
  },
  {
    content: "Sunt in culpa qui officia deserunt mollit anim id est laborum",
    description: "Lorem Ipsum",
    userId: 1,
    tags: ["lorem ipsum"],
  },
  {
    content: "Red",
    description: "Color",
    userId: 1,
    tags: ["color"],
  },
  {
    content: "Green",
    description: "Color",
    userId: 1,
    tags: ["color"],
  },
  {
    content: "Blue",
    description: "Color",
    userId: 1,
    tags: ["color"],
  },
  {
    content: "Cyan",
    description: "Color",
    userId: 1,
    tags: ["color"],
  },
  {
    content: "Magenta",
    description: "Color",
    userId: 1,
    tags: ["color"],
  },
  {
    content: "Yellow",
    description: "Color",
    userId: 1,
    tags: ["color"],
  },
  {
    content: "Black",
    description: "Color",
    userId: 1,
    tags: ["color"],
  },
  {
    content: "White",
    description: "Color",
    userId: 1,
    tags: ["color"],
  },
  {
    content: "1 + 1 = 2",
    description: "Simple arithmetic",
    userId: 1,
    tags: ["math", "simple"],
  },
  {
    content: "2 * 2 = 4",
    description: "Simple arithmetic",
    userId: 1,
    tags: ["math", "simple"],
  },
  {
    content: "5 / 5 = 1",
    description: "Simple arithmetic",
    userId: 1,
    tags: ["math", "simple"],
  },
  {
    content: "6 - 3 = 3",
    description: "Simple arithmetic",
    userId: 1,
    tags: ["math", "simple"],
  },
  {
    content: "4 % 2 = 0",
    description: "Simple arithmetic",
    userId: 1,
    tags: ["math", "simple"],
  },
  {
    content: "JavaScript",
    description: "Programming language",
    userId: 1,
    tags: ["programming", "languages"],
  },
  {
    content: "Python",
    description: "Programming language",
    userId: 1,
    tags: ["programming", "languages"],
  },
  {
    content: "Java",
    description: "Programming language",
    userId: 1,
    tags: ["programming", "languages"],
  },
  {
    content: "C++",
    description: "Programming language",
    userId: 1,
    tags: ["programming", "languages"],
  },
  {
    content: "C#",
    description: "Programming language",
    userId: 1,
    tags: ["programming", "languages"],
  },
  {
    content: "Ruby",
    description: "Programming language",
    userId: 1,
    tags: ["programming", "languages"],
  },
  {
    content: "Go",
    description: "Programming language",
    userId: 1,
    tags: ["programming", "languages"],
  },
  {
    content: "Swift",
    description: "Programming language",
    userId: 1,
    tags: ["programming", "languages"],
  },
  {
    content: "Kotlin",
    description: "Programming language",
    userId: 1,
    tags: ["programming", "languages"],
  },
  {
    content: "HTML",
    description: "Markup language",
    userId: 1,
    tags: ["programming", "markup"],
  },
  {
    content: "CSS",
    description: "Stylesheet language",
    userId: 1,
    tags: ["programming", "styles"],
  },
  {
    content: "SQL",
    description: "Query language",
    userId: 1,
    tags: ["programming", "database"],
  },
  {
    content: "MongoDB",
    description: "Database",
    userId: 1,
    tags: ["programming", "database"],
  },
  {
    content: "GraphQL",
    description: "Query language",
    userId: 1,
    tags: ["programming", "api"],
  },
  {
    content: "REST API",
    description: "API architecture",
    userId: 1,
    tags: ["programming", "api"],
  },
  {
    content: "JSON",
    description: "Data format",
    userId: 1,
    tags: ["programming", "data"],
  },
  {
    content: "XML",
    description: "Data format",
    userId: 1,
    tags: ["programming", "data"],
  },
  {
    content: "CSV",
    description: "Data format",
    userId: 1,
    tags: ["programming", "data"],
  },
  {
    content: "1,000,000",
    description: "One million",
    userId: 1,
    tags: ["numbers"],
  },
  {
    content: "3.14159",
    description: "Pi",
    userId: 1,
    tags: ["numbers", "math"],
  },
  {
    content: "2.71828",
    description: "Euler's number",
    userId: 1,
    tags: ["numbers", "math"],
  },
  {
    content: "161803398874989",
    description: "Golden ratio",
    userId: 1,
    tags: ["numbers", "math"],
  },
];

module.exports = textData;
