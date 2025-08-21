const axios = require("axios");
 //sua chave aqui
 const appid = "24a68bec87be9010abbd4637c219c94f";
 //cidade desejada
 const q = "Itu";
 //unidade de medida de temperatura
 const units = "metric";
 //idioma
 const lang = "pt_BR";
 //quantidade de resultados
 const cnt = "10"
 const url = `https://api.openweathermap.org/data/2.5/forecast?q=${q}&units=${units}&appid=${appid}&lang=${lang}&cnt=${cnt}`;

axios
  .get(url)
  .then((res) => {
    console.log(res);
    return res.data;
  })
  .then((res) => {
    console.log(res.cnt);
    return res;
  })
  .then((res) => {
    console.log("aqui", res);
    return res['list'];
  })
  .then((res) => {
    for (let previsao of res) {
      console.log(`
        ${new Date(+previsao.dt * 1000).toLocaleString()},
        ${'Min: ' + previsao.main.temp_min}\u00B0C,
        ${'Max: ' + previsao.main.temp_max}\u00B0C,
        ${'Hum: ' + previsao.main.humidity}%,
        ${previsao.weather[0].description}

        `);
    }
    return res;
  })
  .then((res) => {
    const lista = res.filter(r => r.main.feels_like >= 30);
    console.log (`${lista.length} previsões têm
      percepção humana de temperatura acima de 30
      graus`)
      
  });






// Leitura do arquivo utilizando Promises

// Importa a versão do 'fs' que retorna Promises usando asinc/await
// const fs = require('fs').promises;

// async function calcularMultiplos(nomeArquivo) {
//   try {
//     console.log('Iniciando o processo...');

//     // 1. Ler o arquivo original
//     const conteudoInicial = await fs.readFile(nomeArquivo);
//     console.log(`Conteúdo do ${nomeArquivo}: ${conteudoInicial.toString()}`);

//     // 2. Calcular e salvar o dobro
//     const dobro = Number(conteudoInicial.toString()) * 2;
//     await fs.writeFile('dobro.txt', dobro.toString());
//     console.log('Salvou o dobro com sucesso');

//     // 3. Ler o arquivo do dobro
//     const conteudoDobro = await fs.readFile('dobro.txt');
//     console.log(`Conteúdo do dobro.txt: ${conteudoDobro.toString()}`);

//     // 4. Calcular e salvar o triplo
//     const triplo = Number(conteudoDobro.toString()) * 3;
//     await fs.writeFile('triplo.txt', triplo.toString());
//     console.log('Salvou o triplo com sucesso');

//   } catch (erro) {
//     console.log(`Ocorreu um erro geral no processo: ${erro}`);
//   }
// }

// calcularMultiplos('arquivo.txt');





// function fatorial(n) {
//   if (n < 0) return Promise.reject("Valor não pode ser negativo");
//     let res = 1;
//     for (let i = 2; i <= n; i++) res *= i;
//       return Promise.resolve(res);
// }

// async function chamadaComAwait() {
//    //note que não há paralelismo implícito
//    //somente haverá paralelismo se a função chamada utilizar explicitamente
//    try {
//     const f1 = await fatorial(5);
//     console.log(f1);
 
//     const f2 = await fatorial(-1);
//     console.log(f2);
 
//    } catch (erro) {
//     console.log(erro);
    
//    }
// }

// chamadaComAwait();




// function chamadaComThenCatch() {
//    fatorial(5)
//    .then((res) => console.log(res))
//    .catch((res) => console.log(res));
  
//    fatorial(-1)
//    .then((res) => console.log(res))
//    .catch((res) => console.log(res));
//    }
// console.log("antes");   
// chamadaComThenCatch();
// console.log("depois");   




// async function hello(nome) {
//   return "Oi, " + nome;
// }
// const boasVindas = hello("João");
// console.log(boasVindas);
// boasVindas.then((res) => console.log(res));



// function calculoRapidinho (numero){
//   return Promise.resolve((numero * (numero + 1)) / 2);
// }
  
// console.log("Antes")
// calculoRapidinho (10).then(resultado =>{
//     console.log (resultado)
// })
// //Executa primeiro, mesmo que a promise já esteja fullfilled
// console.log('Depois...')



