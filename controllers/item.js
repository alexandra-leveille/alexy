// jshint esversion:6
const express = require('express')
const model = require('../models/item')

module.exports = express.Router()
.get('/',(req,res) => {
  model.getItems()
  .then(result => res.json(result))
  .catch(err => res.json(err))
})
.post('/', (req,res) => {
  const {name, type, title, activity, price, dispo} = req.body;
    model.createItem({ name, type, title, activity, price, dispo })
    .then(result => res.send(result))
    .catch(err => console.log(err))
})
.put('/:id', (req, res) => {
  const {id} = req.params;
  const {name, type, title, activity, price, dispo} = req.body;
  model.updateItem({ id, name, type, title, activity, price, dispo })
  .then(result => res.json(result))
  .catch(err => res.json(err))
})
.delete('/:id',(req, res) => {
  const { id } = req.params;
  model.deleteItem(id)
  .then(result => res.json(result))
  .catch(err => res.json(err))
})
