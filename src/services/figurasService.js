const Figura = require('../models/figurasModel');

const getFiguras = (req, res) => {
  Figura.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

const createFigura = (req, res) => {
  const { base, altura } = req.body;
  if (base == null || altura == null) {
    return res.status(400).json({ error: "Base y altura son requeridos" });
  }
  Figura.create({ base, altura }, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    // result.insertId contiene el ID recién insertado
    res.json({ id: result.insertId, base, altura });
  });
};

const getFiguraById = (req, res) => {
  const { id } = req.params;
  Figura.getById(id, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) {
      return res.status(404).json({ error: "Figura no encontrada" });
    }
    res.json(results[0]);
  });
};

const updateFigura = (req, res) => {
  const { id } = req.params;
  const { base, altura } = req.body;
  if (base == null || altura == null) {
    return res.status(400).json({ error: "Base y altura son requeridos" });
  }
  Figura.updateById(id, { base, altura }, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Figura no encontrada" });
    }
    res.json({ message: "Figura actualizada correctamente" });
  });
};

const deleteFigura = (req, res) => {
  const { id } = req.params;
  Figura.deleteById(id, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Figura no encontrada" });
    }
    res.json({ message: "Figura eliminada correctamente" });
  });
};

module.exports = {
  getFiguras,
  createFigura,
  getFiguraById,
  updateFigura,
  deleteFigura
};
