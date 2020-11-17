"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema; //create user schema

var userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name field is required']
  },
  rank: {
    type: String
  },
  available: {
    type: Boolean,
    "default": false
  } //add in geo location

});
var User = mongoose.model('user', 'userSchema'); //user Collection is created using this

module.exports = User;