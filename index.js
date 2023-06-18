const express = require('express');
const bodyParser = require('body-parser');
const chicken_routes = require('./routes/chicken_routes');
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(bodyParser.json());

app.use('/chicken', chicken_routes);

app.all('*', (req, res) => {
  res.status(404).send('404 - Page not found');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