// function calculoRapidinho(numero) {
//    return numero >= 0
//   ? Promise.resolve((numero * (numero + 1)) / 2)
//   : Promise.reject("Somente valores positivos, por favor");
//   }
  
// console.log("Antes no código");  
// calculoRapidinho(10)
//   .then((resultado) => {
//   console.log(resultado);
// })
//   .catch((err) => {
//   console.log(err);
//   });
// calculoRapidinho(-1)
//   .then((resultado) => {
//   console.log(resultado);
// })
//   .catch((err) => {
//   console.log(err);
//   });
//   console.log("Depois no código");  
//   console.log("esperando...");


// function calculoDemorado(numero) {
//    return new Promise(function (resolve, reject) {
//      let res = 0;
//      for (let i = 1; i <= numero; i++) {
//        res += i;
      
//     }
//      resolve(res);
    
//   });
  
// }
// calculoDemorado(1000000).then((resultado) => {
//    console.log(resultado)
// })




// const fs = require('fs')

// const abrirArquivo = function (nomeArquivo) {
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


// abrirArquivo('arquivo.txt')






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







// const axios = require("axios");
//  //sua chave aqui
//  const appid = "sua_chave_aqui";
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









// function fatorial(n) {
//   if (n < 0) return Promise.reject("Valor não pode ser negativo");
//     let res = 1;
//     for (let i = 2; i <= n; i++) res *= i;
//       return Promise.resolve(res);
// }











  











// Leitura do arquivo utilizando Promises

// Importa a versão do 'fs' que retorna Promises usando asinc/await
// const fs = require('fs').promises;

// async function calcularMultiplos(nomeArquivo) {
//   try {
//     console.log('Iniciando o processo...');

//     // 1. Ler o arquivo original
//     const conteudoInicial = await fs.readFile(nomeArquivo);
//     console.log(`Conteúdo do ${nomeArquivo}: ${conteudoInicial.toString()}`);

//     // 2. Calcular e salvar o dobro
//     const dobro = Number(conteudoInicial.toString()) * 2;
//     await fs.writeFile('dobro.txt', dobro.toString());
//     console.log('Salvou o dobro com sucesso');

//     // 3. Ler o arquivo do dobro
//     const conteudoDobro = await fs.readFile('dobro.txt');
//     console.log(`Conteúdo do dobro.txt: ${conteudoDobro.toString()}`);

//     // 4. Calcular e salvar o triplo
//     const triplo = Number(conteudoDobro.toString()) * 3;
//     await fs.writeFile('triplo.txt', triplo.toString());
//     console.log('Salvou o triplo com sucesso');

//   } catch (erro) {
//     console.log(`Ocorreu um erro geral no processo: ${erro}`);
//   }
// }

// calcularMultiplos('arquivo.txt');


// function fatorial(n) {
//    if (n < 0) return Promise.reject("Valor não pode ser negativo");
//    let res = 1;
//    for (let i = 2; i <= n; i++) res *= i;
//    return Promise.resolve(res); 
// }



// function chamadaComThenCatch() {
//    fatorial(5)
//    .then((res) => console.log(res))
//    .catch((res) => console.log(res));
  
//    fatorial(-1)
//    .then((res) => console.log(res))
//    .catch((res) => console.log(res));
  
// }
// chamadaComThenCatch();







// async function chamadaComAwait() {
//    //note que não há paralelismo implícito
//    //somente haverá paralelismo se a função chamada utilizar explicitamente
//    try {
//      const f1 = await fatorial(5);
//      console.log(f1);
//      const f2 = await fatorial(-1);
//      console.log(f2);
//     } catch (erro) {
//       console.log(erro);
//    }
// }

// await chamadaComAwait();



// function demorada(tempo){
//   console.log(`demorada: ${tempo}`)
//   const atualMaisTempo = new Date().getTime() + tempo
//   while(new Date().getTime() <= atualMaisTempo);
//   const d = 8 + 4
//   return d
// }
// const a = 2 + 5
// const b = 5 + 9
// setTimeout(() => {
//   const d = demorada(2000)
//   console.log(`demorada(2000) terminou: ${d}`)
// }, 2000)
// setTimeout(() => {
//   const d = demorada(1000)
//   console.log(`demorada(1000) terminou: ${d}`)
// }, 1000)
// const e = 2 + a + b
// console.log(`e: ${e}`)

