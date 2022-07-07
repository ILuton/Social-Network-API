const userName = [
    "theBest",
    "topCoder",
    "computerWHiz",
    "masterCoder"
]

const email = [
    "cool@gmail.com",
    "awesome@gmail.com",
    "rad@gmail.com",
    "sweet@gmail.com"
]

const thoughts = [
    "I should go to sleep",
    "Why do dogs bark?",
    "Are Aliens Real?",
    "Summer is the best season"

];

const reactions = [
    'I disagree!',
    'This was awesome',
    'Thank you for the great content',
    'I Agree!',
    'Great Job'
  ];

  const friends = userName;

  const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

  const getRandomUserName = () =>
  `${getRandomArrItem(userName)}`;

  const getRandomEmail = () =>
  `${getRandomArrItem(email)}`;

  const getRandomThought = () =>
  `${getRandomArrItem(thoughts)}`;
  
  const getRandomReaction = () =>
  `${getRandomArrItem(reactions)}`;
  
  module.exports = { getRandomUserName, getRandomEmail, getRandomThought, getRandomReaction}