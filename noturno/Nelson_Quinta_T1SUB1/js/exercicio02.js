// Reutilizamos a mesma função de promise do Exercício 1
function buscarDadosUsuario(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id === 123) {
        resolve({
          nome: "João Silva",
          email: "joao.silva@exemplo.com"
        });
      } else {
        reject("Usuário não encontrado.");
      }
    }, 2000);
  });
}

// Função assíncrona que usa async/await
async function exibirDadosUsuario(id) {
  try {
    const dados = await buscarDadosUsuario(id);
    console.log("Dados do usuário ", id, " : ", dados);
  } catch (erro) {
    console.log("Usuário ",id," - Erro:", erro);
  }
}

// Chamadas da função
exibirDadosUsuario(123);
exibirDadosUsuario(456);

console.log("Aguardando a resposta das requisições...");