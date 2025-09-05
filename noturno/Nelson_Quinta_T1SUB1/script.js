const axios = require("axios");

// Função assíncrona para buscar e processar os dados do clima
async function obterPrevisao() {
    try {
        //sua chave aqui
        const appid = "sua_chave_aqui";
        //cidade desejada
        const q = "Itu";
        //unidade de medida de temperatura
        const units = "metric";
        //idioma
        const lang = "pt_BR";
        //quantidade de resultados
        const cnt = "10";
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${q}&units=${units}&appid=${appid}&lang=${lang}&cnt=${cnt}`;

        // 1. Aguarda a resolução da Promise da requisição HTTP
        const res = await axios.get(url);
        console.log(res); // Equivalente ao primeiro .then()

        const data = res.data;
        console.log(data.cnt); // Equivalente ao segundo .then()

        console.log("aqui", data); // Equivalente ao terceiro .then()
        const list = data['list'];

        // 2. Processa a lista de previsões
        for (let previsao of list) {
            console.log(`
        ${new Date(+previsao.dt * 1000).toLocaleString()},
        ${'Min: ' + previsao.main.temp_min}\u00B0C,
        ${'Max: ' + previsao.main.temp_max}\u00B0C,
        ${'Hum: ' + previsao.main.humidity}%,
        ${previsao.weather[0].description}
      `);
        }

        // 3. Filtra e exibe a contagem de previsões com sensação térmica alta
        const listaFiltrada = list.filter(r => r.main.feels_like >= 20);
        console.log(`${listaFiltrada.length} previsões têm
      percepção humana de temperatura acima de 20
      graus`);

    } catch (error) {
        // Captura qualquer erro que possa ocorrer durante a requisição ou processamento
        console.error("Ocorreu um erro ao buscar os dados da previsão:", error);
    }
}

// Chama a função para executar o processo
obterPrevisao();