// const a = 2 + 7
// const b = 5
// console.log(a + b)

// console.log('Eu primeiro')
// console.log('Eu agora...')
// console.log("Sempre a última...")
// let calculadora = {
//   //pode ser utilizada a construção com arrow function
//   somar: (a, b) => a + b,
//   //e com declaração de função comum também
//   subtrair: function (a, b) {
//   return a - b;
//   },
//   soma: 2,

// };
  
// // As chamadas funcionam da mesma forma
// console.log(`2 + 3 = ${calculadora.somar(2, 3)}`);

// console.log(`2 - 3 = ${calculadora.subtrair(2, 3)}`);

// console.log(calculadora.soma);


// let concessionaria = {
//    cnpj: "00011122210001-45",
//    endereco: {
//     logradouro: "Rua A",
//     numero: 10,
//     bairro: "Vila J",
//    },
//    veiculos: [
//    {
//     marca: "Ford",
//     modelo: "Ecosport",
//     anoDeFabricacao: 2018,
//    },
//    {
//     marca: "Chevrolet",
//     modelo: "Onix",
//     anoDeFabricacao: 2020,
//    },
//    {
//     marca: "Volkswagen",
//     modelo: "Nivus",
//     anoDeFabricacao: 2020,
//    },
//   ],
// };

// for (let veiculo of concessionaria.veiculos) {
//   console.log(`Marca: ${veiculo.marca}`);
//   console.log(`Modelo: ${veiculo.modelo}`);
//   console.log(`Ano de Fabricação: ${veiculo.anoDeFabricacao}`);
// //  console.log(`Capacidade da bateria: ${veiculo.kw}`);
// //  console.log(`Capacidade do tanque: ${veiculo.litros}`);
// //  console.log(`Autonomia: ${veiculo.autonomia}`);

// }

// let pessoa = {
//   nome : "João",
//   idade: 17,

// }

// // Acessando propriedades com o operador ponto
// console.log(pessoa.nome);
// // e com a sintaxe de []
// console.log("Tenho " + pessoa["idade"] + " anos");


// let pessoaComEndereco = {
//   nome: 21,
//   endereco: {
//     logradouro: "Rua B",
//     numero: 121, 
//   },
// };

// console.log(
//   `Sou ${pessoaComEndereco.nome},
//   tenho ${pessoaComEndereco.idade} anos
//   e moro na rua ${pessoaComEndereco.endereco["logradouro"]}
//     número ${pessoaComEndereco.endereco.numero}
//   }`
// );




// function eAgora(){
//   let cont = 1
//   function f1(){
//     console.log(cont)
//   }
//   cont++
//   function f2(){
//     console.log(cont)
//   }
//   cont++
//   return {f1, f2}
//   cont++
// }

// let eAgoraResult = eAgora()
// eAgoraResult.f1()
// eAgoraResult.f2()
// function saudacoesFactory(saudacao, nome){
//   let a
//   return function(){
//     console.log(`${saudacao}, ${nome}`)
//   }
// }
// let olaJoao = saudacoesFactory('Olá', 'João')
// let tchauJoao = saudacoesFactory('Tchau', 'João')
// olaJoao()
// tchauJoao()


// function ola(){
//   let nome = 'João'
//   return function(){
//     console.log(`Olá, ${nome}`)
//   }
// }

// let olaResult = ola()
// olaResult()

// function f(){
//   let nome = 'João'
//   function g(){
//     console.log(nome)
//   }
//   g()
// }
// f()


// let umaFuncao = function(){
//   console.log('Fui armazenada em uma variável')
// }
// umaFuncao()

// function f(funcao){
//   return funcao() //está chamando a outra funcao
// }


// function g(){
//   function outraFuncao(){
//     console.log('Fui criada por g')
//     function exibirA(){
//       console.log("A")
//       return () => console.log("B")
//     }
//     return exibirA()
//   }
//   return outraFuncao
// }

