const router = require('express').Router();
const { createUser, getUsers, getSingleUser, deleteUser, updateUser, createFriend, deleteFriend } = require('../../controllers/userController.js');

router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getSingleUser).delete(deleteUser).put(updateUser);

router.route('/:userId/friends/:friendId').put(createFriend).put(deleteFriend);
router.route('/:userId/friendsDelete/:friendId').put(deleteFriend);


// updateUser, createFriend, deleteFriend 

module.exports = router;


