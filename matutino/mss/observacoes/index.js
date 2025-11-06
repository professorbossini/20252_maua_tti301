const express = require('express')
const { v4: uuidv4 } = require('uuid')
const app = express()
app.use(express.json())
const axios = require ('axios');
const observacoesPorLembreteId = {}
const funcoes = {
  ObservacaoClassificada: (observacao) => {
    const observacoes = observacoesPorLembreteId[observacao.lembreteId]
    const obsParaAtualizar = observacoes.find(o => o.id === observacao.id)
    obsParaAtualizar.status = observacao.status
    //emitir evento do tipo ObservacaoAtualizada
    axios.post('http://barramento-de-eventos-service:10000/eventos', {
      tipo: 'ObservacaoAtualizada',
      dados: {
        id: observacao.id,
        lembreteId: observacao.lembreteId,
        texto: observacao.texto,
        status: observacao.status
      }
    })
  }
}


// /lembretes/1/observacoes
app.post('/lembretes/:id/observacoes', async (req, res) => {  
  const idObs = uuidv4()
  const { texto } = req.body
  const observacoesDoLembrete = observacoesPorLembreteId[req.params.id] || []
  observacoesDoLembrete.push({id: idObs, texto, status: 'aguardando'})
  observacoesPorLembreteId[req.params.id] = observacoesDoLembrete
  await axios.post("http://barramento-de-eventos-service:10000/eventos", {
    tipo: "ObservacaoCriada",
    dados: {  
      id: idObs, texto, lembreteId: req.params.id, status: 'aguardando'
    }
  });
  res.status(201).send(observacoesDoLembrete)
});

app.post("/eventos", (req, res) => {
  try{
    console.log(req.body);
    funcoes[req.body.tipo](req.body.dados)
  }
  catch(err){}
  res.status(200).send({ msg: "ok" });
});

app.get('/lembretes/:id/observacoes', (req, res) => {
  res.send(observacoesPorLembreteId[req.params.id] || [])
})


const port = 5000
app.listen(port,() => console.log(`Observações. Porta ${port}.`))