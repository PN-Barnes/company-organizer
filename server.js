const mysql = require('mysql2');
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: 'M@keMoney$2021',
      database: 'company_db'
    },
    console.log(`Connected to the company_db database.`)
  );

  module.exports = db;