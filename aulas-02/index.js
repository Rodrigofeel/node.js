const express = require('express');

const server = express();

server.get("/hello", (req, res) => {
    return res.send("Hello World!");
});

server.listen(3000);

//3000; 5000; 8000; 8080 portas comuns de serem usadas