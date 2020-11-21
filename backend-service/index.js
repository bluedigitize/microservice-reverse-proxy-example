const express = require('express')
const app = express()
const port = 80

app.get('/backend', (req, res) => {
  res.json({response:'This is the backend service, hello!'})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
