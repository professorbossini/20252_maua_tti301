setTimeout(function(){
    console.log("DENTRO DA TIMEOUT", 0)
})
const a = new Date().getTime() + 1000
while(new Date().getTime() <=a);
console.log('fora da timeout')