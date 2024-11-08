const { log } = require('console')
const express = require('express')
const app = express()
const port = 3003

app.get('/', (req, res) => {
    console.log("Vao trang chu");
    
  res.send('Trang chu')
})

app.get('/home', (req, res) => {
    console.log("Vao trang home1");
    
    res.send('Home')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})