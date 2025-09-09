function somaAte(numero){
  return numero >= 0
  ? Promise.resolve((numero * (numero + 1) / 2))
  : Promise.reject("Somente números positivos")
}

somaAte(10)
  .then((res) => {
    console.log(res)
    return res
  })
  .then((res) => {
    res1 = res * 10
    console.log(res1)
  })
  .catch((err) => {
    console.log(err)
  })

async function chamadaAssincrona(){
  try{
    res = await somaAte(10)
    console.log(res)
    res1 = res * 10
    console.log(res1)
  } catch (err){
    console.log(err)
  }
}
chamadaAssincrona()

// const axios = require("axios");
//  //sua chave aqui
// const appid = "sua_chave_aqui";
//  //cidade desejada
//  const q = "Itu";
//  //unidade de medida de temperatura
//  const units = "metric";
//  //idioma
//  const lang = "pt_BR";
//  //quantidade de resultados
//  const cnt = "10"
//  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${q}&units=${units}&appid=${appid}&lang=${lang}&cnt=${cnt}`;

// axios
//   .get(url)
//   .then((res) => {
//     console.log(res);
//     return res.data;
//   })
//   .then((res) => {
//     console.log(res.cnt);
//     return res;
//   })
//   .then((res) => {
//     console.log("aqui", res);
//     return res['list'];
//   })
//   .then((res) => {
//     for (let previsao of res) {
//       console.log(`
//         ${new Date(+previsao.dt * 1000).toLocaleString()},
//         ${'Min: ' + previsao.main.temp_min}\u00B0C,
//         ${'Max: ' + previsao.main.temp_max}\u00B0C,
//         ${'Hum: ' + previsao.main.humidity}%,
//         ${previsao.weather[0].description}



function buscarDadosUsuario(id) {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      if (id === 123) {
        resolve({
          nome: "João Silva",
          email: "joao.silva@exemplo.com"
        })
      } else {
        reject("Usuário não foi encontrado");
      }
    },2000); // Timer de 2 segundo atraso da resposta
  })
}

// buscarDadosUsuario(123)
// .then((dados)=>{
//   console.log("Usuário com id: 123 - Dados obtidos: ", dados);
// })
// .catch((erro) => {
//   console.log("Usuário 123: - Erro: ", erro );
// });

// buscarDadosUsuario(456)
// .then((dados)=> {
//   console.log("Usuario com id: 456 - Dados obtidos:", dados);
// })
// .catch((erro)=>{
//   console.log("Usuário 456: - Erro: ", erro)
// })


async function exibirDadosUsuario(id) {
  try {
    const dados = await buscarDadosUsuario(id);
    console.log("Dados do usuário: ", id, " - Dados obtidos:", dados);
  } catch(erro) {
    console.log("Usuário id: ", id, " - Erro: ", erro);
  }
}

exibirDadosUsuario(123);
exibirDadosUsuario(456);









// const axios = require("axios");
//  //sua chave aqui
// const appid = "sua_chave_aqui";
//  //cidade desejada
//  const q = "Itu";
//  //unidade de medida de temperatura
//  const units = "metric";
//  //idioma
//  const lang = "pt_BR";
//  //quantidade de resultados
//  const cnt = "10"
//  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${q}&units=${units}&appid=${appid}&lang=${lang}&cnt=${cnt}`;

// axios
//   .get(url)
//   .then((res) => {
//     console.log(res);
//     return res.data;
//   })
//   .then((res) => {
//     console.log(res.cnt);
//     return res;
//   })
//   .then((res) => {
//     console.log("aqui", res);
//     return res['list'];
//   })
//   .then((res) => {
//     for (let previsao of res) {
//       console.log(`
//         ${new Date(+previsao.dt * 1000).toLocaleString()},
//         ${'Min: ' + previsao.main.temp_min}\u00B0C,
//         ${'Max: ' + previsao.main.temp_max}\u00B0C,
//         ${'Hum: ' + previsao.main.humidity}%,
//         ${previsao.weather[0].description}

