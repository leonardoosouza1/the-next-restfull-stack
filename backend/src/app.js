import express from 'express'
import cors from 'cors'
import index from './routes/index.js'

const app = express()

app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())
app.use(index)
app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running on port: ', process.env.PORT || 3000)
})
export default app
