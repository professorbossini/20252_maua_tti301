#comentários são feitos com #
#a # tem que estar no começo da linha
#a lingugem YAML não é case sensitive
#mas é boa prática usar maiúsculas para comandos
#e minúsculas para argumentos
#queremos uma imagem com o node versao 20
FROM node:20

#um diretório no sistema de arquivos do contêiner
#para os comandos a seguir
WORKDIR /app

#copiamos o package.json para poder executar npm install
COPY package.json .

#executamos o npm install
RUN npm install

#copio os demais arquivos
COPY . .

#tornamos o contêiner disponível na porta 5200
EXPOSE 5200

#colocamos o aplicativo em execução
CMD ["node", "index.js"]