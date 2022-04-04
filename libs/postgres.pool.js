const { Pool } = require('pg')

  const pool = new Pool({
    user: 'danielbq',
    host: 'localhost',
    database: 'my_store',
    password: 'admin123',
    port: 5432,
  })

module.exports = pool
