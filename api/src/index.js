const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

let urlsToOpen = []
let asks = []

app.post('/url', (req, res) => {
  const url = req.body.url
  if (url != '') {
    urlsToOpen.push(req.body.url)
    res.send('OK').status(200).end()
    return
  }

  res.send('Invalid url').status(400).end()
})

app.get('/url', (req, res) => {
  res.send(urlsToOpen).status(200).end()
})

app.delete('/url', (req, res) => {
  urlsToOpen.findIndex((item, index) => {
    if (item === req.body.url) {
      urlsToOpen.splice(index, 1)
      return true
    }
  })
})

app.post('/ask', (req, res) => {
  asks.push(req.body)
  res.send('OK').status(200).end()
})

app.get('/ask', (req, res) => {
  res.send(asks).status(200).end()
})

app.listen(port, () => {
  console.log('API running!!!')
})
