//jshint esversion:6
const db = require('./db')
const defaultListId = 1;

module.exports = {

  getUsers() {
    return db.query('SELECT * FROM users ORDER BY id');
  },
  getUsersNameCommand() {
    return db.query(`
  SELECT users.id,
CONCAT(users.lastname,' ', users.firstname) as name,
json_agg(json_build_object('id', users_command.command_id, 'name', command.name)) as command
FROM users
JOIN users_command ON users.id = users_command.user_id
JOIN command ON command.id = users_command.command_id
GROUP BY users.id;
`)},
getUsersNameCommandById(id){
return db.query(`
  SELECT users.id,
  CONCAT(users.lastname,' ', users.firstname) as name,
  json_agg(json_build_object('id', users_command.command_id, 'name', command.name)) as command
  FROM users
  JOIN users_command ON users.id = users_command.user_id
  JOIN command ON command.id = users_command.command_id
  WHERE users.id=${id}
    GROUP BY users.id;
  `)
},
  createUser({ firstname, lastname }) {
    return db.query(`
    INSERT INTO users(firstname, lastname)
    VALUES ('${firstname}', '${lastname}')`)
  },
  updateUser({ id, firstname, lastname }) {
    return db.query(`
    UPDATE users
    SET firstname='${firstname}', lastname='${lastname}'
    WHERE id=${id}`)
  },
  deleteUser(id) {
    return db.query(`DELETE FROM users WHERE id=${id}`)
  },
  addCard({userId, cardId}) {
    return db.query(`
    INSERT INTO users_cards_lists SET
    user_id=${userId},
    card_id=${cardId},
    list_id=${defaultListId}`)
  },
  setListCard({ userId, cardId, listId }) {
    return db.query(`
    UPDATE users_cards_lists
    SET list_id=${listId}
    WHERE user_id=${userId}
    AND card_id=${cardId}`)
  }

}
