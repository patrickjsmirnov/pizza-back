
const express = require('express')
const router = express.Router()
const orderModel = require('./orderModel')

router.post('/create', async (req, res) => {

  const { pizzas, email:  order_email, user_email, name,  address, phone } = req.body

  const [{ order_id }] = await orderModel.create({
    order_email,
    user_email,
    name,
    address,
    phone
  })

  await orderModel.saveOrderPizza({pizzas, order_id})

  res.json('ok')
})

router.post('/get-order-by-user', async (req, res) => {

  const { email } = req.body

  const response = await orderModel.getOrdersByUserEmail(email)

  res.json(response)

})

module.exports = router
