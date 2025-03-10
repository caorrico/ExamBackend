const Toys = require('../models/toysModel');

const getToysCost = (req, res) => {
  Toys.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};


module.exports = {
  getToysCost
};
