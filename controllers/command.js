//jshit esversion:6
console.log('controllers/command');

const express = require('express')
const model = require('../models/command')

module.exports = express.Router()
.get('/', (req, res) => {
  model.getCommand(
    .then(result => res.json(result))
    .catch(err => res.json(err))
  })
  .post('/', (req, res) =>)
