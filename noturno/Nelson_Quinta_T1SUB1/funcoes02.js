//Funções anônimas
/*
function hello (nome){
}
*/
const dobro = function (n){
    return n * 2;
};

const res = dobro(4);
console.log(res);

//parâmetro com valor padrão
const triplo = function (n = 5){
    return 3 * n;
};
console.log('Sem enviar parâmetro');
console.log(triplo());
console.log('Enviando parâmetro');
console.log(triplo(10));