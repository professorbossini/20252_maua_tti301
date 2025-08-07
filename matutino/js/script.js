
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
const n1 = 2;
const n2 = '3';

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

function soma (a, b) {
 return a + b;
}

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
const hello = () => console.log("Hello");
hello();

const dobro = (valor) => valor * 2;

console.log(dobro(10));

const triplo = (valor) => {
 return valor * 3;
};

console.log(triplo(10));

//const ehPar = (n) => {
//return n % 2 === 0;
//};

const ehPar = (n) => n % 2 === 0;
console.log(ehPar(10));