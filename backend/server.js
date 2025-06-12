const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'virtualtalk#3.14', // change if needed
  database: 'school_bus'
});

db.connect((err) => {
  if (err) throw err;
  console.log('✅ MySQL connected');
});

const app = express();
app.use(cors());
app.use(bodyParser.json());

// ➤ POST location update
app.post('/api/location', (req, res) => {
  const { id, latitude, longitude } = req.body;
  const query = 'UPDATE drivers SET latitude = ?, longitude = ? WHERE id = ?';
  db.query(query, [latitude, longitude, id], (err) => {
    if (err) return res.status(500).send(err);
    res.send({ message: 'Location updated' });
  });
});

// ➤ GET location by driver ID
app.get('/api/location/:id', (req, res) => {
  const { id } = req.params;
  const query = 'SELECT latitude, longitude FROM drivers WHERE id = ?';
  db.query(query, [id], (err, results) => {
    if (err) return res.status(500).send(err);
    if (results.length === 0) return res.status(404).send({ message: 'Driver not found' });
    res.send(results[0]);
  });
});

app.listen(3000, () => console.log('🚀 Server running on http://localhost:3000'));