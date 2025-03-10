const Users = require('../models/usersModel');

const getUsers = (req, res) => {
  Users.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

const createUsers = (req, res) => {
  const { name, lastname, age, email, password } = req.body;
  if (name==null|| lastname==null|| age==null|| email==null|| password == null ) {
    return res.status(400).json({ error: "los datos son requeridos" });
  }
  Users.create({ name, lastname, age, email, password }, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    // result.insertId contiene el ID recién insertado
    res.json({ id: result.insertId, name, lastname, age, email, password });
  });
};

const getUsersById = (req, res) => {
  const { id } = req.params;
  Users.getById(id, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) {
      return res.status(404).json({ error: "Users no encontrada" });
    }
    res.json(results[0]);
  });
};

const updateUsers = (req, res) => {
  const { id } = req.params;
  const { name, lastname, age, email, password } = req.body;
  if (name==null|| lastname==null|| age==null|| email==null|| password == null ) {
    return res.status(400).json({ error: "Base y altura son requeridos" });
  }
  Users.updateById(id, { name, lastname, age, email, password }, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Users no encontrada" });
    }
    res.json({ message: "Users actualizada correctamente" });
  });
};

const deleteUsers = (req, res) => {
  const { id } = req.params;
  Users.deleteById(id, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Users no encontrada" });
    }
    res.json({ message: "Users eliminada correctamente" });
  });
};

module.exports = {
  getUsers,
  createUsers,
  getUsersById,
  updateUsers,
  deleteUsers
};
