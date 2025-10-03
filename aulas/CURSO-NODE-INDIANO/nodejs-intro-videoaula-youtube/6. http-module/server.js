const http = require('http');
 
const server = http.createServer((req,res) => {

console.log(req.url, 'req.url'); // só para ver a URL da requisição
    res.writeHead(200, {'Content-type' : 'text/plain'})
    res.end("Hello node js form http module")
    
})

const port = 3000;
server.listen(port, () => {
     console.log(`serve is now listeining to port ${port}`);
     
})
