const express = require('express')
const app = express()
app.use(express.json())
const axios = require("axios");
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

contador = 0;


app.get('/lembretes', (req, res) => {
  res.send(lembretes)    
})
//para cadastrar novo lembretes
//POST /lembretes {"texto": "Fazer café"}
app.post("/lembretes", async (req, res) => {
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
  await axios.post("http://barramento-de-eventos-service:10000/eventos", {
    tipo: "LembreteCriado",
    dados: {
      contador,
      texto
    }
  });

  res.status(201).send(lembretes[contador])
})

app.post("/eventos", (req, res) => {
  try{
    console.log(req.body);
  }
  catch(err){}
  res.status(200).send({ msg: "ok" });
});

const port = 4000
app.listen(port, () => {
  console.log("Nova versão");
  console.log("Agora usando o docker hub - nova versão e alterada novamente");
  console.log(`Lembretes. Porta ${port}.`)
})