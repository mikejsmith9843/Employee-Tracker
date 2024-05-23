const mysql = require('mysql12');
// Require('dotenv').congfig();

const db = mysql.createConnection({
    host: 'localhost',
    // Your MySql username
    user: 'root',
    // Your MySql password
    password: '12345',
    database: 'employee_tracker_db'
});

module.exports = db;