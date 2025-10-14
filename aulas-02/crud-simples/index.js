// const express = require("express");
// const server = express();

// server.use(express.json());

// let clientes = [
//     {id: 1, name:"rafael", site: "http://rafael.com.br"},
//     {id: 2, name:"matheus", site: "http://matheus.com.br" },
//     {id: 3, name:"amanda", site: "http://amanda.com.br" }
// ];

// // rota de listagem de clientes

// server.get("/clientes", (req, res) => {
//     return res.json(clientes);
// });

// server.get("/clientes/:id", (req, res) => {
//     const id = parseInt(req.params.id);
//     const cliente = clientes.find(item => item.id === id);
    
//      if (!cliente) {
//     return res.status(404).json({ error: "Cliente não encontrado" });
//   }

//   return res.status(200).json(cliente);
// });

// server.post("/clientes", (req, res) => {
//     const {name, site} = req.body;
//     const nextId = clientes[clientes.length - 1].id + 1;

//     const novoCliente = {id: nextId, name, site};

//     clientes.push(novoCliente);

//     return res.status(201).json(novoCliente);
// });


// server.listen (3000, () => console.log("rodando na porta 3000"));

//@tag:nextEditSuggestions

const express = require("express");
const server = express();

server.use(express.json());

let vendas = [
    {id: 1, descricao: "shampoo", quantidade: 3, andamento: "concluido",},
    {id: 2, descricao: "madeira",quantidade: 4, andamento: "conslcuido",},
    {id: 3, descricao: "pote", quantidade: 100, andamento: "concluido",}
];

server.get("/vendas", (req , res) => {
    return res.json(vendas);

});

server.get("/vendas/:id", (req , res) => {
    const id = parseInt(req.params.id); // pegar o id da url e converter para numero
    const venda = vendas.find(item => item.id === id);
    
     if (!venda) {
    return res.status(404).json({ error: "Venda não encontrada" });
  }
  return res.status(200).json(venda);
});

server.post("/vendas", (req, res) => {
    const {descricao, quantidade, andamento} = req.body;
    const nextId = vendas[vendas.length - 1].id + 1;

     const novaVenda = {id: nextId, descricao, quantidade, andamento};

     vendas.push(novaVenda); // adiciona o novo objeto ao array vendas

    return res.status(201).json(novaVenda);
});

server.put("/vendas/:id", (req, res) => {
    const id = parseInt(req.params.id); // recuperar um parametro especifico "id" e converter para numero
    const { descricao, andamento } = req.body; // receber os dados do corpo da requisiçao

    const index = vendas.findIndex(item => item.id === id) //localizar o indice do objeto que quero alterar 
    const status =  index >= 0 ? 200 : 404; // se o indice for maior ou igual a 0, o status é 200, se nao for, o status é 404

    if (index >= 0) { // se o indice for maior ou igual a 0, significa que o objeto foi encontrado
       vendas[index] = {id: parseInt(id), descricao, andamento}; // atualizar o objeto no array vendas
    }

    return res.status(status).json(vendas[index]); // retornar o objeto atualizado
});

server.delete("/vendas/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = vendas.findIndex(item => item.id === id)
    const status =  index >= 0 ? 200 : 404;

    if (index >= 0) {
        vendas.splice(index, 1);//splice remove um item do array a partir do indice informado
    }

    return res.status(status).json(console.log("Item deletado com sucesso"));
});


server.listen (8000, () => console.log("rodando na porta 8000"));

//-----------------------------------desafio-----------------------------------

// const express = require("express");
// const server = express();

// server.use(express.json());

// let vendas = [
//   { id: 1, nome: "blusa", preco: 50 },
//   { id: 2, nome: "chinelo", preco: 10 },
//   { id: 3, nome: "relógio", preco: 20 }
// ];

// // LISTAR todas as vendas ou filtrar por preço
// server.get("/vendas", (req, res) => {
//   const { preco } = req.query;

//   if (preco) {
//     const filtro = vendas.filter(item => item.preco == preco);
//     if (filtro.length === 0) {
//       return res.status(404).json({ error: "preço não encontrado" });
//     }
//     return res.status(200).json(filtro);
//   }

//   return res.json(vendas);
// });

// // LISTAR venda por ID
// server.get("/vendas/:id", (req, res) => {
//   const id = parseInt(req.params.id);
//   const venda = vendas.find(item => item.id === id);
//   const status = venda ? 200 : 404;

//   return res.status(status).json(venda);
// });

// // CRIAR nova venda
// server.post("/vendas", (req, res) => {
//   const { nome, preco } = req.body;
//   const nextId = vendas.length === 0 ? 1 : vendas[vendas.length - 1].id + 1;
//   const novaVenda = { id: nextId, nome, preco };

//   vendas.push(novaVenda);

//   return res.status(201).json(novaVenda);
// });

// // ATUALIZAR venda por ID
// server.put("/vendas/:id", (req, res) => {
//   const id = parseInt(req.params.id);
//   const { nome, preco } = req.body;

//   const index = vendas.findIndex(item => item.id === id);
//   const status = index >= 0 ? 200 : 404;

//   if (index >= 0) {
//     vendas[index] = { id: parseInt(id), nome, preco };
//   }

//   return res.status(status).json(vendas[index]);
// });

// // DELETAR venda por ID
// server.delete("/vendas/:id", (req, res) => {
//   const id = parseInt(req.params.id);
//   const index = vendas.findIndex(item => item.id === id);
//   const status = index >= 0 ? 200 : 404;

//   if (index >= 0) {
//     vendas.splice(index, 1);
//   }

//   return res.status(status).json({ message: "Item deletado com sucesso" });
// });

// server.listen(4000, () => console.log("rodando na porta 4000"));