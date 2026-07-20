// ---- This or That ----
const BU_MU_SU_MU_PAIRS = [
  { a: "Pizza", b: "Burger" },
  { a: "Beach", b: "Mountains" },
  { a: "Morning person", b: "Night owl" },
  { a: "Coffee", b: "Tea" },
  { a: "Movie night", b: "Series binge" },
  { a: "Summer", b: "Winter" },
  { a: "Dogs", b: "Cats" },
  { a: "Books", b: "Movies" },
  { a: "City life", b: "Nature life" },
  { a: "Planned trip", b: "Spontaneous trip" },
  { a: "Home cooking", b: "Eating out" },
  { a: "Texting", b: "Phone calls" },
  { a: "Early riser", b: "Late sleeper" },
  { a: "Sweet", b: "Savory" },
  { a: "Walking", b: "Cycling" },
  { a: "Concert", b: "Theater" },
  { a: "Camping", b: "Hotel" },
  { a: "House party", b: "Going out" },
  { a: "Handwritten letter", b: "Text message" },
  { a: "Surprise plan", b: "Organized plan" },
  { a: "Balcony view", b: "Sea view" },
  { a: "Picnic", b: "Restaurant" },
  { a: "Stargazing", b: "City lights" },
  { a: "Quiet evening", b: "Crowded party" },
];

// ---- Couples Game (Truth or Dare) ----
const TRUTH_QUESTIONS = [
  "When did you first realize you liked me?",
  "Is there a thought about me you've never told anyone?",
  "What's the one thing you'd most like to change about our relationship?",
  "What was your first impression of me?",
  "Which memory of us do you never forget?",
  "Do you have a small habit you've hidden from me?",
  "Was there a moment you felt jealous — when was it?",
  "Is there something you've been afraid to tell me?",
  "What would your dream anniversary look like?",
  "What are you proudest of in our relationship?",
  "If you were me for a day, what would you do?",
  "Which of our memories would you most want to relive?",
  "Is there something about me you've accepted rather than tried to change?",
  "Is there a 'thank you' you've never said out loud?",
  "When did I make you feel most special?",
  "What was the hardest moment in our relationship, and how did we get through it?",
  "What's your favorite small detail about me?",
  "What are you most curious about regarding our future?",
  "Is there something you've learned from me?",
  "Is there something on your mind right now that you haven't said?",
];

const DARE_CHALLENGES = [
  "Look into your partner's eyes and smile without talking for 30 seconds.",
  "Tell your partner 3 things you love about them.",
  "Do an impression of your partner.",
  "Dance together for one minute.",
  "Sing the chorus of a song to your partner.",
  "Act out the moment you first met.",
  "Write a short handwritten note and hand it over right now.",
  "Hug your partner with your eyes closed.",
  "Tell your funniest memory together without laughing before you finish.",
  "Give your partner a compliment without smiling.",
  "Touch foreheads with your partner and hold it for 20 seconds.",
  "Share a small dream you have for the future.",
  "Confess something for the first time (keep it small and sweet).",
  "Explain in one sentence why you chose your partner.",
  "Retell your partner's favorite memory from their point of view.",
  "Speak only in compliments for one minute.",
  "Make up a tiny song and sing it to your partner.",
  "Hold your partner's hand and describe the color of their eyes.",
  "Suggest an idea for your next date right now.",
  "Hug your partner and don't let go for 10 seconds.",
];

// ---- Tarot ----
const TAROT_DECK = [
  { name: "The Fool", upright: "A fresh start, courage, and a step into the unknown. Pure potential is with you.", reversedText: "Recklessness or fear of taking action. Think a little longer before you leap." },
  { name: "The Magician", upright: "Time to use the resources at hand. You have the power to turn intention into reality.", reversedText: "You may not be using your full potential. Watch out for manipulation." },
  { name: "The High Priestess", upright: "Trust your intuition. A hidden truth or piece of knowledge is about to surface.", reversedText: "You may be silencing your inner voice. Some secrets aren't ready to be revealed yet." },
  { name: "The Empress", upright: "A season of abundance, creativity, and growth. Nurture yourself and your projects.", reversedText: "Blocked creativity or neglecting self-care." },
  { name: "The Emperor", upright: "Structure, discipline, and control. Time to build on solid foundations.", reversedText: "Excessive rigidity or fear of losing control." },
  { name: "The Hierophant", upright: "Traditional wisdom, guidance, and learning. A mentor may have something to teach you.", reversedText: "Time to question convention and carve your own path." },
  { name: "The Lovers", upright: "Harmony, connection, and an important choice. Listen to what your heart says.", reversedText: "Disharmony or indecision in the face of a hard choice." },
  { name: "The Chariot", upright: "Willpower, determination, and victory. You're moving steadily toward your goal.", reversedText: "A loss of direction or a feeling of losing control." },
  { name: "Strength", upright: "Inner strength, courage, and compassion. You can face challenges with grace.", reversedText: "Low self-confidence or impatience with yourself." },
  { name: "The Hermit", upright: "A need to turn inward and be alone. The answers are hidden within you.", reversedText: "Excessive isolation or escaping from loneliness." },
  { name: "Wheel of Fortune", upright: "Change, cycles, and fate. You're on the edge of a new chapter.", reversedText: "You may be resisting a change that's beyond your control." },
  { name: "Justice", upright: "Balance, truth, and facing consequences. A fair outcome is near.", reversedText: "A feeling of injustice or avoiding responsibility." },
  { name: "The Hanged Man", upright: "Waiting, surrender, and a new perspective. There's no need to rush.", reversedText: "Unnecessary sacrifice or a stalled sense of progress." },
  { name: "Death", upright: "The end of a chapter, transformation, and rebirth. Letting go makes room for the new.", reversedText: "Resisting change or clinging tightly to the past." },
  { name: "Temperance", upright: "Balance, patience, and finding the middle path. You're keeping things steady.", reversedText: "Extremes or imbalance in your life." },
  { name: "The Devil", upright: "Time to face attachment, dependency, and your shadow side.", reversedText: "A process of breaking free from your chains and reclaiming your freedom." },
  { name: "The Tower", upright: "A sudden upheaval or unexpected change. Shaking, but necessary.", reversedText: "An avoided collapse being delayed, or an inner tremor." },
  { name: "The Star", upright: "Hope, inspiration, and healing. Light has appeared after a dark chapter.", reversedText: "Hopelessness or losing faith in yourself." },
  { name: "The Moon", upright: "Uncertainty, intuition, and the subconscious. Things may not be what they seem.", reversedText: "Confusion clearing up, moving toward clarity." },
  { name: "The Sun", upright: "Joy, success, and clarity. The chapter ahead is bright and positive.", reversedText: "A temporary gloom, but the sun will rise again soon." },
  { name: "Judgement", upright: "Awakening, reckoning, and rebirth. Time to evaluate the past.", reversedText: "Being overly critical of yourself, or failing to learn from the past." },
  { name: "The World", upright: "Completion, wholeness, and achievement. You've closed a cycle.", reversedText: "An unfinished goal or resistance to closure." },
];

