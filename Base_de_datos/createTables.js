require('dotenv').config();
const db = require('./db');

const createTables = () => {
    const figurasTable = `
        CREATE TABLE IF NOT EXISTS figuras (
            id INT AUTO_INCREMENT PRIMARY KEY,
            base FLOAT NOT NULL,
            altura FLOAT NOT NULL,
            area FLOAT GENERATED ALWAYS AS (base * altura) STORED
        )
    `;

    db.query(figurasTable, (err) => {
        if (err) {
            console.error('Error creando la tabla:', err);
            return;
        }
        console.log('Tabla figuras creada o ya existe.');
    });
};

createTables();
