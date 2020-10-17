
const express = require('express')
const router = express.Router()
const pizzas = require('./pizzaModel')

router.get('/', async (req, res) => {
  const pizzasRows = await pizzas.getPizzas();

  res.json(pizzasRows)
})

router.get('/:id', async (req, res) => {
  const pizzaRow = await pizzas.getPizzaById(req.params.id);
  res.json(...pizzaRow)
})

module.exports = router
