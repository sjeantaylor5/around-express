const express = require('express');
const usersRouter = require('./routes/users.js');
const cardsRouter = require('./routes/cards.js');

const app = express();

const { PORT = 3000 } = process.env;

app.use('/', usersRouter);
app.use('/', cardsRouter);

app.get('*', (req, res) => {
  res.status(404).send({ message: 'Requested resource not found' });
});

app.listen(PORT, () => {
  console.log(`app listening at port ${PORT}`);
});
