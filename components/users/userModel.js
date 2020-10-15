const { pool }= require('../../config/db')

// getting pizzas
exports.saveUser = async function ({ name, email }) {

  const query = 'INSERT INTO users(name, email) VALUES($1, $2) RETURNING *'

  try {
    const { rows } = await pool.query(query, [name, email]);
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
