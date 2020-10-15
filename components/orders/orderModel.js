const { pool }= require('../../config/db')

// getting pizzas
exports.create = async function ({
  order_email,
  user_email,
  first_name,
  last_name,
  address
}) {

  const query = 'INSERT INTO orders(first_name, last_name, address, order_email, user_email) VALUES($1, $2, $3, $4, $5) RETURNING order_id'
  const values = [first_name, last_name, address, order_email, user_email]

  try {
    const { rows } = await pool.query(query, values);

    return rows
  } catch (e) {
    return e;
  }
};

exports.saveOrderPizza = async function ({ pizzas, order_id }) {
  const query = 'INSERT INTO order_pizzas(order_id, pizza_id, qty) VALUES($1, $2, $3) RETURNING *'

  console.log('pizzas: ', pizzas)
  try {
    pizzas.forEach(async (pizza) => {
      await pool.query(query, [order_id, pizza.id, pizza.qty]);
    })

    return 'OK'
  } catch (e) {
    return e;
  }
};

exports.getOrdersByUserEmail = async function (user_email) {
  const query = 'SELECT * FROM orders JOIN order_pizzas ON orders.order_id = order_pizzas.order_id JOIN pizzas ON pizzas.id = pizza_id'

  try {

    // todo вытаскивать содержимое заказов

    const { rows } = await pool.query(query);

    console.log('rows: ', rows)

    return rows

  } catch (e) {
    return e;
  }
};
