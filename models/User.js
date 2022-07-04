const { Schema, model } = require('mongoose');
const Thought = require("./Thought")

const User = new Schema(
    {
        userName: { type: String, unique: true, trim: true, required: true},
        email: { type: String, unique: true, required: true, match: /.+\@.+\..+/ },
        thoughts: [Thought],
        friends: [User],
    },
    {
        toJSON: {
            virtuals: true,
          },

    }
)


module.exports = User;
