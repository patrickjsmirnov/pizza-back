
const express = require('express')
const router = express.Router()
const usersModel = require('./userModel')

router.post('/save', async (req, res) => {
  const { name, email } = req.body

  try {
    const result = await usersModel.saveUser({ name, email })
    res.json(result)
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
