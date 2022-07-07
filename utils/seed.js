const connection = require('../config/connection');
const { User } = require("../models/User")
const { Thought } = require("../models/Thought")
const { getRandomUserName, getRandomEmail, getRandomThought, getRandomReaction} = require("./data")

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  const users = [];
  users.push({
    username: getRandomUserName(),
    email: getRandomEmail(),
    thoughts: getRandomThought(),
    friends: getRandomUserName(),
  });

  await User.collection.insertMany(users);


  console.table(users);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
