const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');
const cors = require('cors');
const https = require('https')
const bodyParser = require('body-parser');
const fs = require('fs');
const port = 3010;

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());

app.listen(port, function () {
  console.log('Example app listening on port 3000! Go to https://localhost:3000/')
})

const pizzasRouter = require('./components/pizzas/pizzaController');
const ordersRouter = require('./components/orders/orderController')
const usersRouter = require('./components/users/userController')

app.use('/pizzas', pizzasRouter)
app.use('/orders', ordersRouter)
app.use('/users', usersRouter)

app.get('*', (req, res) => {
  res.sendFile('index.html', {root: path.join(__dirname, '../../public/')});
});
