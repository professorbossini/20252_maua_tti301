const express = require('express')
const app = express()
app.use(express.json())

//GET hey-docker
app.get('/hey-docker', (req, res) => {
  res.status(200).json({mensagem: 'Hey, Docker!!!'})
})

const port = 5200
app.listen(port, () => console.log('Executando num contêiner Docker!'))