const User = require('../models/User');

module.exports = {
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select('-__v')
      .populate('thoughts')
      .populate('friends')
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },
    // delete a user
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
        .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(`User was deleted`)
      )
      .catch((err) => res.status(500).json(err));
      },
    //   update user
      updateUser(req, res) {
        User.findOneAndUpdate({ _id: req.params.userId }, req.body )
        .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(`User was updated`)
      )
      .catch((err) => res.status(500).json(err));
      },

      // addFriend

      createFriend(req, res) {
        User.findOneAndUpdate( { _id: req.params.userId }, { $addToSet:{ friends: req.params.friendId }} )
        .then((user) =>
        !user
          ? res.status(404).json({ message: 'Friend not added' })
          : res.json(`Friend added`)
      )
      .catch((err) => res.status(500).json(err));

      },

      deleteFriend(req, res) {
        User.findOneAndUpdate( { _id: req.params.userId }, { $pull: { friends: req.params.friendId }} )
        .then((user) =>
        !user
          ? res.status(404).json({ message: 'Friend not removed' })
          : res.json(`Friend removed`)
      )
      .catch((err) => res.status(500).json(err));

      }

};

// app.get('/sale-over-30', (req, res) => {
//   db.collection('groceryList')
//     // Use dot notation for embedded document
//     // $gte specifies we want percentage discounts greater than 30
//     .find({ 'promotion.percentage_discount': { $gte: 30 } })
//     .toArray((err, results) => {
//       if (err) throw err;
//       res.send(results);
//     });
// });
