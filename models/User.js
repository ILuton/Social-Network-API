const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        username: { type: String, unique: true, trim: true, required: true},
        email: { type: String, unique: true, required: true, match: /.+\@.+\..+/ },
        thoughts: [{type: mongoose.Schema.Types.ObjectId, ref: 'thought'}],
        friends: [{type: mongoose.Schema.Types.ObjectId, ref: 'user'}]
    },
    {
        toJSON: {
            virtuals: true,
          },

    }
)

userSchema
    .virtual("friendCount")
    .get(function () {
        return this.friends.length
    })

const User = mongoose.model('user', userSchema);


module.exports = User;
