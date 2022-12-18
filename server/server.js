const express = require('express');
const { Mongoose } = require('mongoose');
const bodyParser = require('body-parser');

const App = express(); //instance of express
const port = process.env.PORT || 3003;

App.listen(port); //listening to the port