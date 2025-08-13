//declarando constantes
const nome = "Pedro";
const idade = 41;

const endereco = 'Rua aaaa, 999';

//declaração com let
let a = 2;
let b = "aaa";

console.log("a = ", a);

//declaraçao com var
var c = 5;
var d = "bbbb";
console.log("d = ",d);

var linguagem = "JavaScript";
console.log("Aprendendo "+ linguagem);

//variável pode ser REDECLARADO
var linguagem = "Java";
console.log("Já sei "+ linguagem);

//não está restrito ao bloco
var numero = 20;
console.log(`Parabéns você ganhou uma viagem para ${cidade}`);
//bloco if
if(numero > 17){
    var cidade = "São Paulo";
    console.log(`Parabéns você ganhou uma viagem para ${cidade}`);
}
console.log(`Parabéns você ganhou uma viagem para ${cidade}`);