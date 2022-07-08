const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        username: { type: String, unique: true, trim: true, required: true},
        email: { type: String, unique: true, required: true, match: /.+\@.+\..+/ },
        thoughts: {type: mongoose.Schema.Types.ObjectId, ref: 'Thought'},
        friends: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
    },
    {
        toJSON: {
            virtuals: true,
          },

    }
)

const User = mongoose.model('user', userSchema);


module.exports = User;
