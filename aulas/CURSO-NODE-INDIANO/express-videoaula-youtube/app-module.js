const express = require ('express')

const app = express();

//application level settings
app.set('view engine', 'ejs')

//routing
app.get('/', (req, res)=> {  //quando alguem acessar a pagina "/" a pagina responderár com "home page"
    res.send('home page')
})

app.post('/api/data', (req,res)=> {
    res.json({
        message : 'Data received', 
        data : req.body
    })
})

app.use((err, req,res, next)=> {  //Esse é um middleware de erro
    console.log(err.stack)
    res.status(500).send(`someting went wrong`)
    
})