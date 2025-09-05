setTimeout(function(){
    console.log('dentro da timeout',0)
})
const a = new Date().getTime() + 1000

while(new Date().getTime()<= a);
console.log('fora da timeout')