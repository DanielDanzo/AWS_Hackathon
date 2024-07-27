const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;


// MySQL database connection configuration
const connection = mysql.createConnection({
    host: 'rdbs.cfgiko84sqhv.eu-west-1.rds.amazonaws.com',
    port: '3306',
    user: 'admin',
    database: 'hackathon',
    password: 'admin123'
});

// Connect to the MySQL database
connection.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database.');
});

// Define an API endpoint
app.get('/fetch-data', (req, res) => {
  // Define your query
  const query = 'SELECT * FROM books';

  // Execute the query
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Query error:', error);
      res.status(500).send('Error fetching data');
      return;
    }

    // Send the results as a JSON response
    res.json(results);
  });
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

