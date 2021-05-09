const fsPromises = require('fs').promises;

const getDataFromFile = (pathToFile) => {
  return fsPromises.readFile(pathToFile, { encoding: 'utf-8' })
    .then(data => JSON.parse(data))
    .catch(e => console.err(e));
};

module.exports = getDataFromFile;
