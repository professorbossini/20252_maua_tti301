function eAgora(){
    let cont = 1
    function f1(){
        console.log(cont)
    }
    cont++
    function f2(){
        console.log(cont)
    }
    return {f1, f2}
}
let eAgoraResult = eAgora()
console.log(eAgoraResult)
eAgoraResult.f1()
eAgoraResult.f2()

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

// let operacao = 'subtracao'
// //const op = calculadora[operacao]
// //console.log(op(2, 3))
// //console.log(op(3, 6))

// console.log(calculadora[operacao](2, 3))
// operacao = 'somar'
// console.log(calculadora[operacao](2, 3))

// console.log(`2 + a = ${calculadora.somar(2, 3)}`);
// console.log(`2 - 3 = ${calculadora.subtracao(2, 3)}`);
// console.log("Valor da soma atual: " + calculadora.soma);

// let meuObjeto = { } 

// // escopo interno e externo

// // function f(){
// //     let nome = 'João'
// //     function g(){
// //         console.log(nome)
// //     }
// //     g()
// // }
// // f()

// function ola(){
//     let nome = 'João'
//     return function(){
//         console.log('Olá ', nome)
//     }
// }

// olaResult = ola()
// olaResult()

// // closure

// //armazenando uma função em uma variável
// let umaFuncao = function () {
//     console.log('Fui armazenenada em uma variável')
// }
// umaFuncao()

// //receber uma função como argumento
// function teste(){
//     console.log('eu sou um teste')
// }
// function f(funcao){
//     funcao()
// }
// teste()
// f(teste)
// f(umaFuncao)
// f(function (){
//     console.log('Estou sendo passada para f')
// })

// //uma função pode retornar outra função
// function g(){
//     function outraFuncao(){
//         console.log('Fui criada por g.')
//     }
//     return outraFuncao
// }

// gResult = g()
// console.log(gResult)
// gResult()
// g()()

// f(g)
// f(g())
//f(g()())
//f(1)

// //arrow functions
// const hello = () => console.log('hello')
// hello()

// const dobro = (n) => n * 2
// console.log(dobro(2))

// const triplo = (n) => {
//     return n * 3
// }
// console.log(triplo(4))

// const ehPar = (n) => {
//     //com várias linhas
//     if(n%2===0){
//         return true
//     } else {
//         return false
//     }
// }
// console.log(ehPar(10))
// console.log(ehPar(11))

// const ehPar2 = (n) => n%2===0
// console.log(ehPar2(10))
// console.log(ehPar2(11))


// // funções

// function hello(){
//     console.log('Oi')
// }
// hello()

// function hello(nome){
//     console.log(`Olá, ${nome}`)
// }
// hello('Pedro')

// function soma(a, b){
//     return a + b
// }
// res = soma(2, 3)
// console.log(res)

// console.log(soma(2, 4))

// console.log(soma('2', '3'))

// // funções anônimas
// const dobro = function(n){
//     return n * 2
// }
// console.log(dobro(3))

// // valores default para parâmetros
// const triplo = function(n=5){
//     return 3*n
// }
// console.log(triplo(3))
// console.log(triplo())

// const quadruplo = function(n){
//     return dobro(dobro(n))
// }
// console.log(quadruplo(4))

// let quintuplo = triplo(triplo())
// console.log(quintuplo)

// const fatorial = function(n){
//     if (n == 0){
//         return 1
//     } else {
//         return n*fatorial(n-1)
//     }
// }
// console.log('fatorial 5 =', fatorial(5))



// const v10 = []
// console.log(v10)
// v10[0] = 1
// v10[1] = 2
// console.log(v10)
// v10 = []

// // Vetores

// var v1 = [];

// console.log(v1.length)

// v1[0] = 3.4;


// console.log(v1.length)

// console.log(v1[100])

// v1[1000] = "ab"

// console.log(v1.length)

// for (let i = 0; i < v1.length; i++) {
//     console.log(v1[i]);
// }

