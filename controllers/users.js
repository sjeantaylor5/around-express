const User = require('../models/user.js');

const getUsers = (req, res) => {
  return User.find({}).orFail()
    .then(users => res.status(200).send(users))
    .catch(() => res.status(500).send({ message: 'Error' }));
};

const getProfile = (req, res) => {
  return User.find({ _id: req.params._id })
    .then((user) => res.status(200).send(user))
    .catch((err) => {
      if (err.message === 'Not Found') {
        res.status(404).send({ message: 'Requested resource not found' });
      } else if (err.name === 'CastError') {
        res.status(400).send({ message: 'Not valid data in params' });
      } else {
        res.status(500).send({ message: 'Error' });
      }
    });
};

const createProfile = (req, res) => {
  return User.create({ name: req.body.name, about: req.body.about, avatar: req.body.avatar })
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((err) => res.status(400).send(err));
};

const updateProfile = (req, res) => {
  if (User._id === req.params._id) {
    User.findByIdAndUpdate(req.user._id, req.body.name, req.body.about, {
      new: true,
      runValidators: true,
      upsert: false,
    }).orFail(new Error('Not Found'))
      .then((user) => res.status(200).send(user))
      .catch((err) => {
        if (err.message === 'Not Found') {
          res.status(404).send({ message: 'Requested resource not found' });
        } else if (err.name === 'CastError') {
          res.status(400).send({ message: 'Not valid data in params' });
        } else {
          res.status(500).send({ message: 'Error' });
        }
      });
  }
};

const updateAvatar = (req, res) => {
  if (User._id === req.params._id) {
    User.findByIdAndUpdate(req.user._id, req.body.avatar, {
      new: true,
      runValidators: true,
      upsert: false,
    }).orFail(new Error('Not Found'))
      .then((user) => res.status(200).send(user))
      .catch((err) => {
        if (err.message === 'Not Found') {
          res.status(404).send({ message: 'Requested resource not found' });
        } else if (err.name === 'CastError') {
          res.status(400).send({ message: 'Not valid data in params' });
        } else {
          res.status(500).send({ message: 'Error' });
        }
      });
  }
};

module.exports = {
  getUsers,
  getProfile,
  createProfile,
  updateProfile,
  updateAvatar
};
