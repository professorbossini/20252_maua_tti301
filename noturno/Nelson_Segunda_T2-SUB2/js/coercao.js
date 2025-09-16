const n1 = 2;//Númerico
const n2 = '3';//Texto

//coerção implícita
const n3 = n1 + n2;
console.log(n3);

//coerção explícita
const n4 = n1 + Number(n2);
console.log(n4);