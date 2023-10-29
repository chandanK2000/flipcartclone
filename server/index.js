const express = require('express');
const dotenv = require('dotenv');
const connection = require('./database/db.js');
const DefaultData = require('./defaultdata.js');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 8000;
dotenv.config();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
connection(USERNAME, PASSWORD);


const routes = require('./routes/route.js');
app.use('/', routes);

app.listen(port, () => {
  console.log(`Server is running on the port ${port}`);
});

DefaultData();


// ehrj6a80k2dqeCBt