const express = require('express');
const router = express.Router();
const usersServices = require('../services/usersServices');

// GET /api/Userss -> Lista todas las Userss
router.get('/', usersServices.getUsers);

// POST /api/Userss -> Crea una nueva Users
router.post('/', usersServices.createUsers);

// GET /api/Userss/:id -> Obtiene una Users por su ID
router.get('/:id', usersServices.getUsersById);

// PUT /api/Userss/:id -> Actualiza una Users
router.put('/:id', usersServices.updateUsers);

// DELETE /api/Userss/:id -> Elimina una Users
router.delete('/:id', usersServices.deleteUsers);

module.exports = router;
