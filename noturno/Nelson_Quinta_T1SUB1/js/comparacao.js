// == A comparação leva em conta somente os valores envolvidos. Isso quer
//dizer que, caso sejam de tipos diferentes, ocorrerão coerções implícitas, as
//quais nem sempre têm o funcionamento mais intuitivo.
// ===  NÃO realiza coerção

console.log(1 == 1);//V
console.log(1 =='1');//V
console.log(1 === 1);//v
console.log(1 === '1');//f
console.log([] == []);// false
console.log(true == 1);
console.log(true === 1);
