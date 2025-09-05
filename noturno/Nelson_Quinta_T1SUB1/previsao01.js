// Importa a biblioteca 'axios' para fazer requisições HTTP para a API.
const axios = require("axios");

// Define uma função assíncrona para buscar e processar os dados do clima.
// O uso de 'async' permite usar a palavra-chave 'await' para esperar por operações demoradas.
async function obterPrevisao() {
    // Inicia um bloco 'try...catch' para capturar e tratar possíveis erros durante a requisição ou processamento.
    try {
        // Declaração de variáveis para os parâmetros da URL da API.

        // Chave de acesso (API Key) para autenticar a requisição.
        const appid = "sua chave";
        // Nome da cidade para a qual se deseja a previsão do tempo.
        const q = "Itu";
        // Unidade de medida para as temperaturas (por exemplo, "metric" para Celsius).
        const units = "metric";
        // Idioma da resposta da API (por exemplo, "pt_BR" para português do Brasil).
        const lang = "pt_BR";
        // Número de resultados de previsão a serem retornados pela API.
        const cnt = "10";
        // Constrói a URL completa da API, concatenando todos os parâmetros definidos acima.
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${q}&units=${units}&appid=${appid}&lang=${lang}&cnt=${cnt}`;

        // Realiza a requisição HTTP GET para a URL construída.
        // O 'await' pausa a execução da função até que a Promise (a requisição) seja resolvida ou rejeitada.
        const res = await axios.get(url);
        // Exibe o objeto de resposta completo, que contém os dados e o status da requisição.
        console.log(res);

        // Acessa a propriedade 'data' do objeto de resposta, que contém o corpo da resposta em JSON.
        const data = res.data;
        // Exibe o número de previsões retornadas pela API.
        console.log(data.cnt);

        // Exibe o objeto de dados completo, mostrando o conteúdo retornado pela API.
        console.log("aqui", data);
        // Acessa a propriedade 'list' dos dados, que é um array contendo as previsões detalhadas.
        const list = data['list'];

        // Inicia um loop para processar cada objeto de previsão individualmente.
        for (let previsao of list) {
            // Exibe um bloco de texto formatado com os detalhes de cada previsão.
            console.log(`
            // Converte o carimbo de data e hora (timestamp) da previsão para um formato de data e hora legível.
            ${new Date(+previsao.dt * 1000).toLocaleString()},
            // Exibe a temperatura mínima, com o símbolo de grau Celsius.
            ${'Min: ' + previsao.main.temp_min}\u00B0C,
            // Exibe a temperatura máxima, também com o símbolo de grau Celsius.
            ${'Max: ' + previsao.main.temp_max}\u00B0C,
            // Exibe a porcentagem de umidade.
            ${'Hum: ' + previsao.main.humidity}%,
            // Exibe a descrição do clima, como "chuva leve" ou "céu limpo".
            ${previsao.weather[0].description}
            `);
        }

        // Usa o método 'filter' para criar um novo array.
        // A condição `r.main.feels_like >= 20` mantém apenas as previsões em que a sensação térmica é igual ou superior a 20 graus.
        const listaFiltrada = list.filter(r => r.main.feels_like >= 20);
        // Exibe a quantidade de previsões que correspondem ao critério de filtro.
        console.log(`${listaFiltrada.length} previsões têm
        percepção humana de temperatura acima de 20
        graus`);

    // Bloco que é executado se qualquer erro ocorrer no bloco 'try' acima.
    } catch (error) {
        // Exibe uma mensagem de erro no console, com os detalhes do erro ocorrido.
        console.error("Ocorreu um erro ao buscar os dados da previsão:", error);
    }
}

// Inicia a execução da função 'obterPrevisao'.
obterPrevisao();