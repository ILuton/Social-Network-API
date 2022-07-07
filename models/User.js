const { Schema, model } = require('mongoose');
const thoughtSchema = require("./Thought")

const userSchema = new Schema(
    {
        userName: { type: String, unique: true, trim: true, required: true},
        email: { type: String, unique: true, required: true, match: /.+\@.+\..+/ },
    },
    {
        toJSON: {
            virtuals: true,
          },

    }
)

// Initialize the Comment model
const User = model('user', userSchema);

User.create(
    {
      userName: 'Frank',
      email: 'AnneFrank@gmail.com',
    },
    (err) => (err ? handleError(err) : console.log('Created new document'))
  );
  

module.exports = User;
