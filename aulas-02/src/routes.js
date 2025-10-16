const { Router } = require('express'); //Importa o Router do Express, que é como um mini-servidor que você pode usar para organizar rotas separadamente do servidor principal.
const routes = new Router();

const customers = require("./app/controllers/CustomersController"); //Importa o controlador de clientes

routes.get("/customers", customers.index); // Rota para listar todos os clientes
routes.get("/customers/:id", customers.show); // Rota para mostrar um cliente específico pelo ID
routes.post("/customers", customers.create); // Rota para criar um novo cliente
routes.put("/customers/:id", customers.update); // Rota para atualizar um cliente existente pelo ID
routes.delete("/customers/:id", customers.delete); // Rota para deletar um cliente pelo ID


module.exports = routes; // Exporta esse Router para ser usado no app.js