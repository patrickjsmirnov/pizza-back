
const express = require('express')
const router = express.Router()
// const pizzas = require('./pizzaModel')

// будем принимать заказ и пока не сохранять просто слать заглушку
router.post('/create', async (req, res) => {

  console.log('req: ', req.body)
  // const pizzasRows = await pizzas.getPizzas();

  res.json('ok')
})
//
// router.get('/:id', async (req, res) => {
//   const pizzaRow = await pizzas.getPizzaById(req.params.id);
//   res.json(...pizzaRow)
// })

module.exports = router
