const mongoose = require('mongoose');

//Connect to mongodb
mongoose.connect('mongodb://localhost/testroo');

mongoose.connection.once('open', function(){
    console.log("Connection has been made now ");
})