// //escopo interno e externo
// function f(){
//     let nome = 'João'
//     function g(){
//         console.log(nome)
//     }
//     g()
// }
// f()

//closure
// function ola(){
//     let nome = 'João'
//     return function (){
//         console.log(`Olá, ${nome}`)
//     }
// }

// olaResult = ola()
// console.log(olaResult)
// olaResult()

// function saudacaoFactory(saudacao, nome){
//     return function (){
//         console.log(saudacao + ', ' + nome)
//     }
// }
// let olaJoao = saudacaoFactory('Olá', 'João')
// let tchauMaria = saudacaoFactory('Tchau', 'Maria')

// olaJoao()
// tchauMaria()

function eAgora(){
    let cont = 1
    function f1 (){
        console.log(cont)
    }
    cont++
    function f2 (){
        console.log(cont)
    }
    //JSON com duas funções
    return {f1, f2}

}

let eAgoraResult = eAgora()

eAgoraResult.f1()
eAgoraResult.f2()

// //closure
// //armazenando uma funçao em uma variável
// let umaFuncao = function(){
//     console.log("Fui armazenada em uma variável")
// }
// umaFuncao()
// function triplo(n=5){
//     console.log(3 * n)
// }
// //função que recebe e executa outra função
// function f(funcao){
//     funcao()
// }
// f(umaFuncao)
// f(() => console.log(3*2))
// f(function () {
//     console.log('Fui criada nos parênteses de f')
// })
// f(triplo)
// //criar uma função dentro e outra e retornar esta função
// function g(){
//     function outraFuncao(){
//         console.log("Fui criada em g")
//     }
//     return outraFuncao
// }
// gResult = g()
// console.log(gResult)
// gResult()

// g()()

// f(g())




// // arrow functions
// const hello = () => console.log('Hello')
// hello()
// const dobro = (n) => n * 2
// console.log(dobro(10))
// const triplo = (n) => {
//     return n * 3
// }
// console.log(triplo(4))

// //funções anônimas
// const dobro = function (n) {
//     return n * 2
// }
// console.log(dobro(3))

// //ter valores default para os parâmetros
// const triplo = function (n=5){
//     return 3*n
// }
// console.log(triplo(3))
// console.log(triplo())

// const quadruplo = function(n){
//     return 2 * dobro(n)
// }

// console.log(quadruplo(4))






// //funções
// function hello(){
//     console.log('Olá')
// }
// hello()

// function hello(nome){
//     console.log(`Olá, ${nome}`)
// }
// hello('João')

// function soma(a, b){
//     return a + b
// }
// res = soma(2, 3)
// console.log(res)
// console.log(soma(5, 7))
// console.log(soma('2', '3'))

// const v1 = []
// console.log(v1)
// v1[0] = 1
// v1[1] = 2
// console.log(v1)
// v1 = []
// Vetores

// var v1 = [];

// console.log(v1.length);

// v1[0] = 3.4;

// console.log(v1.length);

// console.log(v1[100]);

// v1[1000] = "ab";

// console.log(v1.length);

// for (let i = 0; i < v1.length; i++) {
//   console.log(v1[i]);
// }

// const nomes = ["Ana Maria", "Antonio", "Rodrigo", "Alex", "Cristina"];

// const apenasComA = nomes.filter((n) => n.startsWith("A"));

// console.log("Apenas com A");
// console.log(apenasComA);

// const res = nomes.map((n) => n.charAt(0));

// console.log("Primeiras letras");
// console.log(res);

// const todoComecamCom = nomes.every((n) => n.startsWith("A"));

// console.log("Todos os nomes do vetor começam com A?");
// console.log(todoComecamCom);

// const todosFiltradosComecamComA = apenasComA.every((n) => n.startsWith("A"));

// console.log(
//   "A lista de nomes do vetor filtrados começando com A tem todos os itens começando com A?"
// );
// console.log(todosFiltradosComecamComA);

// const valores = [1, 2, 3, 4];
// const soma = valores.reduce((ac, v) => ac + v);

// console.log(soma);

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
