// Importa o framework Express para criar o servidor web.
const express = require("express");

// Cria uma instância do Express para configurar e gerenciar o servidor.
const app = express();

// Habilita o Express a processar corpos de requisições no formato JSON.
app.use(express.json());

// Cria um objeto vazio para atuar como um "banco de dados" temporário.
// Ele irá armazenar lembretes e suas observações.
const baseConsulta = {};

// Cria um objeto chamado 'funcoes' que armazena outras funções.
// Ele serve para organizar o código e executar a função certa com base no tipo do evento recebido.
const funcoes = {

    // Define uma função que será executada quando o evento for 'LembreteCriado'.
    // A função recebe os dados do lembrete como parâmetro.
    LembreteCriado: (lembrete) => {

        // Armazena o lembrete na 'baseConsulta', usando o contador do lembrete como a chave.
        // Por exemplo: baseConsulta[1] = { contador: 1, texto: "Comprar pão" }
        baseConsulta[lembrete.contador] = lembrete;
    },

    // Define uma função que será executada quando o evento for 'ObservacaoCriada'.
    // A função recebe os dados da observação como parâmetro.
    ObservacaoCriada: (observacao) => {

        // Busca a lista de observações do lembrete correspondente na 'baseConsulta'.
        // O "observacao.lembreteId" é a chave que conecta a observação ao lembrete certo.
        // Se a lista não existir, ela é criada como um array vazio.
        const observacoes =
        baseConsulta[observacao.lembreteId]["observacoes"] || [];

        // Adiciona a nova observação à lista.
        observacoes.push(observacao);

        // Atualiza a 'baseConsulta' com a lista de observações modificada, garantindo que a nova observação seja salva.
        baseConsulta[observacao.lembreteId]["observacoes"] = observacoes;
    }
};

// Define uma rota GET para o endpoint '/lembretes'.
// Quando essa rota é acessada, ela retorna todos os dados da 'baseConsulta'.
app.get("/lembretes", (req, res) => {

    // Envia uma resposta com o status 200 (OK) e o conteúdo completo da 'baseConsulta'.
    res.status(200).send(baseConsulta);
});

// Define uma rota POST para o endpoint '/eventos'.
// Este serviço atua como um "ouvinte" para o Barramento de Eventos (que está em outra porta).
app.post("/eventos", (req, res) => {

    // Acessa o objeto 'funcoes' e executa a função que corresponde ao tipo de evento recebido no corpo da requisição.

    // Por exemplo, se o tipo for 'LembreteCriado', ele executa a função `funcoes.LembreteCriado`.
    funcoes[req.body.tipo](req.body.dados);

    // Envia uma resposta com status 200 (OK) e o conteúdo atualizado da 'baseConsulta'.
    res.status(200).send(baseConsulta);
});

// Inicia o servidor para que ele comece a escutar por requisições na porta 6000.
app.listen(6000, () => console.log("Consultas. Porta 6000"));
