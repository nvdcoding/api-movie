const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

const route = require('./routes');

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  return res.redirect('/movies');
});

route.index(app);

app.listen(port, () => {
  console.log(`Listening ${port}`);
});