// ---- Love Language Test ----
const LOVE_LANGUAGE_QUESTIONS = [
  {
    q: "When does your partner make you feel most valued?",
    options: [
      { text: "When they say something warm and sincere to me.", type: "words" },
      { text: "When they put their phone down and give me their full attention.", type: "time" },
      { text: "When they get me a small gift, thinking of me.", type: "gifts" },
      { text: "When they take something off my plate and make life easier.", type: "service" },
      { text: "When they hug me and hold my hand.", type: "touch" },
    ],
  },
  {
    q: "What do you need most after a bad day?",
    options: [
      { text: "A few sentences that tell me they understand me.", type: "words" },
      { text: "Them sitting beside me and just listening.", type: "time" },
      { text: "A small gesture or gift to lift my mood.", type: "gifts" },
      { text: "Concrete help that lightens my load.", type: "service" },
      { text: "A tight hug.", type: "touch" },
    ],
  },
  {
    q: "How do you most often show love to your partner?",
    options: [
      { text: "By telling them how much they mean to me.", type: "words" },
      { text: "By making time for them and creating moments together.", type: "time" },
      { text: "By preparing little surprises and gifts.", type: "gifts" },
      { text: "By doing things that make their life easier.", type: "service" },
      { text: "Through physical closeness.", type: "touch" },
    ],
  },
  {
    q: "What does an ideal anniversary look like?",
    options: [
      { text: "An evening where we say meaningful things to each other.", type: "words" },
      { text: "A long, phone-free day set aside just for the two of us.", type: "time" },
      { text: "A carefully chosen exchange of gifts.", type: "gifts" },
      { text: "My partner preparing something special just for me.", type: "service" },
      { text: "A close, warm, touch-filled evening.", type: "touch" },
    ],
  },
  {
    q: "What hurts you the most?",
    options: [
      { text: "Harsh or careless words.", type: "words" },
      { text: "Never having time set aside for me, always being busy.", type: "time" },
      { text: "Forgetting special days.", type: "gifts" },
      { text: "Being ignored when I ask for help.", type: "service" },
      { text: "Being physically distant.", type: "touch" },
    ],
  },
  {
    q: "When you receive a gift, what matters most to you?",
    options: [
      { text: "The meaningful note that comes with it.", type: "words" },
      { text: "The time they spent choosing it.", type: "time" },
      { text: "The gift itself, the thought behind it.", type: "gifts" },
      { text: "That it solves something I actually need.", type: "service" },
      { text: "That they hug me while giving it.", type: "touch" },
    ],
  },
  {
    q: "What makes you happy when you get home after a long day?",
    options: [
      { text: "Them saying \"I missed you.\"", type: "words" },
      { text: "Sitting down together and talking about the day.", type: "time" },
      { text: "Them having thought of me and picked something up.", type: "gifts" },
      { text: "Them having made dinner.", type: "service" },
      { text: "A warm hug at the door.", type: "touch" },
    ],
  },
  {
    q: "What matters most to you in a relationship?",
    options: [
      { text: "Open, sincere communication.", type: "words" },
      { text: "Quality time spent together.", type: "time" },
      { text: "Thoughtful gestures.", type: "gifts" },
      { text: "Practically supporting each other.", type: "service" },
      { text: "Physical closeness and warmth.", type: "touch" },
    ],
  },
];

