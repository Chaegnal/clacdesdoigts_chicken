const mysql = require('mysql2');
const dotenv = require("dotenv");
dotenv.config();

const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_NAME,
});

connection.connect((error) => {
  if (error) {
    console.error('Error connecting to the server', error);
  } else {
    console.log('Connected to the server');
  }
});

module.exports = connection;
