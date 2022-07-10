const router = require('express').Router();
const { createThought, getThought, getSingleThought, deleteThought, updateThought, createReaction, deleteReaction } = require('../../controllers/thoughtController.js');

router.route('/').get(getThought).post(createThought);

router.route('/:thoughtId').get(getSingleThought).delete(deleteThought).put(updateThought);

router.route('/:thoughtId/reactions').put(createReaction).put(deleteReaction);



module.exports = router;



