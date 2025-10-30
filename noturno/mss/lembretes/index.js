const express = require("express");
const app = express();
app.use(express.json());

const axios = require("axios");

const lembretes = {};
contador = 0;

app.get("/lembretes", (req, res) => {
  res.send(lembretes);
});

app.post("/lembretes", async (req, res) => {
  contador++;
  const { texto } = req.body;
  lembretes[contador] = { contador, texto };
  await axios.post("http://10.2.4.75:10000/eventos", {
    tipo: "LembreteCriado",
    dados: {
      contador,
      texto,
    }, // Faltava essa virgulo no código
  });
  res.status(201).send(lembretes[contador]);
});

app.post("/eventos", (req, res) => {
  console.log(req.body);
  res.status(200).send({ msg: "ok" });
});

app.listen(4000, () => {
  console.log("Nova versão");
  console.log("Agora usando o Docker Hub");
  console.log("Lembretes. Porta 4000");
});