//         `);
//     }
//     return res;
//   })
//   .then((res) => {
//     const lista = res.filter(r => r.main.feels_like >= 30);
//     console.log (`${lista.length} previsões têm
//       percepção humana de temperatura acima de 30
//       graus`)
      
//   });






// const fs = require("fs").promises;

// async function calcularMultiplos(nomeArquivo) {
//     try {
//         console.log("Iniciando o processo...")
//         // 1 - Leitura do arquivo principal

//         const conteudoInicial = await fs.readFile(nomeArquivo);
//         console.log(`Conteúdo do arquivo ${nomeArquivo}: ${conteudoInicial.toString()}`);

//         // 2 - calculo do dobro e escrita do valor
//         const dobro = Number(conteudoInicial.toString()) * 2;
//         await fs.writeFile('dobro.txt', dobro.toString());
//         console.log(`Dobro do valor escrito em dobro.txt: ${dobro}`);


//     } catch(erro) {
//         console.log(`Erro ao processar ${erro}`);
//     }
// }

// calcularMultiplos('arquivo.txt');


// function fatorial(n) {
//      if (n < 0) return Promise.reject("Valor não pode ser negativo");
//  let res = 1;
//      for (let i = 2; i <= n; i++) res *= i;
//      return Promise.resolve(res);
// }

// async function chamadaComAwait() {
//     //note que não há paralelismo implícito
//     //somente haverá paralelismo se a função chamada utilizar explicitamente
//     const f1 = await fatorial(5);
//     console.log(f1);
//     const f2 = await fatorial(-1);
//     console.log(f2);
// }

// await chamadaComAwait();


// function chamadaComThenCatch() {
//      fatorial(5)
//      .then((res) => console.log(res))
//      .catch((res) => console.log(res));
    
//      fatorial(-1)
//      .then((res) => console.log(res))
//      .catch((res) => console.log(res));
    
// }
// chamadaComThenCatch();



// async function hello(nome) {
//     return "Oi, " + nome;
// }

// const boasVindas = hello("João");
// console.log(boasVindas);
// boasVindas.then((res) => console.log(res));



// function calculoRapidinho(numero) {
//      return numero >= 0
//      ? Promise.resolve((numero * (numero + 1)) / 2)
//      : Promise.reject("Somente valores positivos, por favor");
// }

// calculoRapidinho(10)
//  .then((resultado) => {
//      console.log(resultado);
// })
//  .catch((err) => {
//      console.log(err);
// });

// calculoRapidinho(-1)
//  .then((resultado) => {
//     console.log(resultado);
// })
//  .catch((err) => {
//      console.log(err);
// });

// console.log("esperando...");


// function calculoRapidinho(numero) {
//      return Promise.resolve((numero * (numero + 1)) / 2);
    
// }

// console.log("Antes de chamar o calculo rapidinho")
// calculoRapidinho(10).then(resultado => {
//     console.log("Agora estou continuando na parte do then")
//      console.log(resultado)
    
// })
// //Executa primeiro, mesmo que a promise já esteja fullfilled
// console.log('Esperando...')
// console.log("Após chamar o calculo rapidinho")



// function calculoDemorado(numero) {
//    return new Promise(function (resolve, reject) {
//      let res = 0;
//      for (let i = 1; i <= numero; i++) {
//        res += i;
      
//     }
//      resolve(res);
//   });
  
// }
//  calculoDemorado(10).then((resultado) => {
//    console.log(resultado)
// })



// // const fs = require('fs')

// // const abrirArquivo = function (nomeArquivo) {
//   const exibirConteudo = function (erro, conteudo) {
//     if (erro) {
//       console.log(`Deu erro ao ler o arquivo inicial: ${erro}`)
//     }
//     else {
//       console.log(`Conteúdo do arquivo.txt: ${conteudo.toString()}`)
//       const dobro = Number(conteudo.toString()) * 2

