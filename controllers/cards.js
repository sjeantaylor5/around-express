const getDataFromFile = require('../helpers/files.js');
const path = require('path');
const dataPath = path.join(__dirname, '..', 'data', 'cards.json');

const getCards = (req, res) => {
  getDataFromFile(dataPath)
    .then(users => res.status(200).send(users))
    .catch(err => res.status(400).send(err))
}

module.exports = getCards;