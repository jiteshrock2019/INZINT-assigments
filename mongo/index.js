const express = require('express');
const bodyParser = require('body-parser');
const mongoose =  require('mongoose');

const routes = require('./routes/api');

//setup express app
const app = express();

//Connect to mongoDB
mongoose.connect('mongodb://localhost/usersgo');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.use('/api',routes);

app.listen(4000, ()=>{
    console.log('the app is listning in the port no 4000');
});