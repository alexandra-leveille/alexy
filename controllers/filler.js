// jshint esversion:6
const express = require('express')
const model = require('../models/filler')

module.exports = express.Router()
.get('/', (req, res) => {
  model.getFillers()
  .then(result => res.json(result))
  .catch(err => res.json(err))
})
.get('/:id',(req, res) => {
  const { id } = req.params;
  model.getFillerById(id)
  .then(result => res.json(result))
  .catch(err => res.json(err))
})
.post('/', (req, res) => {
  const { lastname, firstname } = req.body;
  model.createFiller({ lastname, firstname })
  .then(result => res.send(result))
  .catch(err => console.log(err))
})
.put('/:id',(req, res) => {
  const { id } = req.params;
  const { lastname, firstname } = req.body;
  model.updateFiller({ id, lastname, firstname })
  .then(result => res.json(result))
  .catch(err => res.json(err))
})
.delete('/:id', (req, res) => {
  const { id } = req.params;
  model.deleteFiller(id)
  .then(result => res.json(result))
  .catch(err => res.json(err))
})
