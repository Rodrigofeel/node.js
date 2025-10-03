const express = require('express') // importando a framework express
const app = express(); //"app é o servidor que vai lidar com requisição e resposta"

//root route
app.get('/', (req, res) => { //create a route at the root of the site
    res.send("wecolme to our home page");
});

//get all products
const products = [ //here is create a array, isso permite que diversas route tenham acesso a essa list
    {id: 1, label: 'product 1'},
    {id: 2, label: 'product 2'},
    {id: 3, label: 'product 3'},
];

app.get('/products', (req, res)=>{ // route "/products"
    res.json(products); // retorna os dados em json
    
});

//get a single product
app.get('/products/:id', (req, res) => { //route "/products/id". ":id" torna o parâmetro dinâmico na url
    console.log("req.params", req.params); //"req" é o objeto de requisição que o Express fornece quando alguém acessa uma rota.
    
    const productId = parseInt(req.params.id); // "req.params.id" pega o id da URL e converte para número "parseInt()"
    const singleProduct = products.find(product => product.id === productId);

    if (singleProduct) {
        res.json(singleProduct);
    } else { //se não existir o id mencionado na url, retorna um erro 404
        res.status(404).send('Product not found! Please try a different id.');
    }
});

//start the server
const port = 3000; //here define that the server is going to listen on port 3000 
app.listen(port, ()=> {  //start the server
    console.log(`sever is now running at port ${port}`); //fuction callback para informar que está rodando
});