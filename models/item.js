// jshint esversion:6
const db = require('./db')

module.exports = {
getItems(){
  return db.query('SELECT * FROM items ORDER BY id');
},
createItem({ name, type, title, activity, price, dispo }){
  return db.query(`
    INSERT INTO items (name, type, title, activity, price, dispo) VALUES
    ('${name}','${type}','${title}','${activity}','${price}','${dispo}')`)
},
updateItem({id, name, type, title, activity, price, dispo }){
  return db.query(`
    UPDATE items 
    SET name='${name}', type='${type}', title='${title}', activity='${activity}', price='${price}', dispo='${dispo}'
WHERE id=${id}`)
},
deleteItem(id){
  return db.query(`DELETE FROM items WHERE id=${id}`)
}
}
