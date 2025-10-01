const express = require('express');
const app = express();
app.use(express.json());

const axios = require('axios');

app.post('/eventos', (req, res) => {
    const evento = req.body;
    axios.post('http://localhost:4000/eventos', evento);
    axios.post('http://localhost:5001/eventos', evento);
    //envia o evento para o microsserviço de consulta
    axios.post('http://localhost:6000/eventos', evento)
    //envia o evento para o microsservico de classificação
    axios.post('http://localhost:7001/eventos', evento)
    res.status(200).send({msg: 'ok'});
});

app.listen(10000, () => {
    console.log('Barramento de Eventos. Porta 10000');
});
