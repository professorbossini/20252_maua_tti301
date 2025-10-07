// Importa o framework Express para criar o servidor web.
const express = require("express");

// Cria uma instância do Express para configurar e gerenciar o servidor.
const app = express();

// Habilita o Express a processar corpos de requisições no formato JSON.
app.use(express.json());
const axios = require("axios");

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
    },
    ObservacaoAtualizada: (observacao) => {
        const observacoes = baseConsulta[observacao.lembreteId]["observacoes"];
        const indice = observacoes.findIndex((o) => o.id === observacao.id);
        observacoes[indice] = observacao;
    },
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
    try {
        funcoes[req.body.tipo](req.body.dados);
    } catch (err) {}
    res.status(200).send({ msg: "ok" });
});

// Inicia o servidor para que ele comece a escutar por requisições na porta 6000.
// A função de callback é definida como 'async' porque precisará executar operações assíncronas (requisições HTTP).
app.listen(6000, async () => {
    // Exibe uma mensagem de confirmação no console, indicando que o serviço está ativo.
    console.log("Consultas. Porta 6000");
    
    // Realiza uma requisição HTTP GET para o Barramento de Eventos (porta 10000).
    // O objetivo é obter todos os eventos que o Barramento armazenou desde o início.
    const resp = await axios.get("http://localhost:10000/eventos");
    
    // A biblioteca Axios armazena o corpo da resposta (o array de eventos) na propriedade 'data'.
    // O método 'forEach' itera sobre cada evento recebido.
    resp.data.forEach((valor, indice, colecao) => {
        // Bloco 'try' para tentar processar cada evento individualmente.
        try {
            // Assume-se que 'funcoes' é um objeto onde as chaves são os 'tipo's dos eventos (ex: 'ComentarioCriado')
            // e os valores são as funções que processam esses eventos.
            // Esta chamada aplica a lógica de processamento do evento para reconstruir o estado de dados do microsserviço de Consulta.
            funcoes[valor.tipo](valor.dados);
        } catch (err) {
            // O bloco 'catch' vazio é uma prática para ignorar erros no processamento de eventos específicos
            // (por exemplo, se um tipo de evento for desconhecido ou não for mais relevante).
            // Em produção, é recomendável registrar o erro aqui para fins de auditoria, mas a estrutura atual opta por não travar a inicialização.
        }
    });
});
