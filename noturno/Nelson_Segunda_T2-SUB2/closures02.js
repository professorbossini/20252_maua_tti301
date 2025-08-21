//escopo léxico
function f(){
    let nome = 'Carolina'//escopo externo
    function g(){
        console.log(nome);//escopo interno
    }
    g()

}
f()