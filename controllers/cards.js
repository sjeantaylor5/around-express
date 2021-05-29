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

const deleteCard = (req, res) => {
  Card.remove()
    .then(user => {
      res.status(200).send(user);
    })
    .catch((err) => res.status(400).send(err));
};

module.exports.createCard = (req, res) => {
  console.log(req.user._id);
};

module.exports.likeCard = (req, res) => Card.findByIdAndUpdate(
  req.params.cardId,
  { $addToSet: { likes: req.user._id } },
  { new: true }
);

module.exports.dislikeCard = (req, res) => Card.findByIdAndUpdate(
  req.params.cardId,
  { $pull: { likes: req.user._id } },
  { new: true }
);

module.exports = { getCards, createCard, deleteCard };
