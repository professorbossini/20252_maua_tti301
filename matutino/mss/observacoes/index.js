const express = require('express')
const { v4: uuidv4 } = require('uuid')
const app = express()
app.use(express.json())
const observacoesPorLembreteId = {}
// /lembretes/1/observacoes
app.post('/lembretes/:id/observacoes', (req, res) => {
  const idObs = uuidv4()
  const { texto } = req.body
  const observacoesDoLembrete = observacoesPorLembreteId[req.params.id] || []
  observacoesDoLembrete.push({id: idObs, texto})
  observacoesPorLembreteId[req.params.id] = observacoesDoLembrete
  res.status(201).send(observacoesDoLembrete)
})


app.get('/lembretes/:id/observacoes', (req, res) => {
  res.send(observacoesPorLembreteId[req.params.id] || [])
})


const port = 5000
app.listen(port,() => console.log(`Observações. Porta ${port}.`))