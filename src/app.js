const express = require('express');
const dot = require('dotenv');

const routes = require('./routes/routes');

dot.config();
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(routes);

const port = process.env.PORT;
app.listen(
  port,
  () => {
    console.log('server is running ');
    console.log(`http:localhost:${port}`);
  },
);
