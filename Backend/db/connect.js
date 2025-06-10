// const mysql2 = require('mysql2');


// const connection = mysql2.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'Shyam@2006',
//     database: 'CITIL',

// })

// module.exports = connection;
// // The above code creates a connection pool to a MySQL database using the mysql2 library.
const mysql2 = require('mysql2');
// require('dotenv').config();
const pool = mysql2.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool;
