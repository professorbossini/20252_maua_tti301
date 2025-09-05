async function hello(nome) {
return "Oi, " + nome;
}
const boasVindas = hello("João");
console.log(boasVindas);
boasVindas.then((res) => console.log(res));