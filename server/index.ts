import express from 'express'
import { renderToPipe } from './renderToPipe'
import router from '../router/config'

const PORT = 3001
const app = express()

router.forEach((item) => {
  app.get(item.path, (req, res) => renderToPipe(req, res, item.path))
})

app.use(express.static('static'))

app.listen(PORT, () => {
  console.log(`Listening at ${PORT}...`)
})
