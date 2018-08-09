const { Client } = require('pg');
const db = new Client({
  connectionString : 'postgres://alexy:alexy100@192.168.99.100:5437/alexydb'
})

db.connect((err) => {
  if (err) {
    return console.log(err)
  }
  console.log('DB CONNECTED ALEXY SO GREAT!!!!')
})

db.unwrapQuery = (sql) =>{
  return db.query(sql)
  .then( results => results.rows )
  .catch( err => Promise.reject(err) );
  console.log(results.rows)
};




module.exports = db
