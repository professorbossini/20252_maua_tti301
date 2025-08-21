//funções
function hello (){
    console.log('Oi')
}
hello()

//Redefinir a função
function hello (nome){
    console.log('Hello, '+ nome)
}
hello('Pedro')

//função soma
function soma (a, b){
    return a+b;
}
const res = soma(2,3)
console.log(res)