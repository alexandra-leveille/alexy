//jshint esversion:6

const express = require('express')
const model = require('../models/user')

module.exports = express.Router()
  .get('/', (req, res) => {
    model.getUsers()
      .then(result => res.json(result))
      .catch(err => res.json(err))
  })
  .post('/display', (req, res) =>{
    const { user_id, user_name, command_name } = req.body;
    model.createUsersNameCommand({ user_id, user_name, command_name })
    .then(result => res.send(result))
    .catch(err => console.log(err))
  })
.get('/name', (req,res) => {
  model.getUsersNameCommand()
  .then(result => res.json(result))
  .catch(err => res.json(err))
})
.get('/display',(req,res) => {
  model.getUsersNameCommand2()
  .then(result => res.json(result))
  .catch(err => res.json(err))
})
.get('/name/:id',(req,res) => {
  const { id } = req.params;
  model.getUsersNameCommandById(id)
  .then(result => res.json(result))
  .catch(err => res.json(err))
})
.put('/display/:user_id', (req,res) => {
  const { user_id } = req.params;
  const { user_name, command_name } = req.body;
  model.updateUsersNameCommand({ user_id, user_name, command_name })
  .then(result => res.json(result))
  .catch(err => res.json(err))
})
  .post('/', (req, res) => {
    const { lastname, firstname } = req.body;
    model.createUser({ firstname, lastname })
      .then(result => res.send(result))
      .catch(err => console.log(err))
  })

  /**
   * Move a card
   */
  .put('/:userId/card/:cardId/list', (req, res) => {
    const { userId, cardId } = req.params
    const { listId } = req.body
    model.setListCard({ userId, cardId, listId })
      .then(result => res.json(result))
      .catch(err => res.json(err))
  })
  /**
   * Add a card to a user
   */
  .post('/:userId/card', (req, res) => {
    const { userId } = req.params;
    const { cardId } = req.body;
    model.addCard({ userId, cardId })
      .then(result => res.json(result))
      .catch(err => res.json(err))
  })
  .put('/:id', (req, res) => {
    const { id } = req.params;
    const { firstname, lastname } = req.body;
    model.updateUser({ id, firstname, lastname })
      .then(result => res.json(result))
      .catch(err => res.json(err))
  })
  .delete('/:id', (req, res) => {
    const { id } = req.params;
    model.deleteUser(id)
      .then(result => res.json(result))
      .catch(err => res.json(err))
  })
  .delete('/display/:user_id', (req, res) => {
    const { user_id } = req.params;
    model.deleteUsersNameCommand(user_id)
      .then(result => res.json(result))
      .catch(err => res.json(err))
  })
