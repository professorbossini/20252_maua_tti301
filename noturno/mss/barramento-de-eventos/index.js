const express = require('express');
const app = express();
app.use(express.json());

const axios = require('axios');

const eventos = []

app.post('/eventos', (req, res) => {
    const evento = req.body;
    eventos.push(evento)
    // Cada serviço em um composer pode se comunicar com o outro pelo nome do serviço
    // que passa a ser o hostname também para acesso dentro do docker network
    //envia o evento para o microsserviço de lembretes
    axios.post('http://127.0.0.1:4000/eventos', evento).catch((err) => {})
    axios.post('http://127.0.0.1:5001/eventos', evento).catch((err) => {})
    //envia o evento para o microsserviço de consulta
    axios.post('http://127.0.0.1:6000/eventos', evento).catch((err) => {})
    //envia o evento para o microsservico de classificação
    axios.post('http://127.0.0.1:7001/eventos', evento).catch((err) => {})
    res.status(200).send({msg: 'ok'});
});

app.get('/eventos', (req, res) => {
    res.send(eventos)
})

app.listen(10000, () => {
    console.log('Barramento de Eventos. Porta 10000');
});
