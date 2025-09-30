const express = require('express');
const app = express();
app.use(express.json());

const axios = require('axios');

app.post('/eventos', (req, res) => {
    const evento = req.body;
    axios.post('http://localhost:4000/eventos', evento);
    axios.post('http://localhost:5000/eventos', evento);
    //Enviar dados para o microserviço de consulta na porta 6000
    axios.post('http://localhost:6000/eventos', evento);
    res.status(200).send({msg: 'ok'});
});

app.listen(10000, () => {
    console.log('Barramento de Eventos. Porta 10000');
});
