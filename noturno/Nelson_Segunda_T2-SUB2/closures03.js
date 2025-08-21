//closures
function ola(){
    let nome = 'Carla'
    return function(){
        console.log ('Olá, Carla')
    }
}
ola()//Pega a function()
let olaResult = ola()//Pega a function()
olaResult()//executa a function

function saudacoesFactory(saudacao, nome){
    return function(){
        console.log(saudacao + ', '+ nome)
    }
}
let olaJoao = saudacoesFactory('Oi', 'João')
let tchauJoao = saudacoesFactory('Tchau', 'João')
olaJoao()
tchauJoao()