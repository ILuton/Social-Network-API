const Thought = require('../models/Thought');

module.exports = {
  getThought(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new thought
  createThought(req, res) {
    Thought.create(req.body)
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => res.status(500).json(err));
  },
    // delete a thought
    deleteThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.thoughtId })
        .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json(`thought was deleted`)
      )
      .catch((err) => res.status(500).json(err));
      },
    //   update a thought
      updateThought(req, res) {
        Thought.findOneAndUpdate({ _id: req.params.thoughtId }, req.body )
        .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json(`thought was updated`)
      )
      .catch((err) => res.status(500).json(err));
      },

      //  create a new reaction 

      createReaction(req, res) {
        Thought.findOneAndUpdate( { _id: req.params.thoughtId }, { $addToSet:{ reactions : req.body}} )
        .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'Reaction not  added' })
          : res.json(`Reaction added`)
      )
      .catch((err) => res.status(500).json(err));

      },

      // delete a reaction 

      deleteReaction(req, res) {
        Thought.findOneAndUpdate( { _id: req.params.thoughtId }, { $pull: { reactions: req.params.reactionId }} )
        .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'thought not removed' })
          : res.json(`thought removed`)
      )
      .catch((err) => res.status(500).json(err));

      }

      
};