// f(g())()

//faça funcionar e exibir a letra a
//faça funcionar e exibir a letra b, mantendo todo o resto
// g()()()

// const gResult = g()
// gResult()

// f(function(){
//   console.log("Estou sendo passada para f")
//   return undefined
// })



// class Pessoa{
//   public void andar(){

//   }

//   // var teste = andar;
//   Runnable teste = () -> {}
// }
//let idade = 18
//hoist: içamento
//console.log(`Oi, ${nome}`)/
//if(idade >= 18){
//  let nome = "João"
//  console.log("Você pode dirigir, " + nome)/
//}
//console.log("Até mais, " + nome)
// var linguagem = 'Javascript'
// console.log("Aprendendo " + linguagem)
// linguagem = 'Java'
// console.log('Aprendendo ' + linguagem)
// var nome = 'José'
// console.log(nome)
// nome = 'José da Silva'
// console.log(nome)
// console.log(typeof(nome))

//String nome;
// let nome = 'José'
// console.log(nome)
// console.log(typeof(nome))
// nome = 'José da Silva'
// console.log(nome)
// nome = 2
// console.log(typeof(nome))
// console.log(nome)
// //const, let e var
// const nome = 'José'
// console.log(nome)
// //não vale reatribuir
// nome = 'José da Silva'
// console.log(nome)

// Aula de 07/08/2025
// Coerção
// const n1 = 2;
// const n2 = '3';

//coerção implícita de n1, concatenação acontece
//const n3 = n1 + n2;
//console.log(n3);

// Coerção explícita: trate n2 como número
//const n4 = n1 + Number (n2)
//console.log(n4);

// Comparações
//console.log ([] == [])
//console.log ([1] == [1])
//console.log (1 == [1])

//console.log ([1] === [1])
//console.log (1 === [1])

// vetores
//v1 = [];

//v1[0] = 3.4;
//v1[10] = 2;
//v1[2] = "abc";

//console.log(v1.length);

//v1[1000] = "longo";

//console.log(v1.length);

//v2 = [2, "abc", true];

//for (let i = 0; i < v1.length; i++){
//  console.log(v1[i]);
//}

//console.log(v1[10000]);

// Métodos de vetores
//const nomes = ["Ana Maria", "Antonio", "Rodrigo", "Alex", "Cristina"];

//console.log(nomes);

//const apenasComA = nomes.filter((n) => n.startsWith("A"));

//console.log(apenasComA);

//const todosComecamComA = nomes.every((n) => n.startsWith("A"));

//console.log(todosComecamComA);

//const nesseTodosComecamComA = apenasComA.every((n) => n.startsWith("A"));

//console.log(nesseTodosComecamComA);

// O primeiro argumento do reduce é um acumulador e o segundo é o item atual do vetor
//const valores = [1, 2, 3, 4];
//const soma = valores.reduce((ac, v) => ac + v);
//console.log(soma);

// Funções 

// Definição de uma função
//function hello (){
//  console.log ('Oi')
//}

//hello()

// Redefinição da função
//cuidado, aqui redefinimos a função sem parâmetros
//function hello (nome){
// console.log ('Hello, ' + nome)
//}
// Todas as chamadas passam a usar a última definição
//hello()

//hello("Pedro")

// function soma (a, b) {
//  return a + b;
// }

//const res = soma (2, 3)

// console.log(res)

//const dobro = function (n) {
// return n * 2;
//};
//const res = dobro(4);
//console.log(res);

// Uso de valores padrão
//valor padrão para o parâmetro
//const triplo = function (n = 5) {
// return 3 * n;
//};

// console.log(triplo())
// console.log(triplo(10))

// Não é possível redefinir a função utilizando o arrow function
// const hello = () => console.log("Hello");
// hello();

// const dobro = (valor) => valor * 2;

// console.log(dobro(10));

// const triplo = (valor) => {
//  return valor * 3;
// };

// console.log(triplo(10));

// //const ehPar = (n) => {
// //return n % 2 === 0;
// //};

// const ehPar = (n) => n % 2 === 0;
// console.log(ehPar(10));