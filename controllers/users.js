const getDataFromFile = require('../helpers/files.js');
const path = require('path');
const dataPath = path.join(__dirname, '..', 'data', 'users.json');

const getUsers = (req, res) => {
  getDataFromFile(dataPath)
    .then(users => res.status(200).send(users))
    .catch(err => res.status(400).send(err));
}

const getProfile = (req, res) => {
  return getDataFromFile(dataPath)
    .then((users) => users.find(user => user._id === req.params._id))
    .then((user) => {
      if(!user) {
        return res.status(404).send({ message: 'User ID not found' });
    }

      return res.status(200).send(user);
  })
    .catch((err) => res.status(400).send(err))
}

module.exports = { getUsers, getProfile };