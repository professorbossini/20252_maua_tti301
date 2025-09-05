//Callback Hell
//Inferno de Callback
const fs = require("fs")
const abrirArquivo = function(nomeArquivo){//1
    const exibirConteudo = function(erro, conteudo){//1.1
        if(erro){
            console.log(`Deu erro: ${erro}`);

        }else{
            console.log(conteudo.toString());
            const dobro = +conteudo.toString()*2;
            const finalizar = function(erro){//1.1.1
                if(erro){
                    console.log('Deu erro tentando salvar o dobro')
                }
                else{
                    console.log("Salvou o dobro com sucesso");
                }
            }
            fs.writeFile('dobro.txt',dobro.toString(), finalizar);

        }
    }
    fs.readFile(nomeArquivo, exibirConteudo);
}
abrirArquivo("aquivo.txt")