//       const finalizar = function (erro) {
//         if (erro) {
//           console.log(`Erro tentando salvar o dobro: ${erro}`)
//         }
//         else {
//           console.log("Salvou o dobro com sucesso")
//           // Precisamos tratar a abertura no caso do sucesso de salvar o arquivo dobro.txt
//           // É esse encadeamento que vai tornando cada vez mais críptico nosso código...
//           // --- INÍCIO DA NOVA LÓGICA PARA LER O dobro.txt, calcular o triplo e salvar o resultado---
//           // Agora, lemos o arquivo 'dobro.txt' que acabamos de salvar.
//           fs.readFile('dobro.txt', (erroLeituraDobro, conteudoDobro) => {
//             if (erroLeituraDobro) {
//               console.log(`Erro ao ler o arquivo dobro.txt: ${erroLeituraDobro}`)
//             } else {
//               console.log(`Conteúdo do dobro.txt: ${conteudoDobro.toString()}`)
//               const triplo = Number(conteudoDobro.toString()) * 3

//               // Callback para a escrita do arquivo 'triplo.txt'
//               const finalizarTriplo = function (erroEscritaTriplo) {
//                 if (erroEscritaTriplo) {
//                   console.log(`Erro tentando salvar o triplo: ${erroEscritaTriplo}`)
//                 } else {
//                   console.log("Salvou o triplo com sucesso")
//                 }
//               }

//               // Escreve o resultado no arquivo 'triplo.txt'
//               fs.writeFile('triplo.txt', triplo.toString(), finalizarTriplo)
//             }
//           })
//           // --- FIM DA NOVA LÓGICA ---
//         }
//       }

//       fs.writeFile('dobro.txt', dobro.toString(), finalizar)
//     }
//   }

//   fs.readFile(nomeArquivo, exibirConteudo)
//   console.log('Continuando...') // Este log ainda executa primeiro
// }

// console.log("Antes da chamada inicial")
// abrirArquivo('arquivo.txt')
// console.log("Após a chamada inicial")





//depois que salvou o dobro, fazer a leitura do conteúdo do arquivo dobro.txt e calcular o triplo dele, salvando num arquivo chamado triplo.txt
// const fs = require('fs')
// const abrirArquivo = function(nomeArquivo){
//   const exibirConteudo = function(erro, conteudo){
//     if(erro){
//       console.log(`Deu erro: ${erro}`)
//     }
//     else{ 
//       console.log(`Conteúdo: ${conteudo.toString()}`)
//       const dobro = Number(conteudo.toString()) * 2
//       const finalizar = function(erro){
//         if(erro){
//           console.log(`Erro tentando salvar o dobro: ${erro}`)
//         }
//         else{
//           console.log("Salvou o dobro com sucesso")
          
//         }
//       }
//       fs.writeFile('dobro.txt', dobro.toString(), finalizar)
//     }
//   }
//   fs.readFile(nomeArquivo, exibirConteudo)
//   console.log('Continuando...')
// }
// abrirArquivo('arquivo.txt')



// let pessoa = {
//     "nome" : "João",
//     "idade" : 17, 
//     nascimento: "1990-09-09"
// }
// function eAgora(){
//     let cont = 1
//     function f1(){
//         console.log(cont)
//     }
//     cont++
//     function f2(){
//         console.log(cont)
//     }
//     return {f1, f2}
// }
// let eAgoraResult = eAgora()
// console.log(eAgoraResult)
// eAgoraResult.f1()
// eAgoraResult.f2()

// function saudacoesFactory(saudacao, nome){
//     return function(){
//         console.log(saudacao + ', ' + nome)
//     }
// }

// let olaJoao = saudacoesFactory('Olá', 'João')
// let tchauMaria = saudacoesFactory('Tchau', 'Maria')

// olaJoao()
// tchauMaria()

// const fs = require('fs')
// const abrirArquivo = function(nomeArquivo){
//     const exibirConteudo = function(erro, conteudo){
//         if (erro){
//             console.log(`Deu erro: ${erro}`)
//         } else {
//             console.log(conteudo.toString())
//             const dobro = conteudo.toString() * 2
//             const finalizar = function(erro){
//                 if(erro){
//                     console.log('Deu erro tentando salvar o dobro')
//                 } else {
//                     console.log('Salvou o dobro com sucesso')
//                 }
//             }
//             fs.writeFile('dobro.txt', dobro.toString(), finalizar)
//         }
//     }
//     fs.readFile(nomeArquivo, exibirConteudo)
// }
// abrirArquivo('arquivo.txt')

