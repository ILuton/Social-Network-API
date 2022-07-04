const { Schema, model } = require('mongoose');
const Reactions = require("./Reaction")


const Thought = new Schema({
    thoughtText : { type: String, required: true,  validate: validate('len', 1, 280) },
    createdAt: { type: Date, default: Date.now },
    username: { type: String, required: true},
    reactions: [Reactions],
  },
  {
    toJSON: {
        virtuals: true,
      },

});
  

module.exports = Thought;
