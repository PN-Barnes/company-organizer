const express = require('express');
const company = require('./index')
// Import and require mysql2
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: '',
      database: 'company_db'
    },
    console.log(`Connected to the company_db database.`)
  );


db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('Mysql is connected...')
})
// Query database
db.query('SELECT * FROM department', function (err, results) {
  console.log(results);
});

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

company()

