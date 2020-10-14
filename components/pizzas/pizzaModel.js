const { pool }= require('../../config/db')

// getting pizzas
exports.getPizzas = async function () {
  const query = `SELECT * FROM pizzas`;

  try {
    const { rows } = await pool.query(query);
    return rows
  } catch (e) {
    return e;
  }
};


// getting pizza by id
exports.getPizzaById = async function (id) {
  const query = `SELECT * FROM pizzas WHERE id=${id}`;

  try {
    const { rows } = await pool.query(query);
    return rows
  } catch (e) {
    return e;
  }
};
