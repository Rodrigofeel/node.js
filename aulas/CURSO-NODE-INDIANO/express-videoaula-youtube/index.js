const express = require('express') //importa a framework express

const app = express(); //aqui atribui nosso servidor "app" á framework express. esse objeto sabe lidar com rotas, requisições, respostas

app.get('/', (req, res) => { //aqui cria uma rota get no caminho "/"(pagina inicial)
    res.send("hello world"); //envia a mensagem "hello word" na pagina "/"
});

const port = 3000;
app.listen(port, ()=> { //liga o servidor na porta 3000
    console.log(`sever is now running at port ${port}`);
    
})