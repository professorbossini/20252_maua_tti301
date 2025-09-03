const axios = require('axios')
const appid = 'aqui vai a sua chave de api'
const q = "São Caetano do Sul"
const units = 'metric'
const lang = 'pt_BR'
const cnt = 10
const url = `https://api.openweathermap.org/data/2.5/forecast?q=${q}&units=${units}&appid=${appid}&lang=${lang}&cnt=${cnt}`

// axios.get(url)
//     .then((res) => {
//         console.log(res)
//         return res.data
//     })
//     .then((res) => {
//         console.log(res)
//         return(res["list"])
//     })
//     .then((res) => {
//         for(let previsao of res){
//             console.log(`
//                 ${new Date(previsao.dt * 1000).toLocaleString()},
//                 ${'Min: ' + previsao.main.temp_min}\u00B0C,
//                 ${'Max: ' + previsao.main.temp_max}\u00B0C,
//                 ${'Umidade: ' + previsao.main.humidity}%,
//                 ${previsao.weather[0].description}
//                 `)
//         }
//     })
//     .catch((err) => {
//         console.log(err)
//     })

async function getForecast(){
    try{
        res = await axios.get(url)
        console.log(res)
        forecast_list = res.data.list
        for(let previsao of forecast_list){
            console.log(`
                ${new Date(previsao.dt * 1000).toLocaleString()},
                ${'Min: ' + previsao.main.temp_min}\u00B0C,
                ${'Max: ' + previsao.main.temp_max}\u00B0C,
                ${'Umidade: ' + previsao.main.humidity}%,
                ${previsao.weather[0].description}
                `)
        }
    } catch (err){
        console.log('Deu erro.', err)
    }
}
getForecast()   