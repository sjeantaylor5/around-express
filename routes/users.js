const router = require('express').Router();
const { getUsers, getProfile, createProfile } = require('../controllers/users.js');

router.get('/users', getUsers);

router.get('/users/:_id', getProfile);

router.post('/users', createProfile);

module.exports = router;