// const fs = require('fs')
// const abrirArquivo = function(nomeArquivo){
//     const exibirConteudo = function(erro, conteudo){
//         if (erro){
//             console.log(`Deu erro: ${erro}`)
//         } else {
//             console.log(conteudo.toString())
//         }
//     }
//     fs.readFile(nomeArquivo, exibirConteudo)
// }
// abrirArquivo('arquivo.txt')

// function demorada(tempo){
//     console.log(`demorada ${tempo}`)
//     const atualMaisTempo = new Date().getTime() + tempo
//     while (new Date().getTime() <= atualMaisTempo);
//     const d = 8 + 4
//     return d
// }
// setTimeout(function(){demorada(2000)}, 2000)
// setTimeout(function(){demorada(1000)}, 1000)
// console.log("chegou ao fim do script principal")

// setTimeout(function(){
//     console.log('dentro da timeout', 0)
// })
// const a = new Date().getTime() + 1000
// while (new Date().getTime() <= a);
// console.log('fora da timeout')

// function demorada(){
//     const atualMais2Segundos = new Date().getTime() + 2000
//     while (new Date().getTime() <= atualMais2Segundos);
//     const d = 8 + 4
//     return d
// }
// const a = 2 + 3
// const b = 5 + 9
// setTimeout(function(){
//     const d = demorada()
//     console.log(d)
// }, 500)
// const e = 2 + a + b
// console.log(e)

// function demorada(){
//     const atualMais2Segundos = new Date().getTime() + 2000
//     while (new Date().getTime() <= atualMais2Segundos);
//     const d = 8 + 4
//     return d
// }
// const a = 2 + 3
// const b = 5 + 9
// const d = demorada()
// const e = 2 + a + b
// console.log(e)

// console.log('Eu primeiro')
// console.log('Agora eu')
// console.log('Sempre vou ser a última')

// const a = 2 + 7
// const b = 5
// console.log(a + b)

// let pessoa = {
//     "nome" : "João",
//     "idade" : 17, 
//     nascimento: "1990-09-09"
// }

// console.log("Me chamo " + pessoa.nome);
// console.log("Tenho " + pessoa["idade"]);

// let pessoaComEndereco = {
//     nome: "Marcia",
//     idade: 21,
//     endereco: {
//         logradouro: "Rua B",
//         numero:121,
//         estado : {
//             nome: "São Paulo",
//             sigla: "SP"
//         }
//     },
// };

// console.log(
//     `Sou ${pessoaComEndereco.nome},
//     tenho ${pessoaComEndereco.idade} anos
//     trabalho como ${pessoaComEndereco.profissao}
//     e moro na rua ${pessoaComEndereco.endereco.logradouro}, ${pessoaComEndereco.endereco.numero} - ${pessoaComEndereco.endereco.estado.nome} (${pessoaComEndereco.endereco.estado.sigla})`
// );

// let concessionaria = {
//     cnpj : "00011122210001-45",
//     endereco: {
//         logradouro: "Rua A",
//         numero: 10,
//         bairro: "Vila J",
//     },
//     veiculos: [
//         { 
//             marca: "Ford",
//             modelo: "Ecosport",
//             anoDeFabricacao: 2018,
//         },
//         { 
//             marca: "Chevrolet",
//             modelo: "ônix",
//             anoDeFabricacao: 2020,

//         },
//         {
//             marca: "Volkswagen",
//             modelo: "Nivus",
//             anoDeFabricacao: 2020,
//         }
//     ],

// };

// for (let veiculo of concessionaria.veiculos) {
//     console.log(`Marca: ${veiculo.marca}`)
//     console.log(`Modelo: ${veiculo.modelo}`)
//     console.log(`Ano de Fabricação: ${veiculo.anoDeFabricacao}`)
// }

