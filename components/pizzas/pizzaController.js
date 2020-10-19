
const express = require('express')
const router = express.Router()
const pizzas = require('./pizzaModel')

router.get('/', async (req, res) => {
  try {
    const pizzasRows = await pizzas.getPizzas();
    res.json(pizzasRows)
  } catch(e) {
    return e
  }
  
})

router.get('/:id', async (req, res) => {
  try {
    const pizzaRow = await pizzas.getPizzaById(req.params.id);
    res.json(...pizzaRow)
  } catch(e) {
    return e
  }

})

module.exports = router
