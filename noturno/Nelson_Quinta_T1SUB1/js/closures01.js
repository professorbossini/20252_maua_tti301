//CLOSURES
//Função pode ser atribuída a uma variável

let umaFuncao = function(){
    console.log("Função armazenada em variável")
}
umaFuncao()

/*função recebe uma FUNÇÃO
como parâmetro
é uma função de alta ordem */
function f (funcao){
    funcao()
}
//função com outra função
function g(){
    function outraFuncao(){
        console.log("Fui criada por g")
    }
    return outraFuncao;
}


f(function (){
    console.log('Estou sendo passada para f')
})

const gResult = g()//Pega a outraFuncao
gResult()//Executa a outraFuncao

g()()//Pega e executa a outraFuncao
f(g)//Pega a outraFuncao
f(g())//Pega e executa a outraFuncao
f(g()())//Erro