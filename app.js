// app.js
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})
  app.use(cors());
// Create a connection to the MySQL database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Root1234',
  database: 'ipmgmt',
});
// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database: ', err);
    return;
    }
  console.log('Connected to MySQL database');
});
// Set up body-parser middleware to parse POST request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());                        
// Define a route to handle database queries
app.get('/getData', (req, res) => {
  // Example query to retrieve data from a table
  const query = 'SELECT * FROM tbl_devices';
  // Execute the query
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error executing MySQL query: ', err);
      res.status(500).send('Error fetching data from database');
      return;
    }
    // Send the query results as a JSON response
    res.json(results);
  });
});
