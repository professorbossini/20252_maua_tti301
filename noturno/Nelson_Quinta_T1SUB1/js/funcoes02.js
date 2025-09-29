//Funções anônimas

const dobro = function (n){
    return n*2;
}
const res = dobro(5);
console.log(res)

//Colocar valor padrão para o parâmetro
const triplo = function (n=6){
    return 3*n;
}
console.log(triplo())
console.log(triplo(4))