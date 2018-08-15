const db = require('./db');

module.exports = {
  getFillers(){
    return db.query('SELECT * FROM fillers ORDER BY id');
  },
  getFillerById(id){
    return db.query(`SELECT * FROM fillers WHERE id=${id}`)
  },
  createFiller({ lastname, firstname }) {
    return db.query(`
      INSERT INTO fillers(lastname, firstname)
      VALUES ('${lastname}','${firstname}')`)
  },
  updateFiller({ id, lastname, firstname }) {
  return db.query(`
    UPDATE fillers
    SET lastname='${lastname}', firstname='${firstname}'
    WHERE id=${id}`)
},
deleteFiller(id){
  return db.query(`DELETE FROM fillers WHERE id=${id}`)
}

}
