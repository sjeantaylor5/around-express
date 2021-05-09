const fsPromises = require('fs').promises;

const getDataFromFile = (res, pathToFile) => {
  return fsPromises.readFile(pathToFile, { encoding: 'utf-8' })
    .then(data => JSON.parse(data))
    .catch(err => {
      res.status(500);
      res.render('error', { error: err });
    });
};

module.exports = getDataFromFile;
