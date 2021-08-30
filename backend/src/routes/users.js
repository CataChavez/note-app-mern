const { Router } = require('express');
const { getUsers, createUser, deleteUser, } = require('../controllers/usersControllers');
const router = Router();


router.route('/')
    .get(getUsers)
    .get(createUser)

router.route('/:id')
    .get(getUser)
    .put(updateUser)
    .delete(deleteUser)

module.exports = router;