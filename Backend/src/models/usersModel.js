const db = require('../../Base_de_datos/db');

const User = {
  getAll: (callback) => {
    db.query("SELECT * FROM user", callback);
  },

  create: (data, callback) => {
    db.query(
      "INSERT INTO user (name, lastname, age, email, password) VALUES (?, ?, ?, ?, ?)",
      [data.name, data.lastname, data.age, data.email, data.password],
      callback
    );
  },

  getById: (id, callback) => {
    db.query("SELECT * FROM user WHERE id = ?", [id], callback);
  },

  updateById: (id, data, callback) => {
    db.query(
      "UPDATE user SET name = ?, lastname = ?, age = ?, email = ?, password = ? WHERE id = ?",
      [data.name, data.lastname, data.age, data.email, data.password, id],
      callback
    );
  },

  deleteById: (id, callback) => {
    db.query("DELETE FROM user WHERE id = ?", [id], callback);
  }
};

module.exports = User;
