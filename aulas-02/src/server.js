
const app = require('./app'); //Importa o servidor já configurado (express + middlewares + rotas).

app.listen(3000,  () => console.log('Rodando na porta 3000'));