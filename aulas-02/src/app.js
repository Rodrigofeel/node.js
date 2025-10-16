const express = require("express");
const routes = require("./routes");

//Cria uma classe que organiza o servidor. Isso é bom para projetos maiores, porque separa a lógica de inicialização do servidor.


class App {  
    constructor() {
        this.server = express();  // cria a instância do servidor Express
        this.middlewares(); // configura middlewares
        this.routes(); // adiciona as rotas

    }
    middlewares() {
        this.server.use(express.json()); // middleware para o Express entender JSON
    }

    routes() {
        this.server.use(routes); // adiciona todas as rotas definidas no arquivo routes.js

    }
}


module.exports = new App().server; // exporta a instância do servidor já configurada