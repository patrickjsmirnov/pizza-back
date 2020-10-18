const { pool }= require('../../config/db')

// getting pizzas
exports.create = async function ({
  order_email,
  user_email,
  name,
  address,
  phone,
  total,
  comment,
  currency
}) {

  const query = 'INSERT INTO orders(name, address, order_email, user_email, phone, comment, total, currency) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING order_id'
  const values = [name, address, order_email, user_email, phone, comment, total, currency]

  try {
    const { rows } = await pool.query(query, values);

    return rows
  } catch (e) {
    return e;
  }
};

exports.saveOrderPizza = async function ({ pizzas, order_id }) {
  const query = 'INSERT INTO order_pizzas(order_id, pizza_id, qty) VALUES($1, $2, $3) RETURNING *'

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
  const query = `SELECT * FROM orders WHERE user_email = '${user_email}'`

  const response = {
    orders: [],
    pizzasInOrder: {},
    pizzas: {}
  }

  try {
    const orders = await pool.query(query);
    response.orders = [...orders.rows]

    async function getPizzas(orders) {
      const ordersId = orders.rows.map(order => order.order_id)

      for (const id of ordersId) {
        const pizzasByOrderId = await pool.query(`SELECT pizza_id, qty FROM order_pizzas WHERE order_id = '${id}'`)
        if (!response.pizzasInOrder[id]) {
          response.pizzasInOrder[id] = [...pizzasByOrderId.rows]
        }
      }

      const allPizzas = await pool.query(`SELECT * FROM pizzas`)

      allPizzas.rows.forEach(pizza => {
        response.pizzas[pizza.id] = { ...pizza }
      })
    }

    await getPizzas(orders)

    return response

  } catch (e) {
    return e;
  }
};
