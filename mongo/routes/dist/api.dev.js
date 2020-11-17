"use strict";

var express = require('express');

var router = express.Router();

var User = require('../models/user');

router.get('/users', function (req, res) {
  res.send({
    type: 'GET'
  });
});
router.post('/users', function (req, res) {
  User.create(req.body).then(function (user) {
    res.send(user);
  });
});
router.put('/users/:id', function (req, res) {
  res.send({
    type: 'PUT'
  });
});
router["delete"]('/users/:id', function (req, res) {
  res.send({
    type: 'DELETE'
  });
});
module.exports = router;