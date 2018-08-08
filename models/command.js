// jshint esversion:6
const db = require ('./db')
module.exports = {
  getCommand(){
    return db.query('SELECT * FROM command ORDER BY id')
  },
  createCommand({ name, lieux }) {
    return db.query(`
      INSERT INTO command (name, lieux)
      VALUES ('${name}', '${lieux}')`)
  },
  updateCommand({ id, name, lieux }){
    return db.query(`
      UPDATE command
      SET name='${name}', lieux='${lieux}'
      WHERE id=${id} `)
  },
  deleteCommand(id){
    return db.query(`DELETE FROM command WHERE id=${id}`)
  }
}
