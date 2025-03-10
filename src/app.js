const express = require('express');
const cors = require('cors');
const figurasRoutes = require('./routes/toysRoutes');
const app = express();

app.use(
  cors({
      origin: '*',
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      allowedHeaders: ['Content-Type', 'Authorization'],
  })
);
app.use(express.json());


// Ruta 
app.get('/', (req, res) => {
  res.send('¡Servidor funcionando correctamente!');
});

// Rutas 
app.use('/api/toysCost', figurasRoutes);
module.exports = app;
