const bodyParser = require('body-parser');
const express = require('express');
const app = express();
app.use(bodyParser.json());
//para obter todos os lembretes
//GET /lembretes
const lembretes = {};
contador = 0;

app.get('/lembretes', (req, res) => {
  res.send(lembretes);
})
//para cadastrar novo lembretes
//POST /lembretes {"texto": "Fazer café"}
app.post('/lembretes', (req, res) => {
  contador++;
  const texto = req.body.texto;
  lembretes[contador] = { contador, texto };
  res.status(201).send(lembretes[contador]);
})

const port = 4000
app.listen(port, () => {
  console.log(`Lembretes. Porta ${port}.`)
})