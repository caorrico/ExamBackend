require('dotenv').config();
const db = require('./db');

const createTableUser = () => {
    const figurasTable = `
        CREATE TABLE IF NOT EXISTS user (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(64) NOT NULL,
            lastname VARCHAR(64) NOT NULL,
            age INT NOT NULL,
            email VARCHAR(64) NOT NULL,
            password VARCHAR(64) NOT NULL
        )
    `;

    db.query(figurasTable, (err) => {
        if (err) {
            console.error('Error creando la tabla:', err);
            return;
        }
        console.log('Tabla users creada o ya existe.');
    });
};

createTableUser();
