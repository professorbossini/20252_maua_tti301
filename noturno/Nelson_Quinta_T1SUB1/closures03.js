function ola(){
    let nome = 'João';
    return function(){
        console.log('Olá, João');
    }
}
let olaResult = ola();
//-------
olaResult();

//agora com parâmetros
function saudacoesFactory(saudacao, nome){
    return function(){
        console.log(saudacao +', '+ nome);
    }
}
//atribuindo resultado da função saudacoes para variavel
let olaJoao = saudacoesFactory('Olá','João');
let tchauJoao = saudacoesFactory('Tchau','João');
//------
olaJoao();
tchauJoao();