const express = require('express')
const app = express()
app.use(express.json())
const lembretes = {}
let contador = 0
/*
{
  1: {
    contador: 1,
    texto: 'Fazer café'
  }
}
[
  {
    contador: 1,
    texto: 'Fazer café
  }
]
*/
//para obter todos os lembretes
//GET /lembretes
app.get('/lembretes', (req, res) => {
  res.send(lembretes)    
})
//para cadastrar novo lembretes
//POST /lembretes {"texto": "Fazer café"}
app.post('/lembretes', (req, res) => {
  //incrementar o contador
  contador++
  //extrair a propriedade texto do corpo da requisição
  const { texto } = req.body
  //construir um objeto com contador e texto
  const lembrete = {
    contador, 
    texto
  }
  //cadastrar esse objeto na base da forma descrita
  lembretes [contador] = lembrete
  //responder ao cliente, enviando o lembrete criado e dizendo que o código de status é 201
  res.status(201).send(lembretes[contador])
})
const port = 4000
app.listen(port, () => {
  console.log(`Lembretes. Porta ${port}.`)
})