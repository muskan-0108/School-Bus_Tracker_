const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'virtualtalk#3.14',      // Replace with your MySQL password
  database: 'schoolbus'
});

db.connect((err) => {
  if (err) throw err;
  console.log('✅ MySQL connected');
});

module.exports = db;
