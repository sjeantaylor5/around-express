const express = require('express');
const usersRouter = require('./routes/users.js');

const app = express();

const { PORT = 3000 } = process.env;

app.use('/', usersRouter);

app.listen(PORT, () => {
  console.log(`app listening at port ${PORT}`);
});
