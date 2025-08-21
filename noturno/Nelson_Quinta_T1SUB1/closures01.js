// função pode ser atribuída a uma variável
let umaFuncao = function() {
    console.log('Fui armazenada em uma variável');
}
umaFuncao();

/*
f recebe uma função como parâmetro
Logo é uma função de alta ordem
*/
function f(funcao){
    funcao()
}

//função g retorna outra função
//é uma função de alta ordem
function g(){
    function outraFuncao(){
        console.log("Fui criada por g");
    }
    return outraFuncao;
}
//g() só pega a função dentro de g, 
// mas não executa a outraFuncao
g()
//gResult receber a função outraFuncao
const gResult = g()
gResult()//imprime / executa outraFuncao
g()() //imprime / executa diretamente

//Passar uma função como argumento
f(function(){
    console.log('Estou sendo passada para f')
}
)
//Passando g para f
f(g)//recebe a outraFuncao
f(g())//imprime o conteúdo da outraFuncao
//f(g()())//f(undefined)
//f(1)//1 não é uma função