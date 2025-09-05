//setTimeout
function demorada(){
    const atualMais2Segundos = new Date().getTime() + 2000
    while (new Date().getTime() <= atualMais2Segundos);
    const d = 10
    return d
}
const a = 2
const b = 6
setTimeout(function(){
    const d = demorada()
    console.log(d)
},500)
const e = a+b
console.log(e)