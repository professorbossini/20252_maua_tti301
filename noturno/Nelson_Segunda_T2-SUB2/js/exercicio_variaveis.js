//Declarando as 3 variáveis
var nome = "Nelson";
let idade = 30;
const curso = "NodeJS";

//impressão inicial
console.log("Nome: ",nome);
console.log("Idade: ", idade);
console.log("Curso: ", curso);

//Bloco {}
{
    var nome = "Marta";
    let idade = 41;
    const curso = "Java";

    console.log("------BLOCO-----");
    console.log("Nome = ", nome);
    console.log("Idade = ", idade);
    console.log("Curso = ", curso);
}
    console.log("------FORA-----");
    console.log("Nome = ", nome);
    console.log("Idade = ", idade);
    console.log("Curso = ", curso);

//REDeclarando as 3 variáveis
var nome = "Thaís";
console.log("Nome = ", nome);
idade = 10;
console.log("Idade = ", idade);
//curso = "NodeJS";
console.log("Curso = ", "Dev");
