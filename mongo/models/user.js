const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create user schema
const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    rank: {
        type: String
    },

    available: {
        type: Boolean,
        default: false
    }

    //add in geo location
});


const User = mongoose.model('user','userSchema');    //user Collection is created using this

module.exports = User;