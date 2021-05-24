const Card = require('../models/card.js');

const getCards = (req, res) => {
  return Card.find({})
    .then(users => res.status(200).send(users))
    .catch(err => res.status(500).send({ message: err }));
};

const createCard = (req, res) => {
  return Card.countDocuments({})
    .then((_id) => {
      return Card.create({ ...req.body, _id })
        .then((user) => {
         res.status(200).send(user);
        })
        .catch((err) => res.status(400).send(err));
    });
};

module.exports = { getCards, createCard };
