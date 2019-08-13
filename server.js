const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3000;

app.use(express.json());
app.use(express.static('public'));

const guacController = require('./controllers/guac.js');

mongoose.connect('mongodb://localhost:27017/meancrud', {useNewUrlParser:true});
mongoose.connection.once('open', () => {
  console.log('Connected to Mongoose...');
})
app.listen(port, () => {
  console.log('Listening...');
}) 
