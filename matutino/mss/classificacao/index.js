const express = require ('express')
const axios = require ('axios')
const app = express()
app.use(express.json())
const palavraChave = 'importante'
const funcoes = {
  ObservacaoCriada: (observacao) => {
    //verificar se o texto da observacao contém a palavra chave, trocando o status dela, usando operador ternário obrigatoriamente
    observacao.status = observacao.texto.includes(palavraChave) ? 'importante' : 'comum'
    //emitir um evento do tipo ObservacaoClassificada
    const axios = require('axios')
    axios.post('http://barramento-de-eventos-service:10000/eventos', {
      tipo: 'ObservacaoClassificada',
      dados: observacao
    })
    
  }
}
//deve ser post e receber requisições no padrão /eventos
app.post('/eventos', (req, res) => {
  try{
    funcoes[req.body.tipo](req.body.dados)
  }
  catch(err){}
  res.status(200).send({msg: 'ok'})
})


//e colocar o servidor para executar na porta 7000
const port = 7000
app.listen(port, async () => {
  console.log(`Classificação. Porta ${port}.`)
  const resp = await axios.get('http://barramento-de-eventos-service:10000/eventos')
  resp.data.forEach((valor, indice, colecao) => {
    try{
      funcoes[valor.tipo](valor.dados)  
    }
    catch(err){}
  })
})