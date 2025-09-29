//ARROW FUNCTION
// =>
const hello = () => console.log("Hello");
hello();

const dobro = valor => valor * 2;
console.log(dobro(10))

const triplo = (valor) =>{
    return valor * 3;
}
console.log(triplo(5))

const ehPar = n => {
   return n % 2 === 0;
}
console.log(ehPar('10'))