const express = require('express');
const router = express.Router();
const figurasService = require('../services/figurasService');

// GET /api/figuras -> Lista todas las figuras
router.get('/', figurasService.getFiguras);

// POST /api/figuras -> Crea una nueva figura
router.post('/', figurasService.createFigura);

// GET /api/figuras/:id -> Obtiene una figura por su ID
router.get('/:id', figurasService.getFiguraById);

// PUT /api/figuras/:id -> Actualiza una figura
router.put('/:id', figurasService.updateFigura);

// DELETE /api/figuras/:id -> Elimina una figura
router.delete('/:id', figurasService.deleteFigura);

module.exports = router;
