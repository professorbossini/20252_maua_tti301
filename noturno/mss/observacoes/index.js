const express = require("express");
const app = express();
app.use(express.json());

const axios = require("axios");

const { v4: uuidv4 } = require("uuid");

const observacoesPorLembreteId = {};

const funcoes = {
  ObservacaoClassificada: (observacao) => {
    const observacoes = observacoesPorLembreteId[observacao.lembreteId]
    const obsParaAtualizar = 
      observacoes.find(o => o.id === observacao.id)
    obsParaAtualizar.status = observacao.status
    axios.post('http://localhost:10000/eventos', {
      tipo: "ObservacaoAtualizada",
      dados: {
        id: observacao.id,
        texto: observacao.texto,
        lembreteId: observacao.lembreteId,
        status: observacao.status
      }
    })
  }

}

//:id é um placeholder para o id do lembrete que vai ter observações salvas sobre ele.
app.post("/lembretes/:id/observacoes", async (req, res) => {
  const idObs = uuidv4();
  const { texto } = req.body;
  const observacoresDoLembrete = observacoesPorLembreteId[req.params.id] || [];
  observacoresDoLembrete.push({ id: idObs, texto, status: 'aguardando' });
  observacoesPorLembreteId[req.params.id] = observacoresDoLembrete;
  await axios.post("http://localhost:10000/eventos", {
    tipo: "ObservacaoCriada",
    dados: {
      id: idObs,
      texto,
      lembreteId: req.params.id,
      status: 'aguardando'
    },
  });

  res.status(201).send(observacoresDoLembrete);
});

app.get("/lembretes/:id/observacoes", (req, res) => {
  res.send(observacoesPorLembreteId[req.params.id] || []);
});

app.post("/eventos", (req, res) => {
  try{
    funcoes[req.body.tipo](req.body.dados)
  } catch(err){}
  res.status(200).send({ msg: "ok" });
});

app.listen(5001, () => {
  console.log("Observações dos Lembretes. Porta 5001");
});
