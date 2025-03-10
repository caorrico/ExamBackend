require('dotenv').config();
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: process.env.DB_HOST1,
    port: process.env.DB_PORT1,  // Se agregó el puerto
    user: process.env.DB_USER1,
    password: process.env.DB_PASSWORD1,
    database: process.env.DB_NAME1
});

connection.connect(err => {
    if (err) {
        console.error('Error conectando a MySQL:', err);
        return;
    }
    console.log('Conectado a MySQL');
});

module.exports = connection;
