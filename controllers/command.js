//jshint esversion:6
console.log('controllers/command');

const express = require('express')
const model = require('../models/command')

module.exports = express.Router()
.get('/', (req, res) => {
  model.getCommand()
    .then(result => res.json(result))
    .catch(err => res.json(err))
  })
  .post('/', (req, res) =>{
    const { name, lieux } = req.body;
    model.createCommand({ name, lieux })
    .then(result => res.send(result))
    .catch(err => console.log(err))
  })
  .put('/:id', (req, res) => {
    const { id } = req.params;
    const { name, lieux } = req.body;
    model.updateCommand({ id, name, lieux })
    .then(result => res.json(result))
    .catch(err => res.json(err))
  })
  .delete('/:id', (req, res) => {
    const { id } = req.params;
    model.deleteCommand(id)
    .then(result => res.json(result))
    .catch(err => res.json(err))
  })
