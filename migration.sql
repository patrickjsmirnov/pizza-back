CREATE TABLE IF NOT EXISTS pizzas (
  id serial primary key,
  name varchar(100),
  description varchar(1000),
  url varchar(1000),
  price_usd integer,
  price_eur integer,
  rating integer
);

CREATE TABLE IF NOT EXISTS orders (
  order_id serial primary key,
  name varchar(100),
  order_email varchar(100),
  user_email varchar(100),
  created_at timestamp DEFAULT CURRENT_TIMESTAMP,
  phone varchar(100),
  address varchar(100),
  total integer,
  currency varchar(5),
  comment varchar(100)
);

CREATE TABLE IF NOT EXISTS order_pizzas (
  order_id integer,
  pizza_id integer,
  qty integer
);

CREATE TABLE IF NOT EXISTS users (
  id serial primary key,
  name varchar(100),
  email varchar(100)
);