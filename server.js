//DEPENDANCIES
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const moment = require('moment');
const db = mongoose.connection
const port = 3000;

//environment variable
const PORT = process.env.PORT || 3000



//Connect to Mongo
mongoose.connect('mongodb://localhost:27017/meancrud', {useNewUrlParser:true}, () => {
  console.log('MongoDB connection established');
});
mongoose.connection.once('open', () => {
  console.log('Connected to Mongoose...');
})

///Error / Disconnection
db.on('error', err => console.log(err.message + ' is Mongod not running?'))
db.on('disconnected', () => {
  console.log('mongo disconnected');
})

//MIDDLEWARE
app.use(express.json()); //returns middleware that only parses JSON
app.use(express.static('public'));
app.use(morgan('tiny')); //use Morgan
app.use(express.urlencoded({extended:false}))//does not allot nested objects in query strings


//controller routes
const guacController = require('./controllers/guac.js');
app.use('/guac', guacController);
//Catch any route that doesn't exist
app.get('*', (req, res) => {
  res.status(404).json('Sorry, page not found')
})
//LISTENERS
app.listen(port, () => {
  console.log('Listening...');
})
