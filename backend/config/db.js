// Sample MySQL connection using mysql2 - this demo uses environment variables
const mysql = require('mysql2/promise');
require('dotenv').config();

async function getConnection() {
  const conn = await mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '',
    database: process.env.DB_NAME || 'fitness_tracker_demo'
  });
  return conn;
}

module.exports = { getConnection };
