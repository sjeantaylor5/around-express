const path = require('path');
const dataPath = path.join(__dirname, '..', 'data', 'cards.json');
const getDataFromFile = require('../helpers/files.js');

const getCards = (req, res) => {
  getDataFromFile(res, dataPath)
    .then(users => res.status(200).send(users))
    .catch(err => res.status(500).send(err));
};

module.exports = getCards;
