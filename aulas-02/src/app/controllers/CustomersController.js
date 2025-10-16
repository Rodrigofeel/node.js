let customers = [
        {id: 1, name:"rodrigo", site: "http://rodrigo.com.br"},
        {id: 2, name:"matheus", site: "http://matheus.com.br" },
        {id: 3, name:"gustavo", site: "http://gustavo.com.br" }
       ];
    class CustomersController {
    // listagem dos registros
    index(req, res) {
        return res.json(customers);

    }
    // listagem de um unico reigstro
    show(req, res) {
        const id = parseInt(req.params.id);
        const customer = customers.find(item => item.id === id);
        const status = customer ? 200 :404;

        console.log("GET :: /customer/:id", customer);
        return res.status(status).json(customer);

    }
    // cria um novo Customer
    create(req, res) {
        const {name, site} = req.body;
        const nextId = customers[customers.length - 1].id + 1;

        const newCustomer = {id: nextId, name, site};

        customers.push(newCustomer); // adiciona o novo objeto ao array customers

        return res.status(201).json(newCustomer);

    }
    // atualiza um customer
    update(req, res) {
        const id = parseInt(req.params.id); 
        const { name, site } = req.body; 

        const index = customers.findIndex(item => item.id === id); 
        const status =  index >= 0 ? 200 : 404; 
        if (index >= 0) { 
        customers[index] = {id: parseInt(id), name,site}; 
    }

    return res.status(status).json(customers[index]); 

    }
    // deleta um customer
    delete(req, res) {
        const id = parseInt(req.params.id);
        const index = customers.findIndex(item => item.id === id)
        const status =  index >= 0 ? 200 : 404;

        if (index >= 0) {
        customers.splice(index, 1);//splice remove um item do array a partir do indice informado
    }

    return res.status(status).json( {message: "Item deletado com sucesso"});

    }
}

module.exports = new CustomersController(); // exporta uma instância da classe CustomersController
