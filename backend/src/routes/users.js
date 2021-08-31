const { Router } = require('express');
const { getUsers, createUser, deleteUser, updateUser, getUser} = require('../controllers/usersControllers');
const router = Router();


router.route('/')
    .get(getUsers)
    .post(createUser)

router.route('/:id')
    .get(getUser)
    .put(updateUser)
    .delete(deleteUser)

module.exports = router;