const app = require('./src/app');
//const createTables = require('./Base_de_datos/createTables'); // O puedes comentarlo si ya creaste la tabla
//const createTablesUser = require('./Base_de_datos/createTableUser'); // O puedes comentarlo si ya creaste la tabla
// Lee el puerto desde .env (o usa 3000 por defecto)
const PORT = process.env.PORT || 3000;



app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