const LOVE_LANGUAGE_RESULTS = {
  words: {
    title: "Words of Affirmation",
    tagline: "Words change everything for you",
    text: "For you, love lives in the words that get said. Hearing someone say \"I'm proud of you,\" \"I love you,\" or \"you're amazing\" is the thing that touches your heart the most. Harsh or careless words, on the other hand, can wound you more deeply than they would most people.",
    tip: "Tell your partner what you need — sharing that you'd like to hear sincere words more often will strengthen your bond.",
  },
  time: {
    title: "Quality Time",
    tagline: "For you, full attention is the most valuable gift",
    text: "For you, love means someone giving you their undivided attention. Phones aside, just the two of you — those moments make you feel truly valued. Busyness or distraction can leave you feeling lonely.",
    tip: "Remind your partner how important uninterrupted time together is to you.",
  },
  gifts: {
    title: "Receiving Gifts",
    tagline: "A small gesture carries a big meaning for you",
    text: "What matters to you isn't the price of a gift but the thought behind it. Someone keeping you in mind and bringing something small makes you feel truly valued. Forgetting special days, on the other hand, can hurt you deeply.",
    tip: "Let your partner know you don't expect expensive gifts — small, thoughtful gestures are enough for you.",
  },
  service: {
    title: "Acts of Service",
    tagline: "For you, actions speak louder than words",
    text: "For you, love is felt when someone lightens your load. Taking on a task, helping out, making things easier — these are the most meaningful expressions of love for you. Promises that go unfulfilled can be deeply disappointing.",
    tip: "Tell your partner clearly which concrete kinds of help mean the most to you.",
  },
  touch: {
    title: "Physical Touch",
    tagline: "For you, a hug is worth a thousand words",
    text: "For you, love becomes real through physical closeness. A held hand, a hug, sitting close — these give you a sense of security and warmth. Physical distance can make you feel emotionally distant too.",
    tip: "Tell your partner how much physical closeness matters to you — even small touches make a difference.",
  },
};

// ---- Zodiac Signs ----
const ELEMENT_LABELS = { fire: "Fire", earth: "Earth", air: "Air", water: "Water" };

const ZODIAC_SIGNS = [
  {
    id: "aries", name: "Aries", symbol: "♈", range: "Mar 21 - Apr 19", element: "fire",
    planet: "Mars", luckyColor: "Red", luckyNumber: 9, luckyDay: "Tuesday",
    strengths: ["Bold", "Energetic", "Initiating"], weaknesses: ["Impatient", "Impulsive"],
    compatibleWith: ["leo", "sagittarius"],
    trait: "Aries is the pioneer of the zodiac — always ready to take the first step. Their courage and determination inspire those around them, though acting without thinking can sometimes cause trouble. They love competition, and winning isn't just an outcome for them — it's a passion."
  },
  {
    id: "taurus", name: "Taurus", symbol: "♉", range: "Apr 20 - May 20", element: "earth",
    planet: "Venus", luckyColor: "Green", luckyNumber: 6, luckyDay: "Friday",
    strengths: ["Determined", "Reliable", "Loyal"], weaknesses: ["Stubborn", "Resistant to change"],
    compatibleWith: ["virgo", "capricorn"],
    trait: "Taurus is a symbol of stability and steadiness. They're drawn to comfort and beauty and know how to appreciate the simple pleasures of life. Once they decide something, they rarely back down — which makes them both dependable and, at times, a little too stubborn."
  },
  {
    id: "gemini", name: "Gemini", symbol: "♊", range: "May 21 - Jun 20", element: "air",
    planet: "Mercury", luckyColor: "Yellow", luckyNumber: 5, luckyDay: "Wednesday",
    strengths: ["Clever", "Curious", "Communicative"], weaknesses: ["Indecisive", "Scattered"],
    compatibleWith: ["libra", "aquarius"],
    trait: "Gemini's mind never stops working; they're curious about everything and thrive on new ideas. Their gift for conversation and quick wit lets them fit into any setting, though this same versatility can make it hard for them to stay focused."
  },
  {
    id: "cancer", name: "Cancer", symbol: "♋", range: "Jun 21 - Jul 22", element: "water",
    planet: "Moon", luckyColor: "Silver", luckyNumber: 2, luckyDay: "Monday",
    strengths: ["Caring", "Intuitive", "Protective"], weaknesses: ["Sensitive", "Overly emotional"],
    compatibleWith: ["scorpio", "pisces"],
    trait: "Cancer is known for emotional depth. Their instinct to protect the people they love runs deep, and home and family mean more to them than almost anything. Their sensitivity makes them a powerful source of empathy, but it also means they can be hurt easily."
  },
  {
    id: "leo", name: "Leo", symbol: "♌", range: "Jul 23 - Aug 22", element: "fire",
    planet: "Sun", luckyColor: "Gold", luckyNumber: 1, luckyDay: "Sunday",
    strengths: ["Charismatic", "Generous", "Natural leader"], weaknesses: ["Prideful", "Stubborn"],
    compatibleWith: ["aries", "sagittarius"],
    trait: "Leo makes their presence known wherever they go. They naturally draw the spotlight, and their generosity and warmth pull people in around them. They need to be appreciated, and letting go of control doesn't come easily."
  },
  {
    id: "virgo", name: "Virgo", symbol: "♍", range: "Aug 23 - Sep 22", element: "earth",
    planet: "Mercury", luckyColor: "Navy", luckyNumber: 5, luckyDay: "Wednesday",
    strengths: ["Analytical", "Organized", "Helpful"], weaknesses: ["Overly critical", "Anxious"],
    compatibleWith: ["taurus", "capricorn"],
    trait: "Virgo stands out for their attention to detail. Their perfectionism makes them a dependable, meticulous worker who quietly but deeply helps the people around them. At times, they can be overly critical of themselves."
  },
  {
    id: "libra", name: "Libra", symbol: "♎", range: "Sep 23 - Oct 22", element: "air",
    planet: "Venus", luckyColor: "Pastel tones", luckyNumber: 6, luckyDay: "Friday",
    strengths: ["Diplomatic", "Fair", "Sociable"], weaknesses: ["Indecisive", "Conflict-avoidant"],
    compatibleWith: ["gemini", "aquarius"],
    trait: "Libra is always searching for harmony and balance. They're drawn to beauty and aesthetics, and fairness matters deeply to them in relationships. In trying to please everyone, they can sometimes push their own needs to the side."
  },
  {
    id: "scorpio", name: "Scorpio", symbol: "♏", range: "Oct 23 - Nov 21", element: "water",
    planet: "Pluto", luckyColor: "Maroon", luckyNumber: 8, luckyDay: "Tuesday",
    strengths: ["Passionate", "Determined", "Loyal"], weaknesses: ["Jealous", "Guarded"],
    compatibleWith: ["cancer", "pisces"],
    trait: "Scorpio is known for intense, deep emotions. Once they commit, their loyalty is unwavering, though earning their trust in the first place isn't easy. Their mystery and intuitive power make them one of the most compelling signs in the zodiac."
  },
  {
    id: "sagittarius", name: "Sagittarius", symbol: "♐", range: "Nov 22 - Dec 21", element: "fire",
    planet: "Jupiter", luckyColor: "Purple", luckyNumber: 3, luckyDay: "Thursday",
    strengths: ["Optimistic", "Adventurous", "Honest"], weaknesses: ["Impatient", "Tactless"],
    compatibleWith: ["aries", "leo"],
    trait: "Sagittarius is a wide-horizoned wanderer who treasures freedom. They approach life with optimism and thrive on new experiences and knowledge. Their honesty can come across as blunt, but it never comes from a bad place."
  },
  {
    id: "capricorn", name: "Capricorn", symbol: "♑", range: "Dec 22 - Jan 19", element: "earth",
    planet: "Saturn", luckyColor: "Brown", luckyNumber: 4, luckyDay: "Saturday",
    strengths: ["Disciplined", "Ambitious", "Responsible"], weaknesses: ["Rigid", "Prone to pessimism"],
    compatibleWith: ["taurus", "virgo"],
    trait: "Capricorn moves toward their goals with patience and discipline. Their sense of responsibility runs deep, and they build success step by step. They can be too hard on themselves at times and forget to rest."
  },
  {
    id: "aquarius", name: "Aquarius", symbol: "♒", range: "Jan 20 - Feb 18", element: "air",
    planet: "Uranus", luckyColor: "Electric blue", luckyNumber: 7, luckyDay: "Saturday",
    strengths: ["Original", "Independent", "Visionary"], weaknesses: ["Emotionally distant", "Stubborn"],
    compatibleWith: ["gemini", "libra"],
    trait: "Aquarius loves shaping the future with unconventional ideas. They value their independence and dislike fitting into a mold. Their humanitarian, visionary outlook is powerful, but they can come across as emotionally detached."
  },
  {
    id: "pisces", name: "Pisces", symbol: "♓", range: "Feb 19 - Mar 20", element: "water",
    planet: "Neptune", luckyColor: "Sea green", luckyNumber: 3, luckyDay: "Thursday",
    strengths: ["Creative", "Empathetic", "Intuitive"], weaknesses: ["Overly sensitive", "Prone to escapism"],
    compatibleWith: ["cancer", "scorpio"],
    trait: "Pisces is the zodiac's most dreamy, empathetic sign. They feel a deep connection to art and spirituality and absorb other people's emotions as if they were their own. At times, they retreat into a world of imagination to escape reality."
  },
];

