const { Schema } = require('mongoose');

const Reaction = new Schema({
   reactionId: { type: Schema.Types.ObjectId, default: () => new Types.ObjectId()},
   reactionBody : { type: String, required: true,  validate: validate('len', 1, 280) },
   username: { type: String, required: true},
   createdAt: { type: Date, default: Date.now },
  });

  modules.export = Reaction;