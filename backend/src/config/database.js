const { Pool } = require('pg')
const dotenv = require('dotenv')

dotenv.config()

// ==> Conexão com a Base de Dados:
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  user: process.env.DB_USER,
  pass: process.env.DB_PASS,
  name: process.env.DB_NAME,
  ssl: true,

})

pool.on('connect', () => {
  console.log('Base de Dados conectado com sucesso!')
})

module.exports = {
  query: (text, params) => pool.query(text, params),
}
