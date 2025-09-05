const fs = require("fs");
const abrirArquivo = function(nomeArquivo){
    const exibirConteudo = function(erro, conteudo){
        if(erro){
            console.log(`Deu erro: ${erro}`);
        }else{
            console.log(conteudo.toString());
        }
    };
    fs.readFile(nomeArquivo, exibirConteudo);
};
abrirArquivo("arquivo.txt");