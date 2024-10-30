const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors());

app.get('/', (req, res) => {
    const mensaje = {
      lista : [
        {
          marca : 'Seat',
          matricula: '45345',
          color: 'rojo',
          averia: 'motor.'
        },
        {
          marca : 'Seat',
          matricula: '65765',
          color: 'azul',
          averia: 'gfdgdf'
        },
        {
          marca : 'Opel',
          matricula: '63345',
          color: 'verde',
          averia: 'ruedas.'
        }
        
    ]}
    res.send(mensaje)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})