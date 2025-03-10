const db = require('../../Base_de_datos/db');

const Figura = {
  getAll: (callback) => {
    db.query("SELECT * FROM figuras", callback);
  },

  create: (data, callback) => {
    db.query(
      "INSERT INTO figuras (base, altura) VALUES (?, ?)",
      [data.base, data.altura],
      callback
    );
  },

  getById: (id, callback) => {
    db.query("SELECT * FROM figuras WHERE id = ?", [id], callback);
  },

  updateById: (id, data, callback) => {
    db.query(
      "UPDATE figuras SET base = ?, altura = ? WHERE id = ?",
      [data.base, data.altura, id],
      callback
    );
  },

  deleteById: (id, callback) => {
    db.query("DELETE FROM figuras WHERE id = ?", [id], callback);
  }
};

module.exports = Figura;
