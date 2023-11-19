const textData = [
  {
    content:
      "The only limit to our realization of tomorrow will be our doubts of today.",
    userId: 1,
    tags: ["inspire", "doubt", "future"],
  },
  {
    content: "Believe you can and you're halfway there.",
    userId: 1,
    tags: ["inspire", "belief"],
  },
  {
    content: "In the middle of difficulty lies opportunity.",
    userId: 1,
    tags: ["inspire", "difficulty", "opportunity"],
  },
  {
    content: "Your time is limited, don't waste it living someone else's life.",
    userId: 1,
    tags: ["life", "time", "wisdom"],
  },
  {
    content: "The only way to do great work is to love what you do.",
    userId: 1,
    tags: ["work", "passion", "greatness"],
  },
  {
    content: "It always seems impossible until it's done.",
    userId: 1,
    tags: ["inspire", "impossible", "achievement"],
  },
  {
    content:
      "The future belongs to those who believe in the beauty of their dreams.",
    userId: 1,
    tags: ["future", "dreams", "belief"],
  },
  {
    content: "The best way to predict the future is to create it.",
    userId: 1,
    tags: ["future", "create", "prediction"],
  },
  {
    content:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    userId: 1,
    tags: ["success", "failure", "courage"],
  },
  {
    content:
      "Happiness is not something ready made. It comes from your own actions.",
    userId: 1,
    tags: ["happiness", "action", "life"],
  },
  {
    content:
      "In three words I can sum up everything I've learned about life: it goes on.",
    userId: 1,
    tags: ["life", "wisdom", "learning"],
  },
  {
    content: "The only thing we have to fear is fear itself.",
    userId: 1,
    tags: ["fear", "courage"],
  },
  {
    content: "Be the change that you wish to see in the world.",
    userId: 1,
    tags: ["change", "inspire", "world"],
  },
  {
    content:
      "Success is stumbling from failure to failure with no loss of enthusiasm.",
    userId: 1,
    tags: ["success", "failure", "enthusiasm"],
  },
  {
    content: "Life is what happens when you're busy making other plans.",
    userId: 1,
    tags: ["life", "plans", "wisdom"],
  },
  {
    content: "The purpose of our lives is to be happy.",
    userId: 1,
    tags: ["life", "purpose", "happiness"],
  },
  {
    content: "Strive not to be a success, but rather to be of value.",
    userId: 1,
    tags: ["success", "value", "strive"],
  },
  {
    content: "If you want to lift yourself up, lift up someone else.",
    userId: 1,
    tags: ["inspire", "kindness"],
  },
  {
    content:
      "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    userId: 1,
    tags: ["individuality", "accomplishment", "identity"],
  },
  {
    content:
      "The only person you are destined to become is the person you decide to be.",
    userId: 1,
    tags: ["destiny", "identity", "decision"],
  },
  {
    content: "Don't watch the clock; do what it does. Keep going.",
    userId: 1,
    tags: ["time", "persistence"],
  },
  {
    content:
      "Success usually comes to those who are too busy to be looking for it.",
    userId: 1,
    tags: ["success", "busyness"],
  },
  {
    content:
      "The only place where success comes before work is in the dictionary.",
    userId: 1,
    tags: ["success", "work"],
  },
  {
    content: "Don't count the days, make the days count.",
    userId: 1,
    tags: ["time", "inspire"],
  },
  {
    content: "A person who never made a mistake never tried anything new.",
    userId: 1,
    tags: ["mistake", "innovation"],
  },
  {
    content:
      "You have within you right now, everything you need to deal with whatever the world can throw at you.",
    userId: 1,
    tags: ["inspire", "self-reliance"],
  },
  {
    content: "The only impossible journey is the one you never begin.",
    userId: 1,
    tags: ["impossible", "journey"],
  },
  {
    content: "Your attitude, not your aptitude, will determine your altitude.",
    userId: 1,
    tags: ["attitude", "success"],
  },
  {
    content:
      "Do not wait to strike till the iron is hot, but make it hot by striking.",
    userId: 1,
    tags: ["proactivity", "action"],
  },
  {
    content: "It's not about ideas. It's about making ideas happen.",
    userId: 1,
    tags: ["ideas", "execution"],
  },
  {
    content:
      "The road to success and the road to failure are almost exactly the same.",
    userId: 1,
    tags: ["success", "failure"],
  },
  {
    content:
      "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    userId: 1,
    tags: ["inner strength", "wisdom"],
  },
  {
    content: "The best way to predict your future is to create it.",
    userId: 1,
    tags: ["future", "create"],
  },
  {
    content: "A goal is a dream with a deadline.",
    userId: 1,
    tags: ["goal", "dream"],
  },
  {
    content: "Act as if what you do makes a difference. It does.",
    userId: 1,
    tags: ["action", "difference"],
  },
  {
    content:
      "Success is not just about making money. It's about making a difference.",
    userId: 1,
    tags: ["success", "difference"],
  },
  {
    content: "It's not whether you get knocked down, it's whether you get up.",
    userId: 1,
    tags: ["resilience", "adversity"],
  },
  {
    content:
      "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.",
    userId: 1,
    tags: ["work", "satisfaction", "belief"],
  },
  {
    content: "The best revenge is massive success.",
    userId: 1,
    tags: ["success", "revenge"],
  },
  {
    content: "You miss 100% of the shots you don't take.",
    userId: 1,
    tags: ["risk", "opportunity"],
  },
  {
    content: "Great things never come from comfort zones.",
    userId: 1,
    tags: ["greatness", "comfort zone"],
  },
  {
    content:
      "The only way to achieve the impossible is to believe it is possible.",
    userId: 1,
    tags: ["impossible", "belief"],
  },
  {
    content: "If you want to achieve greatness stop asking for permission.",
    userId: 1,
    tags: ["greatness", "permission"],
  },
  {
    content:
      "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
    userId: 1,
    tags: ["goal", "self-limiting belief"],
  },
  {
    content:
      "The only place where success comes before work is in the dictionary.",
    userId: 1,
    tags: ["success", "work"],
  },
  {
    content: "Don't stop when you're tired. Stop when you're done.",
    userId: 1,
    tags: ["perseverance", "completion"],
  },
  {
    content: "Dream as if you'll live forever, live as if you'll die today.",
    userId: 1,
    tags: ["dream", "life"],
  },
  {
    content: "If you want to achieve greatness, stop asking for permission.",
    userId: 1,
    tags: ["greatness", "permission"],
  },
  {
    content:
      "Every morning brings new potential, but only if you make the most of it.",
    userId: 1,
    tags: ["morning", "potential"],
  },
];

module.exports = textData;
