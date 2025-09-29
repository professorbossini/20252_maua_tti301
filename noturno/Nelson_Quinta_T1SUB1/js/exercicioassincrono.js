//Exiba no console a mensagem "Início da execução síncrona do script.".
console.log('Inicio da execução síncrona do script')

/*
Chame a função
 setTimeout, passando uma função de callback que exibirá no console a mensagem "Esta mensagem foi exibida de forma assíncrona.".
 Defina o tempo de espera para 2000 milissegundos (2 segundos).
*/
setTimeout(function(){
    console.log('Esta mensagem foi exibida de forma assíncrona.')
},2000)

/*
Imediatamente após a chamada
 setTimeout, exiba no console a mensagem "Fim da execução síncrona do script.".
*/
console.log('Fim da execução síncrona do script')