const HOROSCOPE_POOLS = {
  general: [
    "Today, trust your instincts more than usual — your inner voice is guiding you somewhere right.",
    "The connections you build with people around you may unexpectedly deepen today.",
    "A small change will make a big difference over the course of the day.",
    "A matter requiring patience may come up today — don't rush it.",
    "If you channel your energy the right way, the day could tip in your favor.",
    "Something you left in the past may resurface today — treat it as an opportunity.",
    "Today you may need connection more than solitude.",
    "The time you set aside for yourself will be the thing that helps you most today.",
    "Thinking something over once more before deciding will work in your favor.",
    "Luck is on your side today, but seizing the opportunity is up to you.",
    "The restlessness inside you may actually be a sign that you're ready for change.",
    "A small gesture from someone around you will lift your mood today.",
    "Your plans may shift today, but the change will lead you somewhere better.",
    "News you've been waiting on may arrive today or in the coming days.",
    "A connection you make today could grow into an important friendship down the line.",
    "Listening to your inner child will bring you unexpected joy today.",
    "Making a clear decision on something today will lighten the load you've been carrying.",
    "Pay closer attention to the signs the universe is sending you today.",
    "The understanding you show others today will come back to you many times over.",
    "A small coincidence today might open an unexpected door.",
  ],
  love: [
    "An unexpected development in your love life may surprise you — stay open-minded.",
    "Don't hesitate to express your feelings today; the other person will appreciate it.",
    "For singles, today carries a higher-than-usual chance of meeting someone.",
    "If there's a small misunderstanding in your relationship, you can talk it through today.",
    "Your heart is telling you very clearly what it wants today — it's worth listening.",
    "Someone from the past may cross your mind today, but that doesn't have to mean anything.",
    "A small bit of attention you show your partner today will strengthen your relationship.",
    "Being alone doesn't bother you today — you're at peace with yourself.",
    "Taking a risk in love suits you today.",
    "You may be a bit emotionally sensitive — be gentle with yourself.",
    "A conversation you have today could turn out more meaningful than you expected.",
    "Today's a good day to finally have that talk you've been postponing.",
    "Your flirtatious energy is high today — you may get noticed.",
    "Shaking up something that's fallen into routine will do your relationship good today.",
    "Take a breath before letting jealousy take hold today.",
    "If you're in a long-distance relationship, the longing may ease a little today.",
    "Today's a good time to finally say the thing you've been holding back.",
    "Patience will be your most valuable asset in love today.",
    "Making a shared plan with your partner will refresh your relationship.",
    "The way you love yourself today also shapes how you love others.",
  ],
  career: [
    "The steps you take at work will pay off soon.",
    "You may come across an offer or opportunity today — evaluate it carefully.",
    "A moment may arise where you need to take the lead within your team.",
    "Being cautious with money matters today will work in your favor.",
    "Your energy is right for finishing a task you've been putting off.",
    "A new idea may come to you today — don't forget to write it down.",
    "Tension with someone at work may resolve itself today.",
    "You may need patience to see the reward for your effort.",
    "A small risk today could open a big door in your career.",
    "This is a day that calls for focus — stay away from distractions.",
    "A decision you make today will prove you right down the line.",
    "A new collaboration or partnership offer may come up.",
    "A meeting or conversation today could go more productively than expected.",
    "You could take a small but important step toward a long-term goal today.",
    "Saying 'no' to something today will bring you relief later.",
    "Your performance at work today has a good chance of being noticed.",
    "An unexpected expense may come up today — review your budget.",
    "Starting to learn a new skill today will pay off greatly down the line.",
    "Taking initiative on something today will help you stand out.",
    "Patience will serve your career better than haste today.",
  ],
  energy: [
    "Your energy is high today — the timing is right to make the most of it.",
    "Listen to the signals your body is sending — you may need rest.",
    "Even a short walk will calm your mind a lot today.",
    "Taking care of yourself is the most valuable thing you can do today.",
    "The restlessness inside you may ease through movement.",
    "This is a period where you should pay attention to your sleep.",
    "Your positive energy will spread to those around you today.",
    "Slowing down a little will do you good today.",
    "A good day to renew yourself spiritually.",
    "Connecting with nature or the outdoors will feel good today.",
    "A short break today may be enough to find your inner balance.",
    "You should learn to say 'no' today to protect your energy.",
    "Drinking plenty of water today will be good for both body and mind.",
    "Meditation or breathing exercises may bring unexpected calm today.",
    "Your body may be asking for rest today — don't push yourself.",
    "A little movement routine will help you recharge today.",
    "Stepping away from the screen for a while will refresh your mind.",
    "The creative energy inside you is waiting to be expressed today.",
    "Going to bed early tonight will make a big difference tomorrow.",
    "Pay attention to the things you say to yourself today — they shape your energy.",
  ],
  advice: [
    "Today's advice: don't put off what your gut is telling you to do.",
    "Today's advice: take a moment to thank someone.",
    "Today's advice: put your phone down and enjoy the moment.",
    "Today's advice: don't be afraid to say no.",
    "Today's advice: set a small goal and finish it today.",
    "Today's advice: message someone you love and tell them you're thinking of them.",
    "Today's advice: finish something you left unfinished.",
    "Today's advice: spend a little time alone, talk to yourself.",
    "Today's advice: try something new, break a habit.",
    "Today's advice: choose to forgive on something — let the weight go.",
    "Today's advice: treat today as a chance to plan your next step.",
    "Today's advice: think of three things you're grateful for.",
  ],
};

