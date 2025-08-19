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

var v1 = [];

console.log(v1.length)

v1[0] = 3.4;


console.log(v1.length)

console.log(v1[100])

v1[1000] = "ab"

console.log(v1.length)

for (let i = 0; i < v1.length; i++) {
    console.log(v1[i]);
}

const nomes = ["Ana Maria", "Antonio", "Rodrigo", "Alex", "Cristina"]

const apenasComA = nomes.filter((n) => n.startsWith("A"))

console.log("Apenas com A")
console.log(apenasComA)

const res = nomes.map((n) => n.charAt(0))

console.log("Primeiras letras")
console.log(res)

const todoComecamCom = nomes.every((n) => n.startsWith("A"))

console.log("Todos os nomes do vetor começam com A?")
console.log(todoComecamCom)


const todosFiltradosComecamComA = apenasComA.every((n) => n.startsWith("A"))

console.log("A lista de nomes do vetor filtrados começando com A tem todos os itens começando com A?")
console.log(todosFiltradosComecamComA)


const valores = [1, 2, 3, 4];
const soma = valores.reduce((ac, v) => ac + v);

console.log(soma)



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
