
const express = require('express')
const router = express.Router()
const usersModel = require('./userModel')

router.post('/save', async (req, res) => {

  const { name, email } = req.body

  const result = await usersModel.saveUser({ name, email })

  res.json(result)
})

router.get('/:id', async (req, res) => {
  const pizzaRow = await pizzas.getPizzaById(req.params.id);
  res.json(...pizzaRow)
})

module.exports = router