// ---- Compatibility ----
const ELEMENT_BASE = {
  "fire-fire": 82, "fire-air": 88, "fire-earth": 45, "fire-water": 40,
  "air-air": 78, "air-water": 48, "earth-earth": 80, "earth-water": 90,
};

function elementPairScore(e1, e2) {
  const key1 = e1 + "-" + e2;
  const key2 = e2 + "-" + e1;
  return ELEMENT_BASE[key1] ?? ELEMENT_BASE[key2] ?? 55;
}

const COMPAT_TIERS = [
  { min: 85, label: "Soulmate Match", text: "There's a cosmic harmony between you. Your energies complement each other so well that this bond seems like more than coincidence." },
  { min: 70, label: "Strong Bond", text: "The connection between you is quite strong. Even with small differences, you have a natural gift for balancing each other out." },
  { min: 50, label: "Room to Grow", text: "You may seem very different at first glance, but with effort you can get along surprisingly well." },
  { min: 0, label: "Challenging but Not Impossible", text: "This match isn't easy, but opposites sometimes build the most instructive bonds. Patience and communication are key here." },
];

function compatTier(score) {
  return COMPAT_TIERS.find((t) => score >= t.min);
}

const COMPAT_STRENGTHS = [
  "You both respect each other's independence.",
  "You have a natural rhythm of supporting each other through hard times.",
  "Your different perspectives complement each other.",
  "You don't struggle to communicate — that's rare.",
  "Your energies lift each other up when you're together.",
  "You have a natural gift for building trust.",
  "You have no trouble setting shared goals.",
  "Your sense of humor is similar, you laugh easily together.",
  "You respect each other's space.",
  "Your values largely overlap.",
];

const COMPAT_CHALLENGES = [
  "You may occasionally clash over the same issue — flexibility matters.",
  "Your communication styles may differ, which can sometimes lead to misunderstandings.",
  "Since you're both independent, reaching joint decisions may take a little time.",
  "You express emotions differently — be patient with each other about this.",
  "Your paces may differ; one of you may be quicker, the other more cautious.",
  "There may be moments that set the stage for jealousy — open communication is essential.",
  "Your priorities may sometimes clash — don't forget to compromise.",
  "You may occasionally need to be more mindful of each other's personal space.",
];