// // for (let veiculo of pessoaComEndereco.veiculos) {
// //     console.log(`Marca: ${veiculo.marca}`)
// //     console.log(`Modelo: ${veiculo.modelo}`)
// //     console.log(`Ano de Fabricação: ${veiculo.anoDeFabricacao}`)
// // }

// let calculadora = {
//     soma: 12,
//     somar: (a,b) => a + b,
//     subtracao: function (a, b) {
//         return a - b;
//     },
// };

// console.log(`2 + a = ${calculadora.somar(2, 3)}`);
// console.log(`2 - 3 = ${calculadora.subtracao(2, 3)}`);
// console.log("Valor da soma atual: " + calculadora.soma);

// let meuObjeto = { } 

// // Discussão da comparação de objetos e referências em javascript

// // console.log(1 == "1")

// // console.log([1] == [1])

// // console.log([1] == "1")

// // var a = [1]
// // var b = [1]

// // console.log(a == b)

// // var c = a

// // console.log(a == c)

// // console.log( a === c)

// // console.log([1] === [1])

// // console.log(a == c)

// // console.log([1] === [1])

// // console.log( a === c)

// // Vetores

// // var v1 = [];

// // console.log(v1.length)

// // v1[0] = 3.4;


// // console.log(v1.length)

// // console.log(v1[100])

// // v1[1000] = "ab"

// // console.log(v1.length)

// // for (let i = 0; i < v1.length; i++) {
// //     console.log(v1[i]);
// // }

// // const nomes = ["Ana Maria", "Antonio", "Rodrigo", "Alex", "Cristina"]

// // const apenasComA = nomes.filter((n) => n.startsWith("A"))

// // console.log("Apenas com A")
// // console.log(apenasComA)

// // const res = nomes.map((n) => n.charAt(0))

// // console.log("Primeiras letras")
// // console.log(res)

// // const todoComecamCom = nomes.every((n) => n.startsWith("A"))

// // console.log("Todos os nomes do vetor começam com A?")
// // console.log(todoComecamCom)


// // const todosFiltradosComecamComA = apenasComA.every((n) => n.startsWith("A"))

// // console.log("A lista de nomes do vetor filtrados começando com A tem todos os itens começando com A?")
// // console.log(todosFiltradosComecamComA)


// // const valores = [1, 2, 3, 4];
// // const soma = valores.reduce((ac, v) => ac + v);

// // console.log(soma)



// //comparação
// // console.log(1 == 1) //true
// // console.log(1 == "1") //true
// // console.log(1 === 1) //true
// // console.log(1 === "1") //false
// // console.log(true == 1) //true
// // console.log(1 == [1]) //true
// // console.log(null == null) //true
// // console.log(null == undefined) //true
// // console.log([] == false) //true
// // console.log([] == []) //false


// // //coerção
// // const n1 = 2
// // const n2 = '3'
// // //coerção implícita
// // console.log(n1+n2)
// // //coerção explícita
// // const n4 = n1 + Number(n2)
// // console.log(n4)

// // //variável pode ser redeclarada
// // var linguagem = "Javascript"
// // console.log("Aprendendo "+linguagem)

// // var linguagem = "Java"
// // console.log("Aprendendo "+linguagem)

// // var idade = 18
// // console.log(`Oi, ${nome}`)
// // //a variável é içada (do inglês hoist)
// // if (idade >= 18){
// //     var nome = "João"
// //     console.log(`Parabéns, ${nome}. Você já pode dirigir.`)
// // }
// // console.log(`Até mais, ${nome}`)


// // //declarando constantes
// // const nome = "José"
// // const idade = 27
// // //aspas simples e duplas tem o mesmo efeito
// // const sexo = "M"
// // const endereco = 'Rua K, 12'
// // const outro_end = "Rua Olho D'Água, 38"
// // //declarando variáveis
// // //let: variável tem o escopo de bloco
// // let a = 2
// // let b = "abc"
// // //var: escopo da função onde é criado ou global
// // var c = 2 + 3
// // var d = "abcd"

// // console.log(a)
// // console.log(b)
// // console.log(c, d)
