let calculadora = {
  //pode ser utilizada a construção com arrow function
  somar: (a, b) => a + b,
  //e com declaração de função comum também
  subtrair: function (a, b) {
  return a - b;
  },
  soma: 2,

};
  
// As chamadas funcionam da mesma forma
console.log(`2 + 3 = ${calculadora.somar(2, 3)}`);

console.log(`2 - 3 = ${calculadora.subtrair(2, 3)}`);

console.log(calculadora.soma);


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