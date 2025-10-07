// Importa o framework Express, essencial para construir aplicações web e APIs com Node.js.
const express = require('express');
// Cria uma instância do aplicativo Express. Esta variável será o ponto central para configurar rotas e middleware.
const app = express();
// Configura o middleware para que o Express consiga interpretar requisições que chegam com o corpo no formato JSON.
// Isso é crucial para receber os eventos.
app.use(express.json());

// Importa a biblioteca Axios, utilizada para fazer requisições HTTP (como o POST) para outros serviços.
const axios = require('axios');
// Array que atuará como um "log" ou armazenamento temporário dos eventos recebidos pelo Barramento.
const eventos = []

// Define um endpoint (rota) que aceita requisições HTTP do tipo POST. 
// Esta é a rota que os produtores de eventos usarão para enviar novos eventos ao Barramento.
app.post('/eventos', (req, res) => {
    // Extrai o corpo da requisição, que contém o evento em si.
    const evento = req.body;
    // Adiciona o evento recém-chegado ao array de eventos (armazenamento local/cache).
    eventos.push(evento);

    // --- Processo de Distribuição (Broadcast) do Evento ---
    
    // 1. Envio para o Microsserviço na porta 4000
    // Realiza uma requisição POST assíncrona para enviar o evento a um microsserviço específico.
    axios.post('http://localhost:4000/eventos', evento).catch((err) => {
        // O método .catch() trata erros de conexão (ex: o microsserviço está offline ou a conexão é recusada).
        // Isso impede que uma falha de comunicação com um serviço trave o Barramento.
        console.error(`[4000] Falha ao enviar evento: ${err.code}`); 
    });

    // 2. Envio para o Microsserviço na porta 5000
    // Envia o mesmo evento para um segundo microsserviço.
    axios.post('http://localhost:5000/eventos', evento).catch((err) => {
        // Trata a exceção de falha de comunicação para este serviço.
        console.error(`[5000] Falha ao enviar evento: ${err.code}`);
    });

    // 3. Envio para o Microsserviço de Consulta (porta 6000)
    // Distribuição do evento para o microsserviço responsável por manter uma visão de consulta (leitura) dos dados.
    axios.post("http://localhost:6000/eventos", evento).catch((err) => {
        // Tratamento de erro para o serviço de consulta.
        console.error(`[6000] Falha ao enviar evento: ${err.code}`);
    });

    // 4. Envio para o Microsserviço de Classificação (porta 7000)
    // Distribuição do evento para um quarto microsserviço, que pode ter uma função de processamento ou classificação.
    axios.post("http://localhost:7000/eventos", evento).catch((err) => {
        // Tratamento de erro para o serviço de classificação.
        console.error(`[7000] Falha ao enviar evento: ${err.code}`);
    });

    // Envia uma resposta ao serviço que originou o evento, confirmando que o Barramento o recebeu com sucesso (status HTTP 200).
    // O Barramento responde imediatamente, sem esperar as respostas dos microsserviços consumidores (comunicação assíncrona).
    res.status(200).send({msg: 'ok'});
});

// Define um endpoint que aceita requisições HTTP do tipo GET.
app.get('/eventos', (req, res) => {
    // Retorna o array completo de eventos que foram armazenados localmente no Barramento.
    // Isso é útil para verificar o histórico de eventos ou para fins de recuperação em um ambiente de desenvolvimento/teste.
    res.send(eventos)
})

// Inicia o servidor e o faz escutar na porta 10000.
// Esta é a porta pela qual os produtores enviarão eventos para o Barramento.
app.listen(10000, () => {
    // Exibe uma mensagem de confirmação no console ao iniciar o servidor.
    console.log('Barramento de Eventos. Porta 10000');
});