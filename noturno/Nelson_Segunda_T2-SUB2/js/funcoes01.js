//Funções
function hello(){
    console.log('Hello')
}
hello()
//REDEFINIR a função HELLO

function hello(nome){
    console.log('Olá, ' + nome)
}
hello('Nelson')

//com mais de um argumento
function soma(a,b){
    return a + b;
}
const res = soma(8,'8')
console.log(res)