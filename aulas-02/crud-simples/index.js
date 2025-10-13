const express = require("express");
const server = express();

server.use(express.json());

let clientes = [
    {id: 1, name:"rafael", site: "http://rafael.com.br"},
    {id: 2, name:"matheus", site: "http://matheus.com.br" },
    {id: 3, name:"amanda", site: "http://amanda.com.br" }
];

// rota de listagem de clientes

server.get("/clientes", (req, res) => {
    return res.json(clientes);
});

server.get("/clientes/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const cliente = clientes.find(item => item.id === id);

    return res.json(clientes);
});


server.listen (3000, () => console.log("rodando na porta 3000"));

//@tag:nextEditSuggestions
