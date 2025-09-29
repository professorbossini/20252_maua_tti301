//Resolução do exercício 01
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
    }, 2000); // Simula um atraso de 2 segundos
  });
}

// Chamada com ID válido
buscarDadosUsuario(123)
  .then((dados) => {
    console.log("Usuário 123 - Dados do usuário:", dados);
  })
  .catch((erro) => {
    console.log("Usuário 123 - Erro:", erro);
  });

// Chamada com ID inválido
buscarDadosUsuario(456)
  .then((dados) => {
    console.log("Usuário 456 - Dados do usuário:", dados);
  })
  .catch((erro) => {
    console.log("Usuário 456 - Erro:", erro);
  });

console.log("Aguardando a resposta das requisições...");