const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/sensor', (req, res) => {
  res.send('Sensor List Incoming')
})

app.get('/user', (req, res) => {
  res.send('user token incoming')
})

app.get('/sensor/:id', (req, res) => {
  res.send('Sensor data incoming')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
