//importando o módulo 'express' -> framework para
//criar servidores web em NodeJs
const express = require ('express');

//Importando o modulo 'body-parser
//biblioteca para processar dados enviados
//no corpo da requisição HTTP
const bodyParser = require('body-parser');

//Criando uma instância do aplicativo express
//desse app que configuramos rotas e middleware
const app = express()

////configurando para processar os 'corpos'
//de requisições no formato JSON
//Permite receber JSON
app.use(bodyParser.json());

//Cria um objeto vazio chamado lembretes que será
//o banco de dados temporário
const lembretes = {};

//ID dos lembretes
contador = 0;
//rota 'GET' para o caminho /lembretes
app.get('/lembretes', (req, res) => {
    //envia todo o objeto lembretes como resposta
    res.send(lembretes);
});

//rota 'PUT' para o caminho /lembretes
app.put('/lembretes', (req, res) => {
    contador ++;
    //Extraindo a propriedade 'texto' do corpo
    //do JSON
    const { texto } = req.body;
    //Adicionando um novo lembrete
    //ID, e colocando contador, texto no lembrete
    lembretes[contador] = {
        contador, texto
    }
    //É o status de resposta 201 (created)
    //criado com sucesso
    res.status(201).send(lembretes[contador]);
});

//Inicia o servidor fazendo o mesmo "escutar"
//por requisições a porta 4000
app.listen(4000, () => {
    console.log('Lembretes. Porta 4000');
});