import db from '../config/database.js'

export const getUser = async (id) => {
  const query = 'SELECT * FROM users WHERE id = $1'
  const params = [id]

  const user = await db.query(query, params)

  return user
}
