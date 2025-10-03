const { error } = require('console');
const fs = require('fs')

function person(name, callbackFn) {
    console.log(`Hello ${name}`);
    callbackFn()
    


}

function address() {
    console.log("brasil");
    
}

person('rodrigo', address)

fs.readFile('input.txt', 'utf8', (err, data)=>{
    if(err){
        console.error("error reading file", err)
        retorn 
    }

    console.log(data);
    
})