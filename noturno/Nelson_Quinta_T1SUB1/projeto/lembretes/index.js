//importar o módulo express
const express = require('express');

//Biblioteca para processar dados enviados no corpo
//das requisições HTTP
const bodyParser = require('body-parser');
//Criar uma instância do aplicativo Express
//A partir da const app que construimos o middleware
const app = express();

//Usar para processar corpos de requisições no 
//formato JSON. Permitindo que a API receba dados JSON
app.use(bodyParser.json());

//Criando const lembretes de forma vazia
//Vai atuar como o nosso "banco de dados" temporário
const lembretes = {};
contador = 0;

////"rota" GET para o caminho /lembretes
app.get ('/lembretes', (req, res) => {
    //Envia todo o conteúdo de lembretes para o cliente
    res.send(lembretes);
});

//"rota" PUT para o caminho /lembretes
app.put ('/lembretes', (req, res) => {
    contador ++;

    //Extrair a propriedade "texto" do corpo JSON
    const { texto } = req.body;

    //Adicionar um novo lembrete ao obejto LEMBRETES
    //usando valor do contador como chave ID
    lembretes[contador] = {
        contador, texto
    }
    //Define o status da resposta como 201 (Created)
    //indica que um novo recurso foi criado com sucesso
    res.status(201).send(lembretes[contador]);
});

//Inicia o servidor, fazendo o mesmo "escutar"
//por requisições na porta 4000
app.listen(4000, () => {
    console.log('Lembretes. Porta 4000');
});