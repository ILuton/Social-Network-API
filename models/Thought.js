const { Schema, model } = require('mongoose');
const reactionSchema = require("./Reaction")


const thoughtSchema = new Schema({
    thoughtText : { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    username: { type: String, required: true, ref: 'User'},
    reactions: [reactionSchema],
  },
  {
    toJSON: {
        virtuals: true,
      },

});
  
const Thought = model('thought', thoughtSchema);

module.exports = Thought;

