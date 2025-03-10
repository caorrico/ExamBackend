const express = require('express');
const cors = require('cors');
const figurasRoutes = require('./routes/figurasRoutes');
const usersRoutes = require('./routes/usersRoutes');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json()); // Para poder leer JSON en el body

// Ruta raíz para verificar el servidor
app.get('/', (req, res) => {
  res.send('¡Servidor funcionando correctamente!');
});

// Rutas para /api/figuras
app.use('/api/figuras', figurasRoutes);
app.use('/api/users', usersRoutes);
module.exports = app;
