const express = require('express');
const server = express();


// query params = ?nome=rodrigo&idade=31



server.get("/hello", (req, res) => {
        const {nome, idade} = req.query;

    return res.json({
        title: "Hello World!",
        message: `Olá ${nome} tudo bem?`
    });
});

// route params = /Hello/:nome

server.get("/hello/:nome", (req, res) => {
    const {nome} = req.params;

    return res.json({
        title: "Hello worldK",
        message: `Ola ${nome} seja bem vindo!`
    });
})

server.listen(3000, () => console.log('Rodando em http://localhost:3000'));
//3000; 5000; 8000; 8080 portas comuns de serem usadas