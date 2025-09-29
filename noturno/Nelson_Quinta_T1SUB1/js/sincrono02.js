function demorada(){
    const atualMais2Segundos = new Date().getTime()+2000
    while (new Date().getTime() <= atualMais2Segundos);
    const d= 2+5
    return d
}
const a = 8+2
const b = 3+2
const d = demorada()
const e = a + b
console.log(e)