import express from 'express'
import router from '../router/config'
import path from 'path'
import { renderToPipe } from './renderToPipe'

const PORT = 3001
const app = express()

router.forEach((item) => {
  app.get(item.path, (req, res) => renderToPipe(req, res, item.path, item.getServerSideProps))

  if (item.getServerSideProps) {
    app.get(`/_ssr${item.path}.json`, async (req, res) => {
      const data = await item.getServerSideProps?.({ req, res })
      res.setHeader('Content-type', 'application/json')
      res.send(data)
    })
  }
})

app.use(express.static(path.resolve(__dirname, '../static')))

app.listen(PORT, () => {
  console.log(`Listening at ${PORT}...`)
})
