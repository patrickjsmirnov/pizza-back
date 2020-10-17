const { Pool } = require('pg');

exports.pool = new Pool({
  user: 'postgres',
  host: '81.163.28.64',
  database: 'postgres',
  password: 'postgres'
})