// ---- Personality Test ----
const PERSONALITY_QUESTIONS = [
  {
    q: "How do you usually feel at the start of a new week?",
    options: [
      { text: "Excited, impatient to get moving.", type: "sun" },
      { text: "I plan around a quiet inner instinct.", type: "moon" },
      { text: "Curious, looking for something new to explore.", type: "star" },
      { text: "Calm, I prefer moving forward step by step.", type: "earth" },
    ],
  },
  {
    q: "What role do you usually play in a group of friends?",
    options: [
      { text: "The one who lifts the energy and livens things up.", type: "sun" },
      { text: "The one who senses everyone's emotional state.", type: "moon" },
      { text: "The one who proposes new ideas and plans.", type: "star" },
      { text: "The one everyone trusts, the one who keeps balance.", type: "earth" },
    ],
  },
  {
    q: "What do you do when facing a tough decision?",
    options: [
      { text: "I decide quickly, following my gut.", type: "sun" },
      { text: "I listen to what my heart is telling me.", type: "moon" },
      { text: "I imagine different possibilities.", type: "star" },
      { text: "I calmly weigh the pros and cons.", type: "earth" },
    ],
  },
  {
    q: "What would you want to do with a free day?",
    options: [
      { text: "Go out and spend time with people.", type: "sun" },
      { text: "Be alone with my own thoughts.", type: "moon" },
      { text: "Explore somewhere I've never been.", type: "star" },
      { text: "Spend a peaceful, calm day at home.", type: "earth" },
    ],
  },
  {
    q: "How would others describe you?",
    options: [
      { text: "Charismatic and energetic.", type: "sun" },
      { text: "Sensitive and deep.", type: "moon" },
      { text: "Curious and free-spirited.", type: "star" },
      { text: "Reliable and calm.", type: "earth" },
    ],
  },
  {
    q: "What calms you most in a stressful moment?",
    options: [
      { text: "Moving, doing something active.", type: "sun" },
      { text: "Writing out my feelings or listening to music.", type: "moon" },
      { text: "Changing my surroundings, trying something new.", type: "star" },
      { text: "Returning to my routine, restoring order.", type: "earth" },
    ],
  },
  {
    q: "What do you value most in life?",
    options: [
      { text: "Freedom and passion.", type: "sun" },
      { text: "Deep bonds and meaning.", type: "moon" },
      { text: "Discovery and curiosity.", type: "star" },
      { text: "Peace and stability.", type: "earth" },
    ],
  },
  {
    q: "How do you feel when a dream of yours comes true?",
    options: [
      { text: "Proud and excited.", type: "sun" },
      { text: "Deep satisfaction and peace.", type: "moon" },
      { text: "A desire to dream up something new.", type: "star" },
      { text: "Calm gratitude.", type: "earth" },
    ],
  },
  {
    q: "How do you usually act during an argument?",
    options: [
      { text: "I say it directly, I don't back down.", type: "sun" },
      { text: "I try to understand what the other person is feeling.", type: "moon" },
      { text: "I find a different angle to lighten the mood.", type: "star" },
      { text: "I stay calm and look for a logical solution.", type: "earth" },
    ],
  },
  {
    q: "What brings you the most happiness?",
    options: [
      { text: "Achieving and being recognized.", type: "sun" },
      { text: "Building deep bonds with people I love.", type: "moon" },
      { text: "Discovering or learning something new.", type: "star" },
      { text: "Living a peaceful, secure life.", type: "earth" },
    ],
  },
];

const PERSONALITY_RESULTS = {
  sun: {
    title: "Sun Soul",
    tagline: "A natural-born source of light",
    text: "Your energy radiates onto everyone around you. You're a born leader with a special gift for moving people and bringing a room to life. Your courage and passion make you noticeable wherever you go.",
    strengths: ["Charismatic leadership", "High confidence", "Contagious energy"],
    watchFor: "Sometimes your light shines so bright it overshadows others — remember to share the stage.",
    element: "fire",
  },
  moon: {
    title: "Moon Dreamer",
    tagline: "A soul that moves through deep waters",
    text: "Your emotions run deep and your intuition is strong. You can sense what the people around you are feeling before they say it. You have an introspective but deeply meaningful inner world; art and deep bonds nourish you.",
    strengths: ["High empathy", "Strong intuition", "Loyalty"],
    watchFor: "You can take on other people's emotions so much that you forget your own needs — make time for yourself too.",
    element: "water",
  },
  star: {
    title: "Star Explorer",
    tagline: "A wanderer who knows no bounds",
    text: "Your curiosity keeps pulling you toward new horizons. You get bored of routine and can't resist exploring. Your free spirit and creativity inspire the people around you.",
    strengths: ["Creativity", "Adaptability", "Boundless curiosity"],
    watchFor: "Changing direction too often can leave you unable to finish things — try focusing on one goal at a time.",
    element: "air",
  },
  earth: {
    title: "Earth Sage",
    tagline: "A rock that stands firm even in a storm",
    text: "You're steady and dependable. People turn to you in hard times because you're a symbol of calm and balance. Your patience and practical mind can untangle even the most complicated situations.",
    strengths: ["Reliability", "Patience", "Practical intelligence"],
    watchFor: "You can be overly cautious about change at times — try staying a little more open to new things.",
    element: "earth",
  },
};

