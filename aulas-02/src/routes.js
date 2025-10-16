import { Router } from "express"; //Importa o Router do Express, que é como um mini-servidor que você pode usar para organizar rotas separadamente do servidor principal.
import customers from "./app/controllers/CustomersController.js"; //Importa o controlador de clientes

const routes = new Router();

routes.get("/customers", customers.index); // Rota para listar todos os clientes
routes.get("/customers/:id", customers.show); // Rota para mostrar um cliente específico pelo ID
routes.post("/customers", customers.create); // Rota para criar um novo cliente
routes.put("/customers/:id", customers.update); // Rota para atualizar um cliente existente pelo ID
routes.delete("/customers/:id", customers.delete); // Rota para deletar um cliente pelo ID


export default routes; // Exporta esse Router para ser usado no app.js