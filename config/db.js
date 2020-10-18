const { Pool } = require('pg');


const env = process.env.NODE_ENV || 'development';

const host = env === 'development' ? 'localhost' : '81.163.28.64'
const password = env === 'development' ? '123' : 'postgres'

exports.pool = new Pool({
  user: 'postgres',
  host,
  database: 'postgres',
  password
})
