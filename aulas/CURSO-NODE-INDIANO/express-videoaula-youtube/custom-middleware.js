const express = require('express')
const app = express();

const requestTimestampLogger = (req,res,next) => {
    const timeStamp = new Date().toISOString();   // pega o horário da requisição
    const method = req.method                 // tipo de requisição (GET, POST, etc)
    const url = req.url                       // rota acessada
    const ip = req.ip                         // IP do cliente

    console.log(`[${timeStamp}] ${method} ${url} - IP: ${ip}`)
  next() // passa pra próxima função/rota
}

// aplica o middleware em todas as rotas
app.use (requestTimestampLogger)

// rotas
app.get('/', (req,res)=>{
    res.send('Home page');
});

app.get('/about', (req, res) =>{
    res.send('about page');
});

app.listen(3000,()=>{
    console.log(`server is now running on port 3000`); 
});