# The pizza task
## Backend part

### Start project:

* Install Node.js
* `npm i`
* instal PostgreSQL, create tables, fill data
* `node index.js`

Tech Stack: Node.js, Express, PostgreSQl, PM2


### API:
1. get Pizzas: `GET: /api/pizzas/`
2. get specific pizza: `GET: /api/pizzas/{id}` 
3. save user: `POST: /api/users/save {email, name}`
4. create order: `POST: /api/orders/create {pizzas, email:  order_email, user_email, name,  address, phone, comment, total, currency}`
5. get orders by user: `POST: /api/orders/get-order-by-user {email}`

### To do

- [ ] Auth
- [ ] CI
- [ ] Unit tests
- [ ] Clean up
- [ ] Learn backend