// ---- Numerology ----
const LIFE_PATH_MEANINGS = {
  1: "You're a leader. You have an independent, determined, pioneering spirit and aren't afraid to carve your own path. Your courage to act without waiting for others' approval makes you a natural front-runner. You may find yourself alone at times, but that's part of your strength.",
  2: "You're a soul who seeks balance and harmony. You're sensitive, cooperative, and look for depth in relationships. Your gift for building bridges between people is strong; you prefer reconciliation over conflict. Your patience is what keeps you standing even in the toughest moments.",
  3: "Your creativity and gift for expression stand out. You're social, communicative, and bring color into life. You have an artistic side and can express your thoughts in an original way. When you channel your energy well, you become a real source of inspiration for those around you.",
  4: "You're disciplined and reliable. You love building solid foundations and moving forward with a plan. Your diligence and determination bring great success in the long run. You'd rather move forward with sure steps than take shortcuts.",
  5: "You cherish your freedom. Change, adventure, and new experiences keep you feeling alive. You get bored with monotony and are always looking for new horizons. Your ability to adapt makes you comfortable in any setting.",
  6: "You're caring and responsible. You feel a deep devotion to your family and loved ones. Your instinct to look after and protect others runs strong. Home and relationships are among the biggest priorities in your life.",
  7: "You have an introspective, analytical mind. You love seeking wisdom and truth. You're not satisfied with surface-level things and want to dig deep into every subject. You don't shy away from being alone — you use that time for inner discovery.",
  8: "You're ambitious, and success — material and otherwise — matters to you. You carry a strong will. You have a natural talent for leading and organizing. Instead of backing down in the face of challenges, you prefer to find solutions.",
  9: "You're an idealist. Your compassion extends to a wide circle, and you carry a desire to serve humanity. Your generosity and understanding leave a deep mark on those around you. You may sometimes give so much of yourself that you burn out — don't forget balance.",
  11: "Master number 11: You have powerful intuitive gifts and the power to inspire. You're a spiritual pioneer, guiding those around you without even realizing it. This power can make you overly sensitive at times, so take care to stay grounded.",
  22: "Master number 22: You have the capacity to turn big dreams into reality — you carry 'master builder' energy. Your vision is wide, but your ability to translate it into concrete steps is just as strong.",
  33: "Master number 33: You carry a teacher's spirit, inspiring those around you with unconditional love and compassion. Supporting others' growth is one of your most natural gifts.",
};

const LETTER_VALUES = {
  A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9, J: 1, K: 2, L: 3, M: 4,
  N: 5, O: 6, P: 7, Q: 8, R: 9, S: 1, T: 2, U: 3, V: 4, W: 5, X: 6, Y: 7, Z: 8,
};

const VOWELS = ["A", "E", "I", "O", "U"];

// ---- Love Calculator ----
const LOVE_TIERS = [
  { min: 85, label: "Soulmate Match", text: "There's a cosmic harmony sensed between these names. The bond between you points to a moment where the stars have aligned in a special way." },
  { min: 65, label: "Strong Bond", text: "There's a natural, easy flow between you. The ways you complement each other are quite clear." },
  { min: 40, label: "Room to Grow", text: "It may not be a perfect match right now, but this bond is very open to growing stronger with time and communication." },
  { min: 0, label: "Opposite Poles", text: "You carry very different energies, but sometimes the most interesting stories start this way." },
];

function loveTier(score) {
  return LOVE_TIERS.find((t) => score >= t.min);
}

function subscoreLabel(score) {
  if (score >= 80) return "Very Strong";
  if (score >= 60) return "Strong";
  if (score >= 40) return "Moderate";
  return "Growing";
}

