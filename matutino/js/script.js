//let idade = 18
//hoist: içamento
//console.log(`Oi, ${nome}`)
//if(idade >= 18){
//  let nome = "João"
//  console.log("Você pode dirigir, " + nome)
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

//const n1 = 2;
//const n2 = '3';
 // Coerção implítica - o javascript oferece 
//const n3 = n1 + n2;

//console.log(n3);

// Coerção explícita: eu informo qual o tipo de conversão que desejo

//n4 = n1 + Number(n2);
//console.log (n4)

// O problema das conversões implícitas
//console.log ([] == [])
// Aqui compara objetos sem cast
//console.log ([1] == [1])
// Aqui realiza cast
//console.log (1 == [1])

//console.log ([1] === [1])
// Aqui realiza cast
//console.log (1 === [1])

//a1 = [1]
//a2 = a1
//console.log(a1 === a2)

v1 = [];

v1[0] = 3.4;
v1[10] = 2

console.log(v1.length)

v1[1000] = "ficou longo";

console.log(v1.length)

v2 = [2, "abc", true]

console.log(v2.length)

//for (let i = 0; i < v2.length; i++){
// console.log(v2[i])
//}

//for (let i = 0; i < v1.length; i++){
// console.log(v1[i])
//}

v2[10000] = "mais longo ainda"

//for (let i = 0; i < v2.length; i++){
// console.log(v2[i])
//}

//const nomes = ["Ana Maria", "Antonio", "Rodrigo", "Alex", "Cristina"];

//const apenasComA = nomes.filter((n) => n.startsWith("A"));

//console.log(apenasComA);

//const res = nomes.map((nome) => nome.charAt(0));

//console.log(res);

//const todosComecamComA = nomes.every((n) => n.startsWith("A"));

//console.log(todosComecamComA);

//const agoraTodosComecamCom = apenasComA.every((n) => n.startsWith("A"));

//console.log(agoraTodosComecamCom);

//const valores = [1, 2, 3, 4];
//const soma = valores.reduce((ac, v) => ac + v);
//console.log(soma);

//function hello (){
// console.log ('Oi')
//}
//hello()

// A última definição é a que será usada
//cuidado, aqui redefinimos a função sem parâmetros
//function hello (nome){
// console.log ('Hello, ' + nome)
//}
//hello('Pedro')

//function soma (a, b) {
// return a + b;
//}

//const res = soma (2, 3)
//console.log (res)

//const dobro = function (n) {
//  return n * 2;
//};

//const res = dobro(4);
//console.log(res);

//const triplo = function (n = 5) {
//  return 3 * n;
//};

//console.log(triplo());
//console.log(triplo(10));

// A referencia não pode ser utilizada antes de ser criada
// É diferente da função
// hello();

const hello = () => console.log("Hello");
hello();

const dobro = (valor) => valor * 2;
console.log(dobro(10));
const triplo = (valor) => {
  // Sem o return o valor não é recuperado quando há declaração do bloco para o corpo da função utilizando chaves
  // valor * 3;
  return valor * 3;
};
console.log(triplo(10));

const ehPar = (n) => {
  // n % 2 === 0;
  return n % 2 === 0;
};

const ehParSemChaves = (n) =>  n % 2 === 0 ; 
console.log(ehPar(10));

console.log(ehParSemChaves(10));
