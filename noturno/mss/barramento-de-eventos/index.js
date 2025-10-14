const express = require("express");
const app = express();
app.use(express.json());

const axios = require("axios");

const eventos = [];

app.post("/eventos", (req, res) => {
  const evento = req.body;
  eventos.push(evento);
  axios.post("http://10.2.4.75:4000/eventos", evento).catch((err) => {});
  axios.post("http://10.2.4.75:5001/eventos", evento).catch((err) => {});
  //envia o evento para o microsserviço de consulta
  axios.post("http://10.2.4.75:6000/eventos", evento).catch((err) => {});
  //envia o evento para o microsserviço de classificação
  axios.post("http://10.2.4.75:7001/eventos", evento).catch((err) => {});
  res.status(200).send({ msg: "ok" });
});

app.get("/eventos", (req, res) => {
  res.send(eventos);
});

app.listen(10000, () => {
  console.log("Barramento de Eventos. Porta 10000");
});