// ---- Dream Dictionary ----
const DREAM_DICTIONARY = {
  "water": "Clear water represents peace, while murky water reflects turmoil you're currently facing. It can be a mirror of your emotional state. Flowing water usually signals that change in your life is moving along its natural course.",
  "snake": "A snake in a dream often points to a hidden threat, a betrayal, or a transformation taking shape beneath the surface. A snake that doesn't attack can also symbolize healing and rebirth.",
  "flying": "Flying usually reflects a sense of freedom, confidence, and rising above your problems. If the flight feels effortless, it points to a period of personal growth.",
  "falling": "Falling in a dream often reflects a loss of control or a fear of failure in waking life. It can be a sign that you need more stability somewhere in your life.",
  "teeth falling out": "This common dream symbol usually reflects anxiety about self-image, communication, or a fear of losing control over a situation.",
  "being chased": "Being chased in a dream often points to something you're avoiding in real life — a responsibility, an emotion, or a decision you keep putting off.",
  "baby": "Dreaming of a baby often symbolizes a new beginning, a fresh project, or an undeveloped part of yourself that's just starting to grow.",
  "wedding": "A wedding dream can point to a union, a commitment, or a major transition — not necessarily a romantic one; it may symbolize joining two parts of your life.",
  "money": "Seeing money in a dream often reflects your feelings about self-worth, security, or opportunity — not necessarily literal finances.",
  "death": "Dreaming of death rarely means literal death — it usually symbolizes the end of a chapter and the possibility of a new beginning.",
  "dog": "A dog usually represents loyalty, friendship, and trust. An aggressive dog may point to a betrayal or a conflict you're wary of.",
  "cat": "A cat often symbolizes independence, intuition, or a hidden side of yourself that isn't just what it appears to be.",
  "house": "A house in a dream usually represents yourself — different rooms can reflect different parts of your identity or life.",
  "car": "A car symbolizes the direction and control you have over your life's path. Losing control of the car may point to feeling like your life is moving too fast.",
  "airplane": "An airplane often reflects ambition, a big goal, or the desire to rise above a situation you're in.",
  "gold": "Gold in a dream usually symbolizes value, achievement, or something precious in your life that you're only starting to recognize.",
  "ring": "A ring often symbolizes commitment, loyalty, or an unbroken bond in your life.",
  "fighting": "A fight in a dream may reflect inner conflict or unresolved tension with someone in your waking life.",
  "divorce": "Dreaming of divorce doesn't have to be literal — it can symbolize separating from an old habit, identity, or way of thinking.",
  "illness": "Dreaming of being sick often reflects a feeling of being emotionally or mentally drained, and a need for rest.",
  "surgery": "Surgery in a dream often points to a major internal change or a part of yourself you feel needs to be 'fixed.'",
  "blood": "Blood can symbolize vitality, passion, or a loss of energy — the context of the dream shapes which meaning applies.",
  "crying": "Crying in a dream is often a sign of emotional release — even if you feel fine while awake, something inside may need to be let out.",
  "laughing": "Laughing in a dream usually reflects genuine joy and inner contentment in your waking life.",
  "hair": "Hair often symbolizes vitality and self-image. Losing hair in a dream may reflect a fear of losing control or power.",
  "eyes": "Eyes in a dream often relate to perception and awareness — how clearly you're seeing a situation in your life.",
  "phone": "A phone in a dream often symbolizes communication — a message you need to send, or one you're avoiding.",
  "mirror": "A mirror reflects self-image and self-awareness. A cracked or distorted mirror may point to insecurity about how you see yourself.",
  "keys": "A key often symbolizes access, opportunity, or a solution to a problem you're facing.",
  "car accident": "A car accident dream often reflects fear about losing control of a situation in your waking life.",
  "winning the lottery": "This dream usually reflects a hope for a sudden change in fortune, or an underlying desire for financial security.",
  "cheating": "Dreaming of being cheated on often reflects insecurity or a fear of losing trust, not a literal prediction.",
  "spider": "A spider often symbolizes feeling trapped, or the intricate web of a situation you feel caught in.",
  "wolf": "A wolf can represent instinct, danger, or a hidden strength — how it appears in the dream shapes the meaning.",
  "bear": "A bear often symbolizes strength, protectiveness, or a need to withdraw and recharge.",
  "bird": "A bird usually symbolizes freedom, perspective, or a message trying to reach you.",
  "bee": "A bee often represents productivity, community, and hard work paying off.",
  "crocodile": "A crocodile can symbolize a hidden danger or deceit lurking beneath a calm surface.",
  "funeral": "A funeral dream, much like death, often symbolizes closure — the end of a phase rather than literal loss.",
  "giving birth": "Giving birth in a dream usually symbolizes the start of something new — a project, an idea, or a new version of yourself.",
  "earthquake": "An earthquake often reflects a sense that the foundations of your life feel unstable or are about to shift.",
  "fire": "Fire can symbolize passion, transformation, or destruction — the emotional tone of the dream determines which.",
  "being shot": "Being shot in a dream often reflects a feeling of being emotionally wounded or attacked by someone's words or actions.",
  "enemy": "Dreaming of an enemy often reflects internal conflict — a part of yourself you're at odds with, more than an actual person.",
  "ex": "Dreaming of an ex-partner usually reflects unresolved feelings about a past chapter, not necessarily a desire to reconnect.",
  "being bitten": "Being bitten in a dream often symbolizes feeling attacked, criticized, or emotionally overwhelmed by someone.",
  "child": "A child in a dream can symbolize innocence, a new beginning, or a playful part of yourself you've neglected.",
  "mother": "Seeing your mother in a dream often relates to comfort, nurturing, or unresolved feelings about care and protection.",
  "father": "Seeing your father in a dream often relates to authority, guidance, or how protected and supported you feel.",
  "sibling": "A sibling in a dream often reflects competition, closeness, or a part of your own personality you recognize in them.",
  "doctor": "A doctor in a dream often symbolizes a need for healing, guidance, or reassurance about something in your life.",
  "hospital": "A hospital often symbolizes a need for healing or a period where you feel you need extra care and support.",
  "snake bite": "A snake bite dream often points to a betrayal or a painful truth that's just been revealed.",
  "being slapped": "Being slapped in a dream often reflects a wake-up call — something you needed to acknowledge or face.",
  "murder": "A murder dream is rarely literal — it often symbolizes the ending of a part of yourself, a relationship, or a habit.",
  "love": "Dreaming of love, even without a specific person, usually reflects a longing for connection or affirms one you already have.",
  "losing your job": "Dreaming of losing your job often reflects anxiety about security, self-worth, or a fear of failure — not a prediction.",
  "getting promoted": "A promotion dream often reflects a hope for recognition, growth, or a sense of pride in your progress.",
  "nosebleed": "A nosebleed in a dream can symbolize a release of built-up stress or an emotional outlet you need.",
  "stars": "Stars in a dream often symbolize hope, guidance, and inspiration lighting the way forward.",
  "sky": "The sky often reflects your outlook and sense of possibility — a clear sky suggests clarity, a stormy one suggests turmoil.",
  "rain": "Rain often symbolizes emotional release or cleansing — a fresh start after a difficult period.",
  "snow": "Snow often symbolizes stillness, purity, or a pause — a quiet period before something new begins.",
  "gun": "A gun in a dream often symbolizes power, conflict, or a feeling of needing to defend yourself.",
  "war": "A war dream often reflects internal or external conflict — tension between different parts of your life pulling you in opposite directions.",
};
