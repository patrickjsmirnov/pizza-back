
const express = require('express')
const router = express.Router()
const orderModel = require('./orderModel')

router.post('/create', async (req, res) => {
  const { pizzas, email:  order_email, user_email, name,  address, phone, comment, total, currency } = req.body

  try {
    const data = {
      order_email,
      user_email,
      name,
      address,
      phone,
      comment,
      total,
      currency
    }

    const [{ order_id }] = await orderModel.create(data)
    await orderModel.saveOrderPizza({pizzas, order_id})

    res.json(data)
  } catch(e) {
    return e
  }

})

router.post('/get-order-by-user', async (req, res) => {
  const { email } = req.body

  try {
    const response = await orderModel.getOrdersByUserEmail(email)
    res.json(response)
  } catch(e) {
    return e
  }

})

module.exports = router