const nomes = ["Ana Maria", "Antonio", "Rodrigo", "Alex", "Cristina"]

// const apenasComA = nomes.filter((n) => n.startsWith("A"))

// console.log("Apenas com A")
// console.log(apenasComA)

// const res = nomes.map((n) => n.charAt(0))

// console.log("Primeiras letras")
// console.log(res)

// const todoComecamCom = nomes.every((n) => n.startsWith("A"))

// console.log("Todos os nomes do vetor começam com A?")
// console.log(todoComecamCom)


// const todosFiltradosComecamComA = apenasComA.every((n) => n.startsWith("A"))

// console.log("A lista de nomes do vetor filtrados começando com A tem todos os itens começando com A?")
// console.log(todosFiltradosComecamComA)


// const valores = [1, 2, 3, 4];
// const soma = valores.reduce((ac, v) => ac + v);

// console.log(soma)

// Discussão da comparação de objetos e referências em javascript

// console.log(1 == "1")

// console.log([1] == [1])

// console.log([1] == "1")

// var a = [1]
// var b = [1]

// console.log(a == b)

// var c = a

// console.log(a == c)

// console.log( a === c)

// console.log([1] === [1])

// console.log(a == c)

// console.log([1] === [1])

// console.log( a === c)

// Vetores

// var v1 = [];

// console.log(v1.length)

// v1[0] = 3.4;


// console.log(v1.length)

// console.log(v1[100])

// v1[1000] = "ab"

// console.log(v1.length)

// for (let i = 0; i < v1.length; i++) {
//     console.log(v1[i]);
// }

// const nomes = ["Ana Maria", "Antonio", "Rodrigo", "Alex", "Cristina"]

// const apenasComA = nomes.filter((n) => n.startsWith("A"))

// console.log("Apenas com A")
// console.log(apenasComA)

// const res = nomes.map((n) => n.charAt(0))

// console.log("Primeiras letras")
// console.log(res)

// const todoComecamCom = nomes.every((n) => n.startsWith("A"))

// console.log("Todos os nomes do vetor começam com A?")
// console.log(todoComecamCom)


// const todosFiltradosComecamComA = apenasComA.every((n) => n.startsWith("A"))

// console.log("A lista de nomes do vetor filtrados começando com A tem todos os itens começando com A?")
// console.log(todosFiltradosComecamComA)


// const valores = [1, 2, 3, 4];
// const soma = valores.reduce((ac, v) => ac + v);

// console.log(soma)



//comparação
// console.log(1 == 1) //true
// console.log(1 == "1") //true
// console.log(1 === 1) //true
// console.log(1 === "1") //false
// console.log(true == 1) //true
// console.log(1 == [1]) //true
// console.log(null == null) //true
// console.log(null == undefined) //true
// console.log([] == false) //true
// console.log([] == []) //false


// //coerção
// const n1 = 2
// const n2 = '3'
// //coerção implícita
// console.log(n1+n2)
// //coerção explícita
// const n4 = n1 + Number(n2)
// console.log(n4)

// //variável pode ser redeclarada
// var linguagem = "Javascript"
// console.log("Aprendendo "+linguagem)

// var linguagem = "Java"
// console.log("Aprendendo "+linguagem)

// var idade = 18
// console.log(`Oi, ${nome}`)
// //a variável é içada (do inglês hoist)
// if (idade >= 18){
//     var nome = "João"
//     console.log(`Parabéns, ${nome}. Você já pode dirigir.`)
// }
// console.log(`Até mais, ${nome}`)


// //declarando constantes
// const nome = "José"
// const idade = 27
// //aspas simples e duplas tem o mesmo efeito
// const sexo = "M"
// const endereco = 'Rua K, 12'
// const outro_end = "Rua Olho D'Água, 38"
// //declarando variáveis
// //let: variável tem o escopo de bloco
// let a = 2
// let b = "abc"
// //var: escopo da função onde é criado ou global
// var c = 2 + 3
// var d = "abcd"

// console.log(a)
// console.log(b)
// console.log(c, d)
