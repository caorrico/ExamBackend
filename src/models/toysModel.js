const db = require('../../Base_de_datos/db');

const ToysCost = {
  getAll: (callback) => {
    db.query("SELECT SUM(sellerCost) AS 'Total Cost' FROM sellers", callback);
  },

}

module.exports = ToysCost;
