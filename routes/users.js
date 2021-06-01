const router = require('express').Router();
const {
  getUsers,
  getProfile,
  createProfile,
  updateProfile,
  updateAvatar
} = require('../controllers/users.js');

router.get('/users', getUsers);

router.get('/users/:_id', getProfile);

router.post('/users', createProfile);

router.patch('/users/me', updateProfile);

router.patch('/users/me/avatar', updateAvatar);

module.exports = router;
