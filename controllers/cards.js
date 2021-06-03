const Card = require('../models/card.js');

const getCards = (req, res) => {
  return Card.find({})
    .then(user => res.status(200).send(user))
    .catch((err) => {
      if (err.message === 'Error') {
        res.status(404).send({ message: 'Requested resource not found' });
      } else if (err.name === 'CastError') {
        res.status(400).send({ message: 'Not valid data in params' });
      } else {
        res.status(500).send({ message: 'Error' });
      }
    });
};

const createCard = (req, res) => {
  return Card.create({
    name: req.body.name,
    link: req.body.link,
    owner: req.user._id,
    createdAt: req.body.createdAt
  })
    .then((user) => {
      console.log(req.user._id);
      res.status(200).send(user);
    })
    .catch(() => {
      res.status(404).send({ message: 'Not valid data in params' });
    });
};

const deleteCard = (req, res) => {
  return Card.deleteOne({ _id: req.params.cardId })
    .orFail(new Error('Not Found'))
    .then(user => {
      res.status(200).send(user);
    })
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

const likeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true },
  ).orFail(new Error('Not Found'))
    .then(user => {
      res.status(200).send(user);
    })
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

const dislikeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true },
  ).orFail(new Error('Not Found'))
    .then(user => {
      res.status(200).send(user);
    })
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

module.exports = {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